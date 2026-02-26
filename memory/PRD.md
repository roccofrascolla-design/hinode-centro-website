# Hinode Centro - Product Requirements Document

## Overview
Professional, elegant, and SEO-optimized website for a boutique sea view apartment in Vieste's historic center, Italy.

**Property**: Hinode Centro - Sea View Apartment in Historic Center of Vieste
**Target Audience**: Couples, romantic travelers, remote workers seeking authentic Italian experience

---

## Original Problem Statement
Create a professional website for a holiday apartment that:
- Communicates exclusivity, authenticity, and panoramic sea views
- Positions property as boutique experience (not generic rental)
- Ranks organically for SEO keywords
- Increases direct bookings and reduces OTA dependency
- Features both Italian and English languages
- Mediterranean boutique design (bright, airy, elegant)

---

## User Personas
1. **Romantic Couples** - Seeking unique, intimate getaway with sea views
2. **Remote Workers** - Need comfortable workspace with inspiring views
3. **Culture Seekers** - Want authentic Italian experience in historic setting
4. **Beach Lovers** - Desire proximity to beaches without needing a car

---

## Core Requirements (Static)

### Functional Requirements
- ✅ Bilingual support (Italian default + English toggle)
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ WhatsApp direct contact integration
- ✅ Photo gallery with lightbox
- ✅ FAQ accordion
- ✅ Responsive mobile-first design
- ✅ Google Maps integration
- ⏳ Form submission to backend (Phase 2)
- ⏳ Availability calendar (Phase 2)

### Design Requirements
- ✅ Mediterranean color palette (soft sand, white, warm neutrals, sea blue accents)
- ✅ Custom fonts: Cormorant Garamond (headings) + Montserrat (body)
- ✅ Text-based elegant logo
- ✅ High-quality images (real apartment photos + Vieste landmarks)
- ✅ Smooth animations and hover effects
- ✅ Glass-morphism effects on buttons

### SEO Requirements
- ⏳ Meta tags and descriptions
- ⏳ Structured data markup
- ⏳ Optimized image alt texts
- ⏳ Sitemap generation
- ⏳ robots.txt configuration

---

## What's Been Implemented (Phase 1 - December 26, 2025)

### ✅ Frontend Architecture
- React 19 with functional components
- Context API for language management
- Shadcn UI components (Accordion, Toaster)
- TailwindCSS for styling
- Lucide React for icons

### ✅ Pages & Sections
1. **Header** - Sticky navigation with language toggle
2. **Hero** - Full-screen with Vieste sunset, emotional headline, CTAs
3. **Why Choose** - 4 feature cards with icons and hover effects
4. **Apartment** - Detailed spaces with real photos, amenities list
5. **Location** - Nearby attractions, Google Maps embed, atmosphere text
6. **Experience** - Emotional storytelling with 4 moments
7. **Gallery** - 8 images with lightbox modal
8. **Booking** - Contact form + WhatsApp button (mock submission)
9. **FAQ** - 6 common questions with accordion
10. **Footer** - Contact info, quick links, social media, legal

### ✅ Features Implemented
- Bilingual translations (Italian/English)
- Language persistence (localStorage)
- Mobile responsive navigation
- Smooth scroll to sections
- Form validation (client-side)
- Toast notifications (Sonner)
- Image lightbox gallery
- Hover animations and transitions

### ✅ Real Images Integrated
- 5 authentic apartment photos provided by client
- 5 Vieste landmark images (sunset, beaches, castle, town)

---

## Technology Stack

### Frontend
- **Framework**: React 19
- **Styling**: TailwindCSS + Custom CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Montserrat)
- **State Management**: Context API

### Backend (Phase 2)
- **Framework**: FastAPI (Python)
- **Database**: MongoDB
- **Email**: To be determined
- **Hosting**: Current preview deployment

---

## Prioritized Backlog

### P0 (Critical - Phase 2)
- [ ] Backend API for contact form submissions
- [ ] Email notification system for booking requests
- [ ] Database schema for inquiries
- [ ] Form data validation and sanitization
- [ ] SEO meta tags implementation
- [ ] Google Maps with actual coordinates
- [ ] Update WhatsApp number with real contact

### P1 (Important - Phase 3)
- [ ] Booking availability calendar
- [ ] Admin dashboard for inquiry management
- [ ] Email templates (booking confirmations, responses)
- [ ] Google Analytics integration
- [ ] Schema.org structured data
- [ ] Open Graph and Twitter Card meta tags
- [ ] Image optimization and lazy loading
- [ ] Sitemap and robots.txt

### P2 (Nice to Have - Future)
- [ ] Guest reviews/testimonials section
- [ ] Blog for local travel tips
- [ ] Integration with booking platforms (Booking.com, Airbnb)
- [ ] Multi-currency pricing
- [ ] Automated pricing calendar
- [ ] CRM integration
- [ ] Social media feed integration
- [ ] Live chat support

---

## Next Tasks
1. ✅ Complete frontend with mock data (DONE)
2. Gather actual Google Maps coordinates from client
3. Update WhatsApp contact number
4. Implement backend for form submissions
5. Add SEO optimization
6. Testing and refinement
7. Production deployment

---

## API Contracts (For Phase 2)

### POST /api/booking/inquiry
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "checkin": "date",
  "checkout": "date",
  "guests": "number",
  "message": "string (optional)",
  "language": "it|en"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry received",
  "inquiry_id": "string"
}
```

### GET /api/booking/availability
**Request:** Query params: ?checkin=YYYY-MM-DD&checkout=YYYY-MM-DD
**Response:**
```json
{
  "available": true,
  "dates": ["YYYY-MM-DD", ...]
}
```

---

## Notes
- Frontend currently uses mock data for form submissions
- All booking requests logged to console (Phase 1)
- Real photos successfully integrated
- Language toggle working perfectly
- Mobile responsive design verified
- Ready for backend integration

---

*Last Updated: December 26, 2025*
