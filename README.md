# NOVA Dental Studio — Premium Clinic Web Application & Interactive Preview

A bilingual (English / Bengali - বাংলা), accessibility-conscious, responsive web application for **NOVA Dental Studio** (Banani, Dhaka), built with React, Vite, and Tailwind CSS under the **Warm Atelier** architectural visual direction.

---

## 1. Quick Start & Preview

### Local Development
```bash
npm install
npm run dev
```
The dev server launches on `http://localhost:3000`.

### Type Check & Build
```bash
npm run lint      # tsc --noEmit (zero compiler warnings)
npm run build     # compiles production assets to /dist
```

---

## 2. Key Architecture & Route Structure

The application features full client-side SPA routing (`useRouter` / `Link` / `Breadcrumb` system) with dynamic SEO metadata, Open Graph cards, and structured data injection per route:

| Route | View / Component | Purpose |
|---|---|---|
| `/` | `App.tsx` (Homepage) | Atelier Hero, Brand Trust Strip, Core Clinical Disciplines, Philosophy & Technology, FAQs, and Booking CTA |
| `/services` | `ServicesPage.tsx` | Complete list of all 6 specialized treatments, indicative fee guidelines, and preparation protocols |
| `/services/:id` | `ServiceDetailPage.tsx` | In-depth procedure journey, step-by-step visit protocol, honest fee disclosure, and clinical recovery expectations |
| `/team` | `TeamPage.tsx` | Atelier clinical philosophy, care methodology, technology profile, and clinician credential slots |
| `/patient-guide` | `PatientGuidePage.tsx` | Anxiety management protocols, first-visit checklist, sterilization standard, and categorised FAQs (with `FAQPage` schema) |
| `/contact` | `ContactPage.tsx` | Banani studio location, hours, parking guidance, direct dial actions, interactive demo inquiry form |
| `/appointment` | `AppointmentPage.tsx` | Treatment-specific appointment request flow with real-time Bangladeshi phone validation (`01XXXXXXXXX`) and honest demo confirmation modal |

---

## 3. Brand & Contact Configuration (`/src/config/clinicData.ts`)

All business information is centralised in a single configuration file:
**`src/config/clinicData.ts`**

To customise or rebrand the clinic:
- **Clinic Name & Tagline:** `CLINIC_CONFIG.brand.nameEn`, `nameBn`, `taglineEn`, `taglineBn`
- **Location & Landmarks:** `addressEn`, `addressBn`, `landmarkEn`, `landmarkBn`, `mapDirectionsUrl`
- **Hours of Operation:** `hours.weekdayEn`, `hours.weekdayBn`, `hours.weekendEn`, `hours.weekendBn`
- **Live Contact Toggles:**
  - `isRealPhoneConfigured`: Set to `true` and configure `configuredRealPhone` when client's dedicated front desk line is ready.
  - `isRealWhatsAppConfigured`: Set to `true` and configure `configuredRealWhatsAppNumber` when client's business WhatsApp is verified.
- **Services & Price Transparency:** Edit items in `CLINIC_CONFIG.services` (titles, descriptions, step-by-step procedures, pricing labels).
- **Practice FAQs:** Add, update, or remove entries in `CLINIC_CONFIG.faqs`.

---

## 4. Assets & Production Replacement Requirements

Before launching publicly with real clinical patients, the following placeholders must be replaced with client-verified assets:

1. **Clinician Profiles & BMDC Registrations (`TeamPage.tsx` & `clinicData.ts`):**
   - Sample names and biographies must be replaced by real practitioners registered with the Bangladesh Medical & Dental Council (BMDC).
   - High-resolution, professional atelier portraits of the actual doctors in natural clinic lighting (no generic stock or AI-generated people portrayed as real doctors).
2. **Facility Photography:**
   - Client-owned photography of the actual Banani premises, sterilization bay, consultation lounges, and surgical operatory.
   - Vector art fallbacks in `src/components/ui/StudioArtwork.tsx` currently provide resilient visual identity without reliance on unverified external images.
3. **Verified Contact Details:**
   - Active phone number, WhatsApp Business phone number, and verified Google Maps place ID link.

---

## 5. Simulated Features & Backend Integration Path

### Simulated in this Prototype:
- **Appointment Request Form:** Validates required fields, patient name, and Bangladeshi phone numbers (`01XXXXXXXXX`). When submitted, it renders an **honest demo confirmation dialog** confirming that the submission is local to this preview session and that no real doctor booking or SMS/email has been dispatched.
- **Inquiry Form on Contact Page:** Validates topic, phone, and inquiry text; clears on submission with a simulated acknowledgment card.
- **Google Maps Embed:** Currently links to standard Google Maps coordinates for Banani, Dhaka.

### Production Backend Integration Guide:
To wire this frontend to a real medical booking backend:
1. **API Endpoints:**
   - `POST /api/appointments`: Connect `AppointmentPage.tsx` `handleSubmit` to your API gateway (e.g. Firebase Firestore, Node/Express, Supabase, or PostgreSQL).
   - `POST /api/contact`: Connect `ContactPage.tsx` `handleSubmit` to a transactional messaging service (e.g. Resend, SendGrid, or local SMS provider).
2. **SMS Notification Gateway:**
   - For Bangladeshi patient reminders, connect an SMS gateway (such as Greenweb, BulkSMS BD, or Twilio) to deliver instant booking confirmations.
3. **Calendar / EHR Sync:**
   - Integrate with Google Calendar API or dedicated dental practice management software (e.g. Dentrix, Curve Dental).

---

## 6. Technical Quality & Compliance Status

- **Type Safety & Linting:** 100% clean `tsc --noEmit` validation with 0 errors.
- **SEO & Search Indexation:**
  - Route-specific `<title>`, `<meta name="description">`, canonical links, and Open Graph tags handled dynamically via `<RouteSeo />`.
  - Static `robots.txt` and `sitemap.xml` generated in `/public`.
  - Bespoke geometric SVG favicon (`/public/favicon.svg`).
  - `LocalBusiness/Dentist` Schema.org JSON-LD configured with explicit `"isDemoSample": true` disclosure.
  - `FAQPage` Schema.org JSON-LD configured on `/patient-guide`.
- **Accessibility (WCAG 2.2 AA Guidance):**
  - Semantic HTML landmarks (`<header>`, `<main id="main-content">`, `<section>`, `<footer>`).
  - Screen reader "Skip to main content" link at the top of the viewport.
  - High-contrast text pairings exceeding 4.5:1 ratio on primary content surfaces.
  - Full keyboard accessibility with `Escape` key close on mobile menu and modals.
  - `aria-expanded`, `aria-controls`, and `aria-labelledby` attributes across accordions and mobile drawers.
  - Respect for `prefers-reduced-motion` in CSS.
  - Dynamic `document.documentElement.lang` synchronisation (`en` vs `bn`).
- **Core Web Vitals Goals (Unmeasured Targets):**
  - Target LCP $\le$ 2.5s (achieved through vector SVG art, zero heavy external fonts beyond preconnected Google Fonts, lightweight bundle).
  - Target INP $\le$ 200ms (zero blocking heavy scripts).
  - Target CLS $\le$ 0.1 (explicit aspect ratios and reserved dimensions on all image/art containers).

---

## 7. Recommended Next Steps Before Public Launch

1. Review and verify clinic address, floor number, and road coordinates with clinic ownership.
2. Photograph real premises and clinicians to replace demo placeholders.
3. Obtain client sign-off on procedure pricing guidance and BMDC credentials.
4. Save git commit checkpoint prior to deploying to a production custom domain.
