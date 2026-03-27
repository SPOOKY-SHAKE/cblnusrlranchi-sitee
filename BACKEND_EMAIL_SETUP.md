# Backend Integration & Email Setup Guide

## 🎯 Overview
Your website now has full backend integration with email functionality connected to **cbl@nusrlranchi.ac.in**.

---

## ✅ Features Implemented

### 1. **Contact Form Integration**
- **Frontend**: ContactPage (`/contact`)
- **Backend API**: `POST /api/contact`
- **Functionality**:
  - Saves submission to MongoDB database
  - Sends formatted email to **cbl@nusrlranchi.ac.in**
  - Email includes: Name, Email, Phone, Subject, Message
  - Beautiful HTML email template with CBL branding

### 2. **Newsletter Subscription**
- **Frontend**: BlogPage (`/blog`) & GetStartedPage (`/get-started`)
- **Backend APIs**:
  - `POST /api/newsletter/subscribe` - Subscribe new email
  - `GET /api/newsletter/subscribers` - Get all subscribers
  - `POST /api/newsletter/send` - Send newsletter to all subscribers
- **Functionality**:
  - Saves subscriber email to MongoDB
  - Sends welcome email from **cbl@nusrlranchi.ac.in**
  - Prevents duplicate subscriptions
  - Can send newsletters to all subscribers at once

### 3. **Consultation Request**
- **Frontend**: GetStartedPage (`/get-started`)
- **Backend API**: `POST /api/contact`
- **Functionality**:
  - Collects: First Name, Last Name, Email, Company, Phone, Service Interest, Message
  - Sends to **cbl@nusrlranchi.ac.in** as consultation request

---

## 🔧 Email Configuration Setup

### Current Status
- ✅ Backend code ready
- ✅ Email service configured
- ✅ APIs working
- ⚠️ **Email credentials needed** to send actual emails

### Steps to Enable Email Sending

**Option 1: Using Gmail (Recommended)**

1. **Create/Use Gmail Account**:
   - Use existing: `cbl@nusrlranchi.ac.in` OR
   - Create Gmail forwarding if using custom domain

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "CBL Website"
   - Copy the 16-character password

3. **Update `/app/backend/.env`**:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   EMAIL_USER="your-email@gmail.com"
   EMAIL_PASSWORD="your-16-char-app-password"
   ```

4. **Restart Backend**:
   ```bash
   sudo supervisorctl restart backend
   ```

**Option 2: Using Custom SMTP Server**

If you have custom email server for nusrlranchi.ac.in:

1. **Get SMTP Details** from your email provider
2. **Update `/app/backend/.env`**:
   ```env
   SMTP_HOST="mail.nusrlranchi.ac.in"  # Your SMTP host
   SMTP_PORT="587"  # Usually 587 or 465
   EMAIL_USER="cbl@nusrlranchi.ac.in"
   EMAIL_PASSWORD="your-password"
   ```

3. **Restart Backend**

---

## 📊 Database Collections

### 1. **contact_submissions**
Stores all contact form submissions:
```javascript
{
  id: "uuid",
  name: "John Doe",
  email: "john@example.com",
  phone: "1234567890",
  subject: "Inquiry",
  message: "...",
  submitted_at: "2026-03-18T10:00:00",
  status: "pending"  // pending, contacted, resolved
}
```

### 2. **newsletter_subscribers**
Stores all newsletter subscribers:
```javascript
{
  id: "uuid",
  email: "subscriber@example.com",
  subscribed_at: "2026-03-18T10:00:00",
  is_active: true
}
```

---

## 🔗 API Endpoints Documentation

### Contact Form
**POST** `/api/contact`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "subject": "Subject here",
  "message": "Message here"
}
```
**Response**: `200 OK` with submission details

---

### Newsletter Subscribe
**POST** `/api/newsletter/subscribe`
```json
{
  "email": "subscriber@example.com"
}
```
**Response**: `200 OK` with subscriber details
**Error**: `400` if already subscribed

---

### Get Newsletter Subscribers
**GET** `/api/newsletter/subscribers`

**Response**: Array of all active subscribers
```json
[
  {
    "id": "uuid",
    "email": "subscriber@example.com",
    "subscribed_at": "2026-03-18T10:00:00",
    "is_active": true
  }
]
```

---

### Send Newsletter to All Subscribers
**POST** `/api/newsletter/send`
```json
{
  "subject": "Monthly Legal Updates - March 2026",
  "content": "<h2>Latest Updates</h2><p>Your HTML content here...</p>"
}
```
**Response**: 
```json
{
  "message": "Newsletter sent",
  "total_subscribers": 150,
  "success": 148,
  "failed": 2
}
```

---

## 📧 Email Templates

### 1. Contact Form Email (to CBL)
- Professional HTML template
- Includes all form details
- Red CBL branding (#E31E24)
- Footer with website info

### 2. Newsletter Welcome Email (to subscriber)
- Welcome message
- Lists what they'll receive
- CBL branding and contact info
- Professional layout

### 3. Newsletter Broadcast Email
- Custom subject and content
- CBL header with logo
- Unsubscribe information in footer

---

## 🧪 Testing Without Email Credentials

Even without email credentials configured, the system will:
- ✅ Save all submissions to database
- ✅ Show success messages to users
- ✅ Log email attempts in backend logs
- ⚠️ Not actually send emails

To test:
1. Submit contact form → Check MongoDB for entry
2. Subscribe to newsletter → Check MongoDB for subscriber
3. Check backend logs: `tail -f /var/log/supervisor/backend.out.log`

---

## 🚀 How to Send Newsletter

### Using API (Recommended)

Create a simple admin page or use tools like Postman:

```bash
curl -X POST https://your-domain/api/newsletter/send \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "March 2026 Legal Updates",
    "content": "<h2>Dear Subscriber</h2><p>Your content...</p>"
  }'
```

### Using Python Script

```python
import requests

response = requests.post(
    'https://your-domain/api/newsletter/send',
    json={
        'subject': 'Monthly Newsletter',
        'content': '<h2>Latest Updates</h2><p>Content here</p>'
    }
)
print(response.json())
```

---

## 📱 Frontend Features

### Contact Form
- Real-time validation
- Loading states during submission
- Success/error toast notifications
- Email sent to cbl@nusrlranchi.ac.in
- Form clears after successful submission

### Newsletter Subscription
- Available on Blog and Get Started pages
- Prevents duplicate subscriptions
- Welcome email sent automatically
- Toast notifications for feedback

### All Forms Include:
- ✅ Frontend validation
- ✅ Loading indicators
- ✅ Error handling
- ✅ Success feedback
- ✅ Backend integration

---

## 🔐 Security Notes

1. **Email Password**: Never commit to Git - store in `.env` only
2. **API Rate Limiting**: Consider adding rate limits for production
3. **Email Validation**: Backend validates all email addresses
4. **CORS**: Currently set to `*` - restrict in production

---

## 🎨 UI/UX Features

1. **New Logo**: Updated favicon and logos site-wide
2. **Page Title**: "CENTER FOR BUSINESS LAW"
3. **Loading States**: All forms show "Submitting...", "Subscribing..." etc.
4. **Disabled Buttons**: Prevent double submissions
5. **Toast Notifications**: Beautiful feedback messages
6. **Error Handling**: Graceful error messages with fallback instructions

---

## 📝 Files Modified/Created

### Backend:
- `/app/backend/server.py` - API endpoints
- `/app/backend/email_service.py` - Email sending logic
- `/app/backend/models.py` - Data models
- `/app/backend/.env` - Configuration (add email credentials here)

### Frontend:
- `/app/frontend/src/pages/ContactPage.jsx` - Backend integration
- `/app/frontend/src/pages/GetStartedPage.jsx` - Backend integration
- `/app/frontend/src/pages/BlogPage.jsx` - Backend integration
- `/app/frontend/public/index.html` - Updated favicon & title
- `/app/frontend/src/components/Header.jsx` - New logo
- `/app/frontend/src/components/Footer.jsx` - New logo

---

## ✅ Checklist to Go Live

- [ ] Add email credentials to `/app/backend/.env`
- [ ] Restart backend: `sudo supervisorctl restart backend`
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Verify emails are received at cbl@nusrlranchi.ac.in
- [ ] Check MongoDB for stored data
- [ ] Test sending newsletter to subscribers

---

## 🆘 Troubleshooting

### Emails Not Sending?
1. Check `/app/backend/.env` has correct credentials
2. Check backend logs: `tail -f /var/log/supervisor/backend.out.log`
3. Verify SMTP settings with your email provider
4. For Gmail: Ensure App Password is used, not regular password

### Form Not Submitting?
1. Check frontend console for errors (F12 → Console)
2. Verify backend is running: `sudo supervisorctl status backend`
3. Check API endpoint is accessible
4. Look at network tab in browser DevTools

### Database Not Saving?
1. Check MongoDB is running: `sudo supervisorctl status`
2. Verify MONGO_URL in backend .env
3. Check backend logs for database errors

---

## 📞 Support

For issues:
- Email: cbl@nusrlranchi.ac.in
- Check backend logs: `/var/log/supervisor/backend.*.log`
- Check frontend logs: `/var/log/supervisor/frontend.*.log`

---

Your website is now fully functional with backend integration! 🎉
Just add email credentials to start sending emails.
