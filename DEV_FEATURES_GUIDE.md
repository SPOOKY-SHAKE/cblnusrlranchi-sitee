# 🛠️ Dev Features Guide - Center for Business Law Website

## 📋 Overview
This document explains all the development features available in your website, allowing you to manage images, content, and pages independently.

---

## 🎨 Dev Admin Panel - Image Management

### How to Access
1. Look for the **purple gear icon (⚙️)** in the **bottom-right corner** of any page
2. Click it to open the Dev Admin Panel

### Features Available

#### 1. **Favicon Upload** 
- Change the icon that appears in the browser tab
- Click on "Favicon & Logo" tab
- Upload your custom favicon image
- Changes apply immediately

#### 2. **Site Images Management**
The panel organizes all images by category:

- **Service Images (5)**: Images for the 5 service offerings
  - Research & Development
  - Tailored Updates  
  - Professional Consulting
  - Industry Report
  - Legal Insights

- **Blog Post Images (6)**: Images for all blog articles

- **Team Member Images (3)**: Photos of team members
  - Prof. Dr. Hiral Mehta
  - Prof. Dr. Shantanu Braj Choubey
  - Sarthak Kumar Ambastha

- **Testimonial Images (2)**: Photos for client testimonials

#### How to Upload Images
1. Open Dev Admin Panel
2. Click on "Site Images" tab
3. Hover over any image
4. Click the "Upload" button that appears
5. Select your new image file
6. Page will automatically reload with the new image

#### Storage
- All uploaded images are stored in browser localStorage
- Images persist across sessions
- To revert to original images, clear browser cache

---

## 🔗 Hyperlinked Pages

### Individual Blog Posts
**Every blog post is now clickable!**

- **Access**: Go to Blog page → Click on any blog card
- **URL Pattern**: `/blog/:id` (e.g., `/blog/1`, `/blog/2`)
- **Features**:
  - Full blog post detail page
  - Hero image banner
  - Category tags
  - Author and date info
  - Complete article content
  - Related articles section
  - "Contact Us" CTA

**Available Blog Posts** (6):
1. AI Adoption and Board Oversight in 2026
2. Data Privacy and Cybersecurity Compliance Updates
3. International Trade and Supply Chain Resilience
4. ESG Implementation and Corporate Responsibility
5. Contract Management Best Practices for 2026
6. Employment Law Updates and Remote Work Policies

### Individual Service Pages
**Every service is now clickable!**

- **Access**: 
  - From Homepage → Click "READ MORE" on any service
  - From Services page → Click on service title or image
- **URL Pattern**: `/service/:id` (e.g., `/service/1`, `/service/2`)
- **Features**:
  - Dedicated service detail page
  - Large featured image
  - Detailed service description
  - Key benefits list
  - 4-step process section
  - CTA buttons (Contact Us, Request Consultation)

**Available Services** (5):
1. Research & Development (id: 1)
2. Tailored Updates (id: 2)
3. Professional Consulting (id: 3)
4. Industry Report (id: 4)
5. Legal Insights (id: 5)

---

## 📄 Complete Page Structure

Your website now has **8 functional pages**:

### Main Pages:
1. **Home** (`/`) - Main landing page
2. **About** (`/about`) - Organization info and team
3. **Services** (`/services`) - Services overview
4. **Blog** (`/blog`) - Blog listing
5. **Contact** (`/contact`) - Contact form
6. **Get Started** (`/get-started`) - Consultation request + Newsletter

### Dynamic Pages:
7. **Individual Blog Posts** (`/blog/:id`) - 6 unique blog detail pages
8. **Individual Services** (`/service/:id`) - 5 unique service detail pages

---

## 🎯 How to Develop Content Independently

### Adding/Editing Blog Content
**Location**: `/app/frontend/src/mockData.js`

```javascript
// Find blogData array and edit:
{
  id: 1,
  title: "Your Blog Title",
  excerpt: "Short description...",
  date: "March 15, 2026",
  author: "Author Name",
  category: "Category Name",
  image: "image-url-here",
  content: "Full content..."
}
```

### Adding/Editing Services
**Location**: `/app/frontend/src/mockData.js`

```javascript
// Find servicesData array and edit:
{
  id: 1,
  title: "Service Name",
  description: "Service description...",
  image: "image-url-here"
}
```

### Adding/Editing Team Members
**Location**: `/app/frontend/src/mockData.js`

```javascript
// Find teamData array and edit:
{
  id: 1,
  name: "Team Member Name",
  position: "Position Title",
  bio: "Short bio...",
  image: "image-url-here"
}
```

---

## 🔧 To Remove Dev Features

When you're ready to remove the dev admin panel:

1. Open `/app/frontend/src/App.js`
2. Remove this line:
   ```javascript
   import DevAdminPanel from "./components/DevAdminPanel";
   ```
3. Remove this line from the JSX:
   ```javascript
   <DevAdminPanel />
   ```
4. Save the file

The purple gear icon will disappear and the image upload feature will be disabled.

---

## 📝 Newsletter Feature

Available on two pages:
1. **Blog Page** - Newsletter signup at bottom
2. **Get Started Page** - Newsletter signup with consultation form

Both use toast notifications to confirm subscriptions.

---

## 🎨 Customization Tips

### Colors
- Primary Red: `#E31E24`
- Background Beige: `#FDF5F0`
- Accent Gold: `#C4A574`

### Fonts
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Some sections: Georgia, Times New Roman, Verdana (as per your edits)

### Modular Structure
Every component is independent:
- `/app/frontend/src/components/` - Reusable components
- `/app/frontend/src/pages/` - Individual pages
- `/app/frontend/src/mockData.js` - All content data

---

## 🚀 Quick Actions

### Change a Blog Post Image
1. Click purple gear icon (bottom right)
2. Click "Site Images" tab
3. Scroll to "Blog Post Images"
4. Hover over the image you want to change
5. Click "Upload"
6. Select new image
7. Page auto-reloads

### Add a New Blog Post
1. Edit `/app/frontend/src/mockData.js`
2. Add new entry to `blogData` array
3. Use next available ID number
4. Save file
5. New post appears automatically on blog page

### Change Team Photos
1. Click purple gear icon
2. Go to "Site Images" tab
3. Scroll to "Team Member Images"
4. Upload new photos for each team member

---

## 📞 Support

If you need help with:
- Adding more pages
- Backend integration
- Database connection
- Custom features

Just let me know and I'll assist!

---

## ✅ Current Status

✅ All 6 pages created and functional
✅ Blog posts hyperlinked (6 individual pages)
✅ Services hyperlinked (5 individual pages)
✅ Dev Admin Panel with image upload
✅ Favicon change capability
✅ Newsletter subscription forms
✅ Contact form with toast notifications
✅ Modular, block-based structure
✅ All content in mockData.js for easy editing

**Total Pages**: 8 main + 11 dynamic = **19 total accessible pages**

---

Your website is now fully modular and easy to manage! 🎉
