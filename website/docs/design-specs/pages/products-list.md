# Products List Page — Design Specs

## Overview

Product listing page with category filter pills and a responsive product grid. Products are fetched from Strapi CMS.

**Route:** `/products`
**File:** `src/app/products/page.js`
**ISR:** Tag `strapi-products`, `strapi-product-categories`

---

## Page Sections

| # | Section | Component |
|---|---------|-----------|
| 1 | Page Header | `PageHeader` |
| 2 | Product Grid | `ProductGrid` |

---

## Responsive Behavior

### Page Header

| Property | Mobile (<768px) | Desktop (≥768px) |
|----------|----------------|-------------------|
| Padding | `40px $space-gutter` | `80px $space-gutter 120px` |
| Background | `#10069F` | `#10069F` |
| Title font-size | `28px` | `32px` |
| Title line-height | `32px` | `40px` |
| Margin bottom | `0` | `40px` |

### Product Grid

| Property | Mobile (<576px) | Small (≥576px) | Desktop (≥992px) | Large (≥1200px) |
|----------|----------------|----------------|-------------------|-----------------|
| Columns | 1 | 2 | 3 | 4 |
| Grid gap | `30px` | `56px 30px` | `56px 30px` | `56px 30px` |
| Max width | `100%` | `100%` | `100%` | `$bp-xl` (1290px) |
| Padding bottom | `180px` | `180px` | `180px` | `80px` |

### Product Card

| Property | Value |
|----------|-------|
| Image border-radius | `10px` |
| Category font-size | `14px` |
| Category line-height | `16px` |
| Name font-size | `18px` |
| Name line-height | `26px` |
| Hover effect | Dual image opacity swap (0.4s ease) |

### Filter Bar

| Property | Value |
|----------|-------|
| Font-size | `14px` |
| Line-height | `20px` |
| Active background | `#97D700` |
| Active border | `2px solid #97D700` |
| Active padding | `8px 32px` |

---

## SEO

| Property | Value |
|----------|-------|
| Title | `Products | Geco` |
| JSON-LD | `CollectionPage` |
| Canonical | `/products` |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `PageHeader` | See `components/page-header.md` |
| `ProductGrid` | See `components/product-grid.md` |
