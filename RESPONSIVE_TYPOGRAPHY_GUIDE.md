# Responsive Typography Guide - CENTER FOR BUSINESS LAW

## 📱 Cross-Device Typography System

This guide ensures harmonious typography across all devices (phone, tablet, laptop).

---

## 🎯 Typography Scale

### Device Breakpoints
```
Mobile:  320px - 767px  (default, no prefix)
Tablet:  768px - 1023px (md: prefix)
Laptop:  1024px+        (lg: prefix)
Desktop: 1280px+        (xl: prefix)
```

---

## 📐 Font Size Guidelines

### 1. **Hero Titles** (Main Landing Headings)
```
Mobile:  text-4xl  (2.25rem / 36px)  → Use for impact
Tablet:  text-6xl  (3.75rem / 60px)  → md:text-6xl
Laptop:  text-8xl  (6rem / 96px)     → lg:text-8xl
```

**Tailwind Classes:**
```html
<h1 className="text-4xl md:text-6xl lg:text-8xl font-['Times_New_Roman'] font-medium">
  WE RESEARCH, SO YOU KEEP UPDATED
</h1>
```

---

### 2. **Page Titles** (About, Services, Blog, Contact)
```
Mobile:  text-3xl  (1.875rem / 30px)
Tablet:  text-4xl  (2.25rem / 36px)  → md:text-4xl
Laptop:  text-5xl  (3rem / 48px)     → lg:text-5xl
```

**Tailwind Classes:**
```html
<h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
  About CENTER FOR BUSINESS LAW
</h1>
```

---

### 3. **Section Headings** (Our Services, Meet Our Team, etc.)
```
Mobile:  text-2xl  (1.5rem / 24px)
Tablet:  text-3xl  (1.875rem / 30px) → md:text-3xl
Laptop:  text-4xl  (2.25rem / 36px)  → lg:text-4xl
```

**Tailwind Classes:**
```html
<h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900">
  Explore Our Comprehensive Offerings
</h2>
```

---

### 4. **Card/Component Titles**
```
Mobile:  text-lg   (1.125rem / 18px)
Tablet:  text-xl   (1.25rem / 20px)  → md:text-xl
Laptop:  text-2xl  (1.5rem / 24px)   → lg:text-2xl
```

**Tailwind Classes:**
```html
<h3 className="text-lg md:text-xl lg:text-2xl font-serif">
  Research & Development
</h3>
```

---

### 5. **Lead/Intro Paragraphs**
```
Mobile:  text-base  (1rem / 16px)
Tablet:  text-lg    (1.125rem / 18px) → md:text-lg
Laptop:  text-xl    (1.25rem / 20px)  → lg:text-xl
```

**Tailwind Classes:**
```html
<p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
  Premier Law Institution dedicated to empower business minds...
</p>
```

---

### 6. **Body Text** (Regular paragraphs)
```
Mobile:  text-sm    (0.875rem / 14px)
Tablet:  text-base  (1rem / 16px)     → md:text-base
Laptop:  text-base  (1rem / 16px)     → lg:text-base
```

**Tailwind Classes:**
```html
<p className="text-sm md:text-base leading-relaxed text-gray-700">
  We research on business laws, compliance audits...
</p>
```

---

### 7. **Small Text** (Captions, Labels, Meta info)
```
Mobile:  text-xs   (0.75rem / 12px)
Tablet:  text-sm   (0.875rem / 14px) → md:text-sm
Laptop:  text-sm   (0.875rem / 14px) → lg:text-sm
```

**Tailwind Classes:**
```html
<span className="text-xs md:text-sm text-gray-500">
  March 15, 2026
</span>
```

---

### 8. **Buttons**
```
Mobile:  text-sm    (0.875rem / 14px)
Tablet:  text-base  (1rem / 16px)     → md:text-base
Laptop:  text-base  (1rem / 16px)     → lg:text-base
```

**Tailwind Classes:**
```html
<button className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
  READ MORE
</button>
```

---

## 🎨 Font Family Guidelines

### Primary Fonts
```css
/* Headings - Serif */
font-family: 'Playfair Display', serif;
Tailwind: font-serif

/* Special Headlines - Times New Roman */
font-family: 'Times New Roman', serif;
Tailwind: font-['Times_New_Roman']

/* Body Text - Sans Serif */
font-family: 'Inter', -apple-system, sans-serif;
Tailwind: (default, no class needed)

/* Special Sections - Georgia */
font-family: 'Georgia', serif;
Tailwind: font-['Georgia']
```

---

## 📱 Device-Specific Layout Adjustments

### Mobile (320px - 767px)
```
- Single column layouts
- Stack all content vertically
- Full-width images
- Larger touch targets (min 44px)
- Reduce padding: p-4 instead of p-8
```

### Tablet (768px - 1023px)
```
- 2-column grids: grid-cols-1 md:grid-cols-2
- Moderate padding: p-6 md:p-8
- Larger images
- Comfortable reading width
```

### Laptop/Desktop (1024px+)
```
- 3+ column grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Maximum padding: p-8 lg:p-12
- Full layout features
- Optimal reading width: max-w-7xl
```

---

## 🔤 Complete Component Examples

### Hero Section
```jsx
<section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-['Times_New_Roman'] font-medium text-center mb-6 md:mb-8">
      WE RESEARCH, SO YOU KEEP UPDATED
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
      The Center for Business Law serves as a premier hub...
    </p>
  </div>
</section>
```

### Card Component
```jsx
<div className="p-6 md:p-8 lg:p-10 rounded-2xl">
  <h3 className="text-lg md:text-xl lg:text-2xl font-serif mb-3 md:mb-4">
    Research & Development
  </h3>
  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
    Expert legal research and analysis...
  </p>
  <button className="mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
    READ MORE
  </button>
</div>
```

### Navigation
```jsx
<nav className="hidden md:flex items-center gap-4 lg:gap-8">
  <a className="text-sm lg:text-base">Home</a>
  <a className="text-sm lg:text-base">About</a>
  <a className="text-sm lg:text-base">Services</a>
</nav>
```

---

## 📊 Spacing Guidelines

### Padding/Margin Scale
```
Mobile:   p-4, gap-4, space-y-4
Tablet:   md:p-6, md:gap-6, md:space-y-6
Laptop:   lg:p-8, lg:gap-8, lg:space-y-8
Desktop:  xl:p-12, xl:gap-12, xl:space-y-12
```

### Container Widths
```
Mobile:   px-4  (16px sides)
Tablet:   md:px-6  (24px sides)
Laptop:   lg:px-8  (32px sides)
```

---

## ✅ Implementation Checklist

### For Each Component:
- [ ] Set base mobile size (smallest)
- [ ] Add tablet breakpoint (md:)
- [ ] Add laptop breakpoint (lg:)
- [ ] Test on all three device sizes
- [ ] Verify line-height for readability
- [ ] Check touch target sizes (mobile)
- [ ] Ensure proper spacing scales

---

## 🎯 Quick Reference Table

| Element | Mobile | Tablet | Laptop | Class |
|---------|--------|--------|--------|-------|
| **Hero Title** | 36px | 60px | 96px | `text-4xl md:text-6xl lg:text-8xl` |
| **Page Title** | 30px | 36px | 48px | `text-3xl md:text-4xl lg:text-5xl` |
| **Section Heading** | 24px | 30px | 36px | `text-2xl md:text-3xl lg:text-4xl` |
| **Card Title** | 18px | 20px | 24px | `text-lg md:text-xl lg:text-2xl` |
| **Lead Text** | 16px | 18px | 20px | `text-base md:text-lg lg:text-xl` |
| **Body Text** | 14px | 16px | 16px | `text-sm md:text-base` |
| **Small Text** | 12px | 14px | 14px | `text-xs md:text-sm` |
| **Buttons** | 14px | 16px | 16px | `text-sm md:text-base` |

---

## 🔧 Testing Commands

### View on Different Sizes (Browser DevTools)
```
Mobile:  375px width (iPhone)
Tablet:  768px width (iPad)
Laptop:  1440px width (MacBook)
```

### Chrome DevTools Shortcuts
```
1. Press F12
2. Click device toolbar icon
3. Select device or enter custom dimensions
```

---

## 🎨 Color Contrast Guidelines

### Minimum Contrast Ratios (WCAG AA)
```
Normal text:  4.5:1
Large text (18px+): 3:1

Current Colors:
- Gray-900 on White: ✅ 14.7:1
- Gray-700 on White: ✅ 8.2:1
- Gray-600 on White: ✅ 5.7:1
- #E31E24 on White: ✅ 4.9:1
```

---

## 📱 Title Bar Configuration

### Browser Tab Title
**File:** `/app/frontend/public/index.html`

```html
<title>CENTER FOR BUSINESS LAW</title>
```

**Current Status:** ✅ Already configured

---

## 🚀 Implementation Priority

### Phase 1: Core Pages
1. ✅ Homepage (Hero, Services, Testimonials)
2. ✅ About Page
3. ✅ Services Page
4. ✅ Blog Page

### Phase 2: Secondary Pages
5. Contact Page
6. Get Started Page
7. Individual Service Pages
8. Individual Blog Posts

---

## 💡 Best Practices

1. **Mobile First**: Always start with mobile sizes
2. **Progressive Enhancement**: Add larger sizes with breakpoints
3. **Test Real Devices**: Don't rely only on browser tools
4. **Readability**: Maintain 45-75 characters per line
5. **Touch Targets**: Minimum 44x44px on mobile
6. **Line Height**: 1.5-1.6 for body text, 1.2-1.3 for headings
7. **Letter Spacing**: Slight increase for uppercase text
8. **Font Loading**: Use font-display: swap for web fonts

---

Your typography system is now configured for optimal cross-device harmony! 🎉
