# Product Category Page — Design Specs

## Overview

Products filtered by a specific category. Same layout as the products list page with the active category pre-selected in the filter bar. Routes are pre-rendered via `generateStaticParams()`.

**Route:** `/products/category/[slug]`
**File:** `src/app/products/category/[slug]/page.js`
**ISR:** Tag `strapi-products`, `strapi-product-categories`

---

## Page Sections

| # | Section | Component |
|---|---------|-----------|
| 1 | Page Header | `PageHeader` (title: category name) |
| 2 | Product Grid | `ProductGrid` (pre-filtered by category) |

---

## Responsive Behavior

Same as Products List Page — see `pages/products-list.md`.

The only difference is the page header title dynamically shows the category name and the filter bar highlights the matching category pill.

---

## SEO

| Property | Value |
|----------|-------|
| Title | `[Category Name] | Geco` |
| JSON-LD | `CollectionPage` |
| Canonical | `/products/category/[slug]` |
