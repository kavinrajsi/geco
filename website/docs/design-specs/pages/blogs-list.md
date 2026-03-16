# Blogs List Page — Design Specs

## Overview

Blog listing page with a sidebar for search, categories, and tags. Blog cards stack vertically on mobile and switch to horizontal layout on desktop. Includes "Load More" pagination.

**Route:** `/blogs`
**File:** `src/app/blogs/page.js`
**ISR:** Tag `strapi-blogs`, `strapi-blog-categories`, `strapi-blog-tags`

---

## Page Sections

| # | Section | Component |
|---|---------|-----------|
| 1 | Page Header | `PageHeader` |
| 2 | Blog List + Sidebar | `BlogList` |

---

## Responsive Behavior

### Page Layout

| Mobile (<1024px) | Desktop (≥1024px) |
|-----------------|---------------------|
| Direction: Column | Direction: Row |
| Gap: `30px` | Gap: `30px` |
| Max width: `100%` | Max width: `$bp-xl` (1290px) |

### Sidebar

| Mobile (<1024px) | Desktop (≥1024px) |
|-----------------|---------------------|
| Order: `-1` (above content) | Order: `1` (right side) |
| Width: `100%` | Width: `300px` |
| Gap: `24px` | Gap: `40px` |

### Search Input

| Property | Value |
|----------|-------|
| Padding | `12px 20px` |
| Border radius | `50px` |
| Font-size | `18px` |
| Line-height | `26px` |

### Sidebar Sections

| Property | Value |
|----------|-------|
| Title font-size | `20px` |
| Title font-weight | `600` |
| Title line-height | `28px` |
| Tag font-size | `12px` |
| Tag line-height | `16px` |
| Tag padding | `8px 16px` |

### Blog Card

| Mobile (<1024px) | Desktop (≥1024px) |
|-----------------|---------------------|
| Direction: Column | Direction: Row |
| Gap: `30px` | Gap: `30px` |
| Alignment: Default | Alignment: Center |

### Blog Card Image

| Mobile (<1024px) | Desktop (≥1024px) |
|-----------------|---------------------|
| Width: `100%` | Width: `520px` |
| Height: Auto (aspect-ratio 520/320) | Height: `320px` |
| Border radius: `10px` | Border radius: `10px` |

### Blog Card Typography

| Mobile (<1024px) | Desktop (≥1024px) |
|-----------------|---------------------|
| Title font-size: `20px` | Title font-size: `28px` |
| Title line-height: `28px` | Title line-height: `36px` |
| Excerpt font-size: `fluid(16, 18)` | Excerpt font-size: `fluid(16, 18)` |
| Excerpt line-height: `fluid(24, 26)` | Excerpt line-height: `fluid(24, 26)` |

### Load More Button

| Property | Value |
|----------|-------|
| Font-size | `14px` |
| Padding | `16px 40px` |
| Blogs per page | 4 |

---

## SEO

| Property | Value |
|----------|-------|
| Title | `Blogs | Geco` |
| JSON-LD | `CollectionPage` |
| Canonical | `/blogs` |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `PageHeader` | See `components/page-header.md` |
| `BlogList` | See `components/blog-list.md` |
