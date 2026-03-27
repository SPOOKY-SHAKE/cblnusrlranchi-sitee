from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class ContactFormSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"  # pending, contacted, resolved

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

class NewsletterSubscriber(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

class NewsletterSubscribe(BaseModel):
    email: EmailStr

class NewsletterSend(BaseModel):
    subject: str
    content: str
