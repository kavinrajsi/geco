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

**CMS** — create `cms/.env`:

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
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<recaptcha-v3-site-key>
RECAPTCHA_SECRET_KEY=<recaptcha-v3-secret-key>
ZEPTO_MAIL_API_KEY=<zeptomail-api-key>
ZEPTO_FROM_EMAIL=noreply@yourdomain.com
ZEPTO_FROM_NAME=Geco
ZEPTO_TO_EMAIL=contact@yourdomain.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
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

- **CMS Admin Panel**: http://localhost:1337/admin
- **Website**: http://localhost:3000

## CMS Setup

On first run, Strapi will prompt you to create an admin account. After that:

1. Go to **Settings > API Tokens** and create a Full Access token
2. Add the token to `website/.env.local` as `STRAPI_API_TOKEN`
3. Go to **Settings > Roles > Public** and enable `find` / `findOne` permissions for the content types you want publicly accessible

## Website Pages

| Route | Description |
|---|---|
| `/` | Homepage with featured products and latest blogs |
| `/about` | About page |
| `/products` | Product listing |
| `/products/[id]` | Product detail |
| `/blogs` | Blog listing |
| `/blogs/[slug]` | Blog detail |
| `/contact` | Contact form (ZeptoMail + reCAPTCHA v3) |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms and conditions |
| `/disclaimer` | Disclaimer |
| `/cookie-policy` | Cookie policy |

## Tech Stack

- **Frontend**: Next.js 16, React 19, SCSS Modules, Swiper
- **CMS**: Strapi 5 (SQLite for dev, PostgreSQL for production)
- **Email**: ZeptoMail
- **Spam Protection**: Google reCAPTCHA v3

## Production Build

```bash
# Build the website
cd website
npm run build
npm start

# Build Strapi
cd cms
npm run build
npm start
```

## Deployment

For production, switch Strapi from SQLite to PostgreSQL:

```bash
cd cms
npm install pg
```

Set the `DATABASE_CLIENT=postgres` environment variable along with `DATABASE_URL` or individual `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD` variables.

For file uploads in production, use a cloud provider like Cloudinary:

```bash
cd cms
npm install @strapi/provider-upload-cloudinary
```
