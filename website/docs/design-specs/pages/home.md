# Home Page — Design Specs

## Overview

Landing page showcasing Geco's product range through 8 sections. All content is either hardcoded or fetched from Strapi CMS with ISR caching.

**Route:** `/`
**File:** `src/app/page.js`
**ISR:** Tag-based revalidation via `/api/revalidate`

---

## Page Sections

| # | Section | Component | Data Source |
|---|---------|-----------|-------------|
| 1 | Hero Slider | `HeroSlider` | Hardcoded images |
| 2 | Explore Categories | `ExploreCategories` | Strapi `product-categories` |
| 3 | Engineered for Precision | `EngineeredPrecision` | Hardcoded |
| 4 | Built on Four Principles | `BuildPrinciples` | Hardcoded |
| 5 | Featured Products | `HomeFeaturedProducts` | Strapi `products` (featured) |
| 6 | Watch Our Stories | `WatchOurStories` | Hardcoded YouTube embed |
| 7 | Geco On Instagram | `InstagramFeed` | Hardcoded images |
| 8 | Blogs | `HomeBlogSection` | Strapi `blogs` (latest 6) |

---

## Responsive Behavior

### Page Layout

| Property | Mobile (<768px) | Desktop (≥768px) |
|----------|----------------|-------------------|
| Sections | Stacked vertically | Stacked vertically |
| Section spacing | Component-defined | Component-defined |

Each section's responsive behavior is documented in its own component spec file under `docs/design-specs/components/`.

---

## SEO

| Property | Value |
|----------|-------|
| Title | `Geco` |
| Description | Geco — high-performance tile adhesives, grouts, sealants, and tapes by VNC Group |
| JSON-LD | `Organization`, `WebSite` |
| Canonical | `/` |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `HeroSlider` | Hero carousel — see `components/hero-slider.md` |
| `ExploreCategories` | Category grid — see `components/explore-categories.md` |
| `EngineeredPrecision` | CTA section — see `components/engineered-precision.md` |
| `BuildPrinciples` | Values grid — see `components/build-principles.md` |
| `HomeFeaturedProducts` | Product carousel — see `components/featured-products.md` |
| `WatchOurStories` | Video section — see `components/watch-our-stories.md` |
| `InstagramFeed` | Instagram grid — see `components/instagram-feed.md` |
| `HomeBlogSection` | Blog carousel — see `components/home-blog-section.md` |
