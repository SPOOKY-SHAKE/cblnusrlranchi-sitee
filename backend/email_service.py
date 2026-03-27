import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from typing import List
import logging

logger = logging.getLogger(__name__)

CBL_EMAIL = "cbl@nusrlranchi.ac.in"

class EmailService:
    def __init__(self):
        self.smtp_host = os.getenv('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.getenv('SMTP_PORT', '587'))
        self.email_user = os.getenv('EMAIL_USER', CBL_EMAIL)
        self.email_password = os.getenv('EMAIL_PASSWORD', '')
        
    def send_contact_form_email(self, name: str, email: str, phone: str, subject: str, message: str) -> bool:
        """Send contact form submission to CBL email"""
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = self.email_user
            msg['To'] = CBL_EMAIL
            msg['Subject'] = f"Contact Form Submission: {subject}"
            
            html_body = f"""
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                        <h2 style="color: #E31E24; border-bottom: 2px solid #E31E24; padding-bottom: 10px;">New Contact Form Submission</h2>
                        
                        <div style="margin: 20px 0;">
                            <p style="margin: 10px 0;"><strong>Name:</strong> {name}</p>
                            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
                            <p style="margin: 10px 0;"><strong>Phone:</strong> {phone}</p>
                            <p style="margin: 10px 0;"><strong>Subject:</strong> {subject}</p>
                        </div>
                        
                        <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #E31E24;">
                            <h3 style="margin-top: 0; color: #555;">Message:</h3>
                            <p style="white-space: pre-wrap;">{message}</p>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        <p style="font-size: 12px; color: #888; text-align: center;">
                            This email was sent from the Center for Business Law website contact form.
                        </p>
                    </div>
                </body>
            </html>
            """
            
            msg.attach(MIMEText(html_body, 'html'))
            
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_user, self.email_password)
                server.send_message(msg)
            
            logger.info(f"Contact form email sent successfully from {email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send contact form email: {str(e)}")
            return False
    
    def send_newsletter_welcome_email(self, email: str) -> bool:
        """Send welcome email to new newsletter subscriber"""
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = self.email_user
            msg['To'] = email
            msg['Subject'] = "Welcome to CBL Newsletter - Center for Business Law"
            
            html_body = f"""
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #E31E24; margin: 0;">Center for Business Law</h1>
                            <p style="color: #666; margin: 10px 0;">National University of Study and Research in Law, Ranchi</p>
                        </div>
                        
                        <h2 style="color: #333;">Welcome to Our Newsletter!</h2>
                        
                        <p>Thank you for subscribing to the Center for Business Law newsletter.</p>
                        
                        <p>You'll now receive:</p>
                        <ul style="line-height: 2;">
                            <li>Latest legal insights and research updates</li>
                            <li>Compliance audit news and regulatory changes</li>
                            <li>Industry reports and analysis</li>
                            <li>Event notifications and workshops</li>
                        </ul>
                        
                        <div style="margin: 30px 0; padding: 20px; background-color: #FDF5F0; border-radius: 10px; text-align: center;">
                            <p style="margin: 0; font-size: 14px; color: #666;">
                                Stay connected with us for expert insights in business law!
                            </p>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                        
                        <p style="font-size: 12px; color: #888; text-align: center;">
                            Center for Business Law, NUSRL Ranchi<br>
                            Email: cbl@nusrlranchi.ac.in
                        </p>
                    </div>
                </body>
            </html>
            """
            
            msg.attach(MIMEText(html_body, 'html'))
            
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_user, self.email_password)
                server.send_message(msg)
            
            logger.info(f"Welcome email sent to {email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send welcome email: {str(e)}")
            return False
    
    def send_newsletter_to_subscribers(self, subject: str, content: str, subscribers: List[str]) -> dict:
        """Send newsletter to all subscribers"""
        results = {'success': 0, 'failed': 0}
        
        for subscriber_email in subscribers:
            try:
                msg = MIMEMultipart('alternative')
                msg['From'] = self.email_user
                msg['To'] = subscriber_email
                msg['Subject'] = subject
                
                html_body = f"""
                <html>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h1 style="color: #E31E24; margin: 0;">Center for Business Law</h1>
                                <p style="color: #666; margin: 10px 0;">National University of Study and Research in Law, Ranchi</p>
                            </div>
                            
                            <div style="margin: 20px 0;">
                                {content}
                            </div>
                            
                            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                            
                            <p style="font-size: 12px; color: #888; text-align: center;">
                                You're receiving this because you subscribed to CBL Newsletter<br>
                                Center for Business Law, NUSRL Ranchi<br>
                                Email: cbl@nusrlranchi.ac.in
                            </p>
                        </div>
                    </body>
                </html>
                """
                
                msg.attach(MIMEText(html_body, 'html'))
                
                with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                    server.starttls()
                    server.login(self.email_user, self.email_password)
                    server.send_message(msg)
                
                results['success'] += 1
                
            except Exception as e:
                logger.error(f"Failed to send newsletter to {subscriber_email}: {str(e)}")
                results['failed'] += 1
        
        return results

email_service = EmailService()
