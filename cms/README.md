# Geco CMS

Strapi 5 headless CMS backend for the Geco website.

## Tech Stack

- **Framework**: Strapi 5.38.0
- **Database**: SQLite (dev), PostgreSQL or MySQL (production)
- **Plugins**: Cloud, Users & Permissions

## Getting Started

### Prerequisites

- Node.js >= 20 (<=24)
- npm >= 6

### Install

```bash
npm install
```

### Environment Variables

Create `.env` (see `.env.example`):

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

For Strapi Cloud sync, also add:

```env
STRAPI_CLOUD_URL=<your-strapi-cloud-url>
STRAPI_TRANSFER_TOKEN=<your-transfer-token>
```

### Scripts

```bash
npm run develop      # Start dev server with auto-reload
npm run dev          # Alias for develop
npm run build        # Build admin panel
npm start            # Start production server
npm run console      # Strapi interactive console
npm run deploy       # Deploy to Strapi Cloud
npm run upgrade      # Upgrade Strapi to latest
npm run upgrade:dry  # Dry-run upgrade check
```

#### Data Transfer (Strapi Cloud)

```bash
npm run transfer:push           # Push all data to cloud
npm run transfer:pull           # Pull all data from cloud
npm run transfer:push:content   # Push content only
npm run transfer:push:files     # Push files only
```

Requires `STRAPI_CLOUD_URL` and `STRAPI_TRANSFER_TOKEN` in `.env`. Transfer has a 10-minute timeout.

### First Run

1. Start the server with `npm run develop`
2. Create an admin account at http://localhost:1337/admin
3. Go to **Settings > API Tokens** and create a Full Access token for the website frontend
4. Go to **Settings > Roles > Public** and enable `find` / `findOne` for content types that should be publicly accessible

## Project Structure

```
cms/
├── config/
│   ├── admin.js          # Admin auth, session lifespans, feature flags
│   ├── api.js            # REST defaults (25 per page, max 100)
│   ├── database.js       # SQLite/PostgreSQL/MySQL config
│   ├── middlewares.js     # Strapi middleware stack
│   ├── plugins.js        # Plugin config (empty — using defaults)
│   └── server.js         # Host, port, app keys, webhook settings
├── database/
│   └── migrations/       # Database migrations
├── public/
│   └── uploads/          # Local media uploads
├── scripts/
│   └── transfer.js       # Strapi Cloud data sync script
├── src/
│   ├── api/              # Content type definitions (7 types)
│   │   ├── product/
│   │   ├── blog/
│   │   ├── product-category/
│   │   ├── blog-category/
│   │   ├── blog-tag/
│   │   ├── about-page/
│   │   └── contact-page/
│   ├── components/       # Reusable components (11 total)
│   │   ├── blog/         # 7 blog content components
│   │   └── product/      # 4 product components
│   ├── extensions/       # Strapi extensions (empty)
│   └── index.js          # Bootstrap: custom admin layouts
├── .env.example
└── package.json
```

## Content Types

### Collection Types

#### Product

Draft & publish enabled. The most complex content type.

| Field | Type | Notes |
|---|---|---|
| name | string | Required |
| slug | UID | Auto-generated from name |
| tagline | string | Required |
| description | text | Required |
| image | media (images) | Required, primary product image |
| secondaryImage | media (images) | Optional |
| brochure | media (files) | Optional, downloadable PDF |
| productCategory | relation | Many-to-one → Product Category |
| features | component (repeatable) | `product.feature` — icon + text |
| areasOfApplication | blocks | Rich text |
| standardCompliance | blocks | Rich text |
| howToUse | component (repeatable) | `product.how-to-use-step` — stepNumber, title, description, image |
| highlight | component (single) | `product.highlight` — promotional CTA section |
| faqs | component (repeatable) | `product.faq` — question + answer |
| relatedProducts | relation | One-to-many → Product |

#### Blog

Draft & publish enabled. Content uses a dynamic zone with 7 component types.

| Field | Type | Notes |
|---|---|---|
| title | string | Required |
| slug | UID | Auto-generated from title |
| featureImage | media (images) | Required |
| publishingDate | date | Required |
| excerpt | text | Max 300 characters |
| content | dynamic zone | Required — see [Blog Components](#blog-components) |
| blogCategories | relation | Many-to-many ↔ Blog Category |
| blogTags | relation | Many-to-many ↔ Blog Tag |

#### Product Category

| Field | Type | Notes |
|---|---|---|
| name | string | Required, unique |
| slug | UID | Auto-generated from name |
| products | relation | One-to-many ← Product |

#### Blog Category

| Field | Type | Notes |
|---|---|---|
| name | string | Required, unique |
| slug | UID | Auto-generated from name |
| blogs | relation | Many-to-many ↔ Blog |

#### Blog Tag

| Field | Type | Notes |
|---|---|---|
| name | string | Required, unique |
| slug | UID | Auto-generated from name |
| blogs | relation | Many-to-many ↔ Blog |

### Single Types

#### About Page

5 sections, each with heading + content. Sections 2, 4, and 5 include images (section 2 has desktop/mobile variants).

#### Contact Page

| Field | Type |
|---|---|
| pageTitle | string |
| address1Title, address1Text | string, text |
| address2Title, address2Text | string, text |
| phone, phoneHref | string |
| email | string |
| mapEmbedUrl | text |

## Components

### Blog Components

Used in the Blog `content` dynamic zone:

| Component | Fields | Description |
|---|---|---|
| `blog.rich-text` | body (blocks) | Text content block |
| `blog.heading` | text, level (h2/h3/h4) | Section heading |
| `blog.image` | file (media), caption, alt | Image with optional caption |
| `blog.table` | content (richtext) | Table as markdown/HTML |
| `blog.video` | url, title | Video embed by URL |
| `blog.embed` | url, title | External content embed (iframe, tweet) |
| `blog.file` | file (media), label | Downloadable file attachment |

### Product Components

| Component | Fields | Description |
|---|---|---|
| `product.feature` | icon (media), text | Feature with icon and label |
| `product.highlight` | title, description (blocks), image, buttonText, buttonLink, linkedBlog | Promotional CTA section |
| `product.how-to-use-step` | stepNumber, title, description, image | Step in usage guide |
| `product.faq` | question, answer | FAQ item |

## Admin Customizations

The bootstrap in `src/index.js` configures custom admin panel layouts:

- **Product edit view**: Fields arranged in a logical 2-column grid — name/slug, tagline/category, then full-width sections for description, images, and all component zones
- **Highlight component**: Title and description full-width, image full-width, button text/link side-by-side
- **Windows compatibility**: Patches `fs.unlink`/`fs.unlinkSync` to retry on EBUSY/EPERM errors

## API Configuration

```
Default page size: 25
Max page size:     100
Response includes total count: yes
```

All content types use standard Strapi core controllers, services, and routes (no custom overrides).

## Database

Configured in `config/database.js`. Set `DATABASE_CLIENT` to switch engines:

| Client | Default Port | Extra Config |
|---|---|---|
| `sqlite` (default) | — | File at `.tmp/data.db` |
| `postgres` | 5432 | Supports `DATABASE_URL` or individual host/port/db/user/password vars. Optional schema and SSL. |
| `mysql` | 3306 | Individual host/port/db/user/password vars. Optional SSL. |

Connection pool: min 2, max 10 (configurable via `DATABASE_POOL_MIN` / `DATABASE_POOL_MAX`).
Connection timeout: 60s (configurable via `DATABASE_CONNECTION_TIMEOUT`).

## Webhook Setup (ISR Revalidation)

To enable automatic cache invalidation on the Next.js frontend when content changes:

1. Go to **Settings > Webhooks** in the Strapi admin
2. Create a webhook pointing to `<website-url>/api/revalidate`
3. Add header: `x-revalidate-secret` with the shared secret
4. Select the content type events (create, update, delete, publish, unpublish) you want to trigger revalidation

## Production Deployment

### PostgreSQL

```bash
npm install pg
```

Set environment variables:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=your-host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your-password
DATABASE_SSL=true
```

Or use a connection string: `DATABASE_URL=postgres://user:pass@host:5432/dbname`

### Cloud File Uploads

Replace local uploads with a cloud provider:

```bash
npm install @strapi/provider-upload-cloudinary
```

Configure in `config/plugins.js`.
