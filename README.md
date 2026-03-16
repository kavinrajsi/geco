# Geco

Monorepo for the Geco website — a Next.js frontend powered by a Strapi CMS backend.

## Project Structure

```
geco/
├── cms/            # Strapi 5 CMS (port 1337)
├── website/        # Next.js 16 frontend (port 3000)
└── README.md
```

## Prerequisites

- **Node.js** >= 20
- **npm** >= 6

## Getting Started

### 1. Install dependencies

```bash
# CMS
cd cms
npm install

# Website
cd ../website
npm install
```

### 2. Configure environment variables

**CMS** — create `cms/.env` (see `cms/.env.example`):

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=<comma-separated-random-strings>
API_TOKEN_SALT=<random-string>
ADMIN_JWT_SECRET=<random-string>
TRANSFER_TOKEN_SALT=<random-string>
JWT_SECRET=<random-string>
ENCRYPTION_KEY=<random-string>
```

**Website** — create `website/.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=<your-strapi-api-token>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<recaptcha-v3-site-key>
RECAPTCHA_SECRET_KEY=<recaptcha-v3-secret-key>
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
REVALIDATE_SECRET=<shared-secret-for-isr-revalidation>
```

### 3. Run development servers

```bash
# Terminal 1 — Start Strapi
cd cms
npm run develop

# Terminal 2 — Start Next.js
cd website
npm run dev
```

To run the website against the live CMS instead of local:

```bash
cd website
npm run dev:live
```

- **CMS Admin Panel**: http://localhost:1337/admin
- **Website**: http://localhost:3000

## CMS Setup

On first run, Strapi will prompt you to create an admin account. After that:

1. Go to **Settings > API Tokens** and create a Full Access token
2. Add the token to `website/.env.local` as `STRAPI_API_TOKEN`
3. Go to **Settings > Roles > Public** and enable `find` / `findOne` permissions for the content types you want publicly accessible

### Content Types

**Collection Types:**

| Content Type | Key Fields |
|---|---|
| Product | name, slug, tagline, description, image, secondaryImage, brochure, productCategory, features, areasOfApplication, standardCompliance, howToUse, highlight, faqs, relatedProducts |
| Blog | title, slug, featureImage, publishingDate, excerpt, content (dynamic zone), blogCategories, blogTags |
| Product Category | name, slug |
| Blog Category | name, slug |
| Blog Tag | name, slug |

**Single Types:**

| Content Type | Purpose |
|---|---|
| About Page | Section headings, content, and images for the about page |
| Contact Page | Office addresses, phone, email, and map embed URL |

### Components

**Blog components** (used in blog content dynamic zone):
rich-text, heading, image, table, video, embed, file

**Product components:**
feature (icon + text), highlight (CTA section), how-to-use-step, faq

### Strapi Cloud Sync

The CMS supports data transfer to/from Strapi Cloud:

```bash
cd cms
npm run transfer:push        # Push all data to cloud
npm run transfer:pull        # Pull all data from cloud
npm run transfer:push:content  # Push content only
npm run transfer:push:files    # Push files only
```

Requires `STRAPI_CLOUD_URL` and `STRAPI_TRANSFER_TOKEN` in `cms/.env`.

## Website Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero slider, featured products, categories, blog section, Instagram feed |
| `/about` | About page with video, multiple content sections |
| `/products` | Product listing with category filtering |
| `/products/category/[slug]` | Products filtered by category |
| `/products/[id]` | Product detail with features, specs, how-to-use, FAQs, related products |
| `/blogs` | Blog listing with category and tag filtering |
| `/blogs/[slug]` | Blog detail with dynamic content zones and share buttons |
| `/contact-us` | Contact form (Zoho CRM + reCAPTCHA v3) |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms and conditions |
| `/disclaimer` | Disclaimer |
| `/cookie-policy` | Cookie policy |

### API Routes

| Endpoint | Method | Description |
|---|---|---|
| `/api/contact` | POST | Contact form submission — validates fields, checks honeypot + reCAPTCHA score, submits to Zoho CRM |
| `/api/revalidate` | POST | ISR cache revalidation — called by Strapi webhooks to invalidate cached pages when content changes |

### URL Redirects

| From | To |
|---|---|
| `/about-us`, `/about-page` | `/about` |
| `/contact` | `/contact-us` |
| `/product-category/:slug` | `/products/category/:slug` |

### SEO

- Dynamic `sitemap.xml` generated from products, blogs, and categories
- Custom `robots.txt` with AI bot blocking (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, etc.)
- Per-page metadata with Open Graph and Twitter cards
- Schema.org JSON-LD markup (Organization, WebSite, ContactPage, AboutPage, CollectionPage)
- Canonical URLs on all pages

## Tech Stack

- **Frontend**: Next.js 16, React 19 (with React Compiler), SCSS Modules, Swiper 12
- **CMS**: Strapi 5 (SQLite for dev, PostgreSQL/MySQL for production)
- **CRM**: Zoho CRM (contact form leads)
- **Spam Protection**: Google reCAPTCHA v3 + honeypot field
- **Analytics**: Google Tag Manager
- **Fonts**: Archivo (Google Fonts + local ArchivoExpanded-Black)
- **Styling**: SCSS Modules with fluid typography system (`clamp()`-based responsive scaling)

## Environment Files

The website uses three env files for different environments:

| File | Environment | Usage |
|---|---|---|
| `.env.local` | Local | Auto-loaded by Next.js for local development |
| `.env.dev` | Vercel | Reference for Vercel dashboard env vars |
| `.env.live` | Production | Live site (geco.build) |

**Scripts:**

```bash
npm run dev          # Local dev → .env.local
npm run dev:dev      # Local dev with Vercel env → .env.dev
npm run dev:live     # Local dev with live env → .env.live
npm run build        # Build with local env → .env.local
npm run build:live   # Build with live env → .env.live
```

> **Note:** `.env.dev` is a local reference only. On Vercel, env vars are set in the dashboard and injected at build time — `dotenv-cli` is not involved.

## Production Build

```bash
# Build the website locally with live env
cd website
npm run build:live
npm start

# Build Strapi
cd cms
npm run build
npm start
```

## Deployment

### Vercel (Website)

The Next.js website is deployed on Vercel.

**Build Settings (Vercel Dashboard):**

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Root Directory | `website` |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

**Environment Variables (Vercel Dashboard → Settings → Environment Variables):**

```
NEXT_PUBLIC_STRAPI_URL=<strapi-cloud-url>
STRAPI_API_TOKEN=<strapi-api-token>
NEXT_PUBLIC_SITE_URL=<deployed-site-url>
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<recaptcha-v3-site-key>
RECAPTCHA_SECRET_KEY=<recaptcha-v3-secret-key>
NEXT_PUBLIC_GTM_ID=<gtm-container-id>
REVALIDATE_SECRET=<shared-secret-for-isr>
```

Copy values from `.env.dev` for preview deployments or `.env.live` for production.

### Database

For production, switch Strapi from SQLite to PostgreSQL:

```bash
cd cms
npm install pg
```

Set `DATABASE_CLIENT=postgres` along with `DATABASE_URL` or individual `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD` variables.

### File Uploads

For file uploads in production, use a cloud provider like Cloudinary:

```bash
cd cms
npm install @strapi/provider-upload-cloudinary
```

### ISR Revalidation

Set up a Strapi webhook pointing to `<website-url>/api/revalidate` with the `x-revalidate-secret` header matching your `REVALIDATE_SECRET` env var. This automatically invalidates cached pages when content is updated in the CMS.
