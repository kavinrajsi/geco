# Contact Page — Design Specs

## Overview

Contact page with a form (left) and info sidebar (right) on desktop, plus a Google Map embed. Form submissions go to Zoho CRM with reCAPTCHA v3 spam protection.

**Route:** `/contact-us`
**File:** `src/app/contact-us/page.js`

---

## Page Sections

| # | Section | Component/Element |
|---|---------|-------------------|
| 1 | Page Header | `PageHeader` |
| 2 | Contact Grid | Form + Info sidebar |
| 3 | Google Map | Embedded iframe |

---

## Responsive Behavior

### Section Layout

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Padding: `40px $space-gutter 80px` | Padding: `60px $space-gutter 120px` |

### Contact Grid

| Mobile (<992px) | Desktop (≥992px) |
|-----------------|-------------------|
| Direction: Column | Direction: Row |
| Gap: `40px` | Gap: `60px` |
| Form width: `100%` | Form width: Flex 1 |
| Sidebar width: `100%` | Sidebar width: `410px` |

### Info Sidebar Typography

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Title font-size: `20px` | Title font-size: `24px` |
| Title line-height: `28px` | Title line-height: `32px` |
| Text font-size: `16px` | Text font-size: `18px` |
| Text line-height: `24px` | Text line-height: `26px` |

### Contact Buttons

| Property | Value |
|----------|-------|
| Height | `56px` |
| Padding | `0 24px` |
| Border radius | `50px` |
| Border | `1px solid #E9E9E9` |
| Gap | `12px` |
| Font-size | `16px` → `18px` (≥768px) |

### Google Map

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Width: `100%` | Width: `100%` |
| Height: `400px` | Height: `600px` |
| Border radius: `20px` | Border radius: `20px` |

---

## Form Details

See `components/contact-form.md` for full form specs including validation, error states, and submit behavior.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#1F1F1F` | Text |
| Lime | `#97D700` | Submit button |
| Dark Blue | `#10069F` | Button hover |
| Light Gray | `#E9E9E9` | Contact button borders |
| Off White | `#F7F7F7` | Form card background |
| Error Red | `#DB4444` | Validation errors |

---

## SEO

| Property | Value |
|----------|-------|
| Title | `Contact Us | Geco` |
| JSON-LD | `ContactPage` |
| Canonical | `/contact-us` |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `PageHeader` | See `components/page-header.md` |
| `ContactForm` | See `components/contact-form.md` |
