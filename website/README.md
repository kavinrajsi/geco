# Geco Website

Next.js 16 frontend for the Geco website, powered by a headless Strapi CMS backend.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3 with React Compiler enabled
- **Styling**: SCSS Modules with fluid typography system
- **Carousel**: Swiper 12
- **Spam Protection**: Google reCAPTCHA v3 + honeypot field
- **Email**: ZeptoMail
- **Analytics**: Google Tag Manager
- **Fonts**: Archivo (Google Fonts, weights: 400/500/600/900) + local ArchivoExpanded-Black

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 6
- A running Strapi CMS instance (see `../cms`)

### Install

```bash
npm install
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=<your-strapi-api-token>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<recaptcha-v3-site-key>
RECAPTCHA_SECRET_KEY=<recaptcha-v3-secret-key>
ZEPTO_MAIL_API_KEY=<zeptomail-api-key>
ZEPTO_FROM_EMAIL=noreply@yourdomain.com
ZEPTO_FROM_NAME=Geco
ZEPTO_TO_EMAIL=contact@yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
REVALIDATE_SECRET=<shared-secret-for-isr-revalidation>
```

### Scripts

```bash
npm run dev        # Start dev server
npm run dev:live   # Dev server using .env.live (production CMS)
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js           # Root layout (fonts, GTM, header/footer)
│   ├── page.js             # Homepage
│   ├── about/
│   ├── products/
│   │   ├── page.js         # Product listing
│   │   ├── [id]/           # Product detail
│   │   └── category/[slug] # Products by category
│   ├── blogs/
│   │   ├── page.js         # Blog listing
│   │   └── [slug]/         # Blog detail
│   ├── contact-us/
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   ├── disclaimer/
│   ├── cookie-policy/
│   ├── api/
│   │   ├── contact/        # Contact form handler
│   │   └── revalidate/     # ISR cache invalidation
│   ├── sitemap.js          # Dynamic sitemap
│   ├── robots.js           # Robots with AI bot blocking
│   ├── error.js            # Global error boundary
│   └── not-found.js        # Custom 404
├── components/             # React components (25)
│   ├── Header/             # Nav with category dropdown, mobile menu
│   ├── Footer/
│   ├── HeroSlider/         # Swiper carousel with autoplay
│   ├── HomeFeaturedProducts/
│   ├── ExploreCategories/
│   ├── EngineeredPrecision/ # Responsive background section
│   ├── BuildPrinciples/
│   ├── ProductGrid/        # Product listing with category filter
│   ├── LatestProducts/
│   ├── RelatedProducts/
│   ├── BlogList/           # Blog listing with category/tag filter
│   ├── HomeBlogSection/
│   ├── ContactForm/        # Form with reCAPTCHA + honeypot
│   ├── PageHeader/
│   ├── HowToUseSteps/
│   ├── CollapsibleSection/ # Accordion
│   ├── FaqAccordion/
│   ├── SectionTitle/
│   ├── FeatureIcons/
│   ├── ShareButtons/       # Social sharing for blogs
│   ├── WatchOurStories/    # Video section
│   ├── InstagramFeed/
│   ├── FallbackImage/
│   ├── RecaptchaProvider/
│   └── ScrollToTop/        # Scroll reset on route change
├── lib/
│   ├── strapi.js           # Strapi fetch helper with retry logic & cache tags
│   ├── config.js           # Site URL config
│   └── products.js         # Product data utilities
├── data/                   # Static data
└── styles/
    ├── globals.scss         # Global styles
    ├── _reset.scss          # CSS reset
    └── _fluid.scss          # Fluid typography & spacing system
```

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero slider, featured products, categories, blog section, Instagram feed |
| `/about` | About page with video and multiple content sections |
| `/products` | Product listing with category filtering |
| `/products/category/[slug]` | Products filtered by category |
| `/products/[id]` | Product detail — features, specs, how-to-use, FAQs, related products |
| `/blogs` | Blog listing with category and tag filtering |
| `/blogs/[slug]` | Blog detail with dynamic content zones and share buttons |
| `/contact-us` | Contact form (ZeptoMail + reCAPTCHA v3) |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms and conditions |
| `/disclaimer` | Disclaimer |
| `/cookie-policy` | Cookie policy |

### URL Redirects

| From | To |
|---|---|
| `/about-us`, `/about-page` | `/about` |
| `/contact` | `/contact-us` |
| `/product-category/:slug` | `/products/category/:slug` |

## API Routes

### `POST /api/contact`

Handles contact form submissions:
1. Honeypot check for bot prevention
2. Validates required fields (name, email, message)
3. Verifies reCAPTCHA v3 token (score > 0.5)
4. Sends formatted HTML email via ZeptoMail

### `POST /api/revalidate`

ISR cache invalidation endpoint called by Strapi webhooks:
- Requires `x-revalidate-secret` header matching `REVALIDATE_SECRET`
- Maps Strapi model names to cache tags:
  - `product` → `strapi-products`
  - `product-category` → `strapi-product-categories`
  - `blog` → `strapi-blogs`
  - `blog-category` → `strapi-blog-categories`
  - `blog-tag` → `strapi-blog-tags`
- Falls back to revalidating all tags if no model is specified

## Data Fetching

All CMS data is fetched via `fetchStrapi()` in `src/lib/strapi.js`:
- Automatic retry logic (4 retries with 5s delay) for 503 errors and connection failures
- Cache tags derived from API paths for selective ISR revalidation
- Request deduplication via Next.js fetch

## Styling

SCSS Modules with a fluid typography system defined in `src/styles/_fluid.scss`:

- **Breakpoints**: 576px (sm), 768px (md), 1024px (lg), 1290px (xl)
- **`fluid()` function**: `clamp()`-based linear scaling between 375px–1200px viewport
- **`interpolate()` mixin**: Non-linear scaling with easing curves (ease-in, ease-out, ease-in-out) for hero headings

**Preset type scale:**

| Token | Range |
|---|---|
| `$font-display` | 36px → 56px |
| `$font-h1` | 28px → 40px |
| `$font-h2` | 22px → 32px |
| `$font-h3` | 18px → 24px |
| `$font-body` | 15px → 18px |
| `$font-body-sm` | 13px → 16px |
| `$font-label` | 13px → 14px |

## SEO

- Dynamic `sitemap.xml` generated from products, blogs, and categories
- Custom `robots.txt` blocking AI bots (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot)
- Per-page metadata with Open Graph and Twitter cards
- Schema.org JSON-LD (Organization, WebSite, ContactPage, AboutPage, CollectionPage)
- Canonical URLs on all pages

## Path Alias

`@/*` maps to `./src/*` (configured in `jsconfig.json`).

## Production Build

```bash
npm run build
npm start
```

Images are optimized at quality 100 with remote patterns configured for Strapi media (`*.media.strapiapp.com` and `localhost:1337`).
