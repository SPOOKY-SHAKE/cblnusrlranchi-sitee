from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
from models import ContactFormSubmission, ContactFormCreate, NewsletterSubscriber, NewsletterSubscribe, NewsletterSend
from email_service import email_service


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(form_data: ContactFormCreate):
    """Submit contact form and send email to cbl@nusrlranchi.ac.in"""
    try:
        # Create submission object
        submission = ContactFormSubmission(**form_data.model_dump())
        
        # Save to database
        doc = submission.model_dump()
        doc['submitted_at'] = doc['submitted_at'].isoformat()
        await db.contact_submissions.insert_one(doc)
        
        # Send email to CBL
        email_sent = email_service.send_contact_form_email(
            name=form_data.name,
            email=form_data.email,
            phone=form_data.phone,
            subject=form_data.subject,
            message=form_data.message
        )
        
        if email_sent:
            logger.info(f"Contact form submitted and emailed: {form_data.email}")
        else:
            logger.warning(f"Contact form saved but email failed: {form_data.email}")
        
        return submission
    except Exception as e:
        logger.error(f"Contact form submission error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactFormSubmission])
async def get_contact_submissions():
    """Get all contact form submissions"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    for sub in submissions:
        if isinstance(sub['submitted_at'], str):
            sub['submitted_at'] = datetime.fromisoformat(sub['submitted_at'])
    return submissions

# Newsletter Endpoints
@api_router.post("/newsletter/subscribe", response_model=NewsletterSubscriber)
async def subscribe_newsletter(subscription: NewsletterSubscribe):
    """Subscribe to newsletter - saves email and sends welcome email"""
    try:
        # Check if already subscribed
        existing = await db.newsletter_subscribers.find_one({"email": subscription.email})
        
        if existing:
            # Reactivate if previously unsubscribed
            if not existing.get('is_active', True):
                await db.newsletter_subscribers.update_one(
                    {"email": subscription.email},
                    {"$set": {"is_active": True, "subscribed_at": datetime.now(timezone.utc).isoformat()}}
                )
                return NewsletterSubscriber(**existing)
            raise HTTPException(status_code=400, detail="Email already subscribed")
        
        # Create new subscriber
        subscriber = NewsletterSubscriber(**subscription.model_dump())
        doc = subscriber.model_dump()
        doc['subscribed_at'] = doc['subscribed_at'].isoformat()
        await db.newsletter_subscribers.insert_one(doc)
        
        # Send welcome email
        email_sent = email_service.send_newsletter_welcome_email(subscription.email)
        
        if email_sent:
            logger.info(f"Newsletter subscription successful: {subscription.email}")
        else:
            logger.warning(f"Newsletter saved but welcome email failed: {subscription.email}")
        
        return subscriber
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Newsletter subscription error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to subscribe to newsletter")

@api_router.get("/newsletter/subscribers", response_model=List[NewsletterSubscriber])
async def get_newsletter_subscribers():
    """Get all active newsletter subscribers"""
    subscribers = await db.newsletter_subscribers.find(
        {"is_active": True}, 
        {"_id": 0}
    ).to_list(10000)
    
    for sub in subscribers:
        if isinstance(sub['subscribed_at'], str):
            sub['subscribed_at'] = datetime.fromisoformat(sub['subscribed_at'])
    
    return subscribers

@api_router.post("/newsletter/send")
async def send_newsletter(newsletter: NewsletterSend):
    """Send newsletter to all active subscribers"""
    try:
        # Get all active subscribers
        subscribers = await db.newsletter_subscribers.find(
            {"is_active": True}
        ).to_list(10000)
        
        if not subscribers:
            raise HTTPException(status_code=404, detail="No active subscribers found")
        
        # Extract email addresses
        subscriber_emails = [sub['email'] for sub in subscribers]
        
        # Send newsletter
        results = email_service.send_newsletter_to_subscribers(
            subject=newsletter.subject,
            content=newsletter.content,
            subscribers=subscriber_emails
        )
        
        logger.info(f"Newsletter sent: {results['success']} success, {results['failed']} failed")
        
        return {
            "message": "Newsletter sent",
            "total_subscribers": len(subscriber_emails),
            "success": results['success'],
            "failed": results['failed']
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Newsletter send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send newsletter")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()