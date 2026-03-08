# Contact Form

## Overview

The contact form collects user inquiries and sends them as emails via ZeptoMail. It includes client-side validation with inline error messages, a honeypot field for basic bot protection, and Google reCAPTCHA v3 for advanced spam prevention. On successful submission, the form is replaced with a success message.

---

## Architecture

```
User submits form
      │
      ▼
ContactForm (client component)
  ├── Client-side validation
  ├── Honeypot check (hidden field)
  ├── reCAPTCHA v3 token generation
  └── POST /api/contact
            │
            ▼
      API Route (server)
        ├── Honeypot check → silent success if filled
        ├── Server-side validation
        ├── reCAPTCHA token verification via Google API
        └── Send email via ZeptoMail API
```

---

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js              ← API route — validates, verifies reCAPTCHA, sends email
│   ├── contact/
│   │   ├── page.js                   ← Contact page — renders ContactForm component
│   │   └── page.module.scss          ← Page-level layout styles
│   └── layout.js                     ← Wraps app with RecaptchaProvider
├── components/
│   ├── ContactForm/
│   │   ├── ContactForm.js            ← Form component — state, validation, submission
│   │   └── ContactForm.module.scss   ← Form styles — fields, errors, honeypot, success
│   └── RecaptchaProvider/
│       └── RecaptchaProvider.js       ← Client wrapper for GoogleReCaptchaProvider
```

---

## Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
ZEPTO_MAIL_API_KEY=your_zeptomail_api_key
ZEPTO_FROM_EMAIL=noreply@yourdomain.com
ZEPTO_FROM_NAME=Geco
ZEPTO_TO_EMAIL=contact@yourdomain.com
RECAPTCHA_SECRET_KEY=your_recaptcha_v3_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_v3_site_key
```

| Variable | Side | Description |
|----------|------|-------------|
| `ZEPTO_MAIL_API_KEY` | Server | ZeptoMail API key for sending transactional emails |
| `ZEPTO_FROM_EMAIL` | Server | Sender email address (must be verified in ZeptoMail) |
| `ZEPTO_FROM_NAME` | Server | Sender display name |
| `ZEPTO_TO_EMAIL` | Server | Recipient email address for form submissions |
| `RECAPTCHA_SECRET_KEY` | Server | Google reCAPTCHA v3 secret key |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Client | Google reCAPTCHA v3 site key (public) |

---

## Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | text | Yes | Minimum 2 characters |
| Email | email | Yes | Valid email format |
| Phone | tel | No | Only digits, spaces, dashes, `+`, and parentheses |
| Company | text | No | None |
| Message | textarea | Yes | Minimum 10 characters |
| Honeypot | text (hidden) | — | Must be empty (bot trap) |

---

## Validation

### Client-side (inline errors)

Validation runs on submit. Errors appear inline below each field. When a user edits a field that has an error, the error clears immediately.

```jsx
// Inline error display pattern
{errors.name && <span className={styles.error}>{errors.name}</span>}
```

### Server-side

The API route validates required fields independently of the client. If the honeypot field is filled, it returns a silent `{ success: true }` to avoid tipping off bots.

---

## Spam Protection

### Honeypot

A hidden text field (`honeypot`) is rendered off-screen using CSS. Real users never see or fill it. Bots that auto-fill all fields will populate it, triggering a silent rejection on the server.

```scss
.honeypot {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}
```

### Google reCAPTCHA v3

reCAPTCHA v3 runs invisibly — no checkbox or challenge. It assigns a score (0.0 to 1.0) based on user behavior. The API route rejects submissions with a score below 0.5.

The `RecaptchaProvider` wraps the app in `layout.js`. If `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is not set, the provider is skipped and the form works without reCAPTCHA.

---

## Submission Flow

1. User fills in the form and clicks "Send Message"
2. Client-side validation runs — if errors exist, they display inline and submission stops
3. reCAPTCHA v3 generates a token (if configured)
4. Form data + token are sent as JSON to `POST /api/contact`
5. Server checks honeypot → validates fields → verifies reCAPTCHA → sends email via ZeptoMail
6. On success: form is hidden and a "Thank you" message is displayed
7. On error: server error message appears above the submit button

### Status states

| Status | UI |
|--------|---|
| `idle` | Form is interactive, button shows "Send Message" |
| `submitting` | Button shows "Sending..." and is disabled |
| `success` | Form is replaced with a thank-you message |

---

## Email Delivery (ZeptoMail)

The API route sends an HTML email via ZeptoMail's transactional email API. The email body is a formatted table with all submitted fields. All user input is HTML-escaped to prevent injection.

### ZeptoMail setup

1. Create a ZeptoMail account at [zeptomail.zoho.com](https://zeptomail.zoho.com)
2. Verify your sending domain
3. Generate an API key (Mail Agent → Setup Info → API)
4. Add the API key and email addresses to `.env.local`

---

## Usage

The contact page (`src/app/contact/page.js`) simply renders the component:

```jsx
import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
      <ContactForm />
    </div>
  );
}
```

The `ContactForm` component is self-contained — it manages its own state, validation, and API calls. No props are needed.

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `react-google-recaptcha-v3` | Google reCAPTCHA v3 client integration |
