# Product Detail Page — Design Specs

## Overview

Full product page with sticky image gallery, collapsible spec sections, how-to-use steps, highlight CTA, FAQs, and related products. Content from Strapi CMS.

**Route:** `/products/[id]`
**File:** `src/app/products/[id]/page.js`
**ISR:** Tag `strapi-products`

---

## Page Sections

| # | Section | Component/Element |
|---|---------|-------------------|
| 1 | Breadcrumb | Page-level |
| 2 | Product Detail | Page-level (image + info) |
| 3 | How to Use | `HowToUseSteps` |
| 4 | Watch Our Stories | `WatchOurStories` |
| 5 | Highlight CTA | Page-level |
| 6 | FAQs | `FaqAccordion` (page-styled) |
| 7 | Related Products | `RelatedProducts` |

---

## Responsive Behavior

### Breadcrumb

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Direction: Column | Direction: Row |
| Gap: `12px` | Gap: `8px` |
| Font-size: `14px` | Font-size: `14px` |
| Line-height: `20px` | Line-height: `20px` |

### Product Detail Layout

| Mobile (<992px) | Desktop (≥992px) |
|-----------------|-------------------|
| Direction: Column | Direction: Row |
| Gap: `40px` | Gap: `60px` |

### Product Image

| Mobile (<992px) | Desktop (≥992px) |
|-----------------|-------------------|
| Width: `100%` | Width: `520px` |
| Height: Auto | Height: `693px` |
| Border radius: `20px` | Border radius: `20px` |
| Position: Static | Position: Sticky (`top: 140px`) |
| Object-fit: Cover | Object-fit: Cover |
| Hover: Dual image opacity swap (0.4s ease) | Hover: Same |

### Product Info Typography

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Title font-size: `24px` | Title font-size: `32px` |
| Title line-height: `32px` | Title line-height: `40px` |
| Title font-weight: `900` | Title font-weight: `900` |
| Title font-family: Archivo Expanded | Title font-family: Archivo Expanded |
| Description font-size: `fluid(16, 18)` | Description font-size: `fluid(16, 18)` |
| Description line-height: `fluid(24, 26)` | Description line-height: `fluid(24, 26)` |

### Collapsible Sections

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Border top: `1px solid #E9E9E9` | Border top: `1px solid #E9E9E9` |
| Padding: `24px 0` | Padding: `24px 0` |
| Title font-size: `20px` | Title font-size: `24px` |
| Title line-height: `28px` | Title line-height: `32px` |
| Feature bullet color: `#97D700` | Feature bullet color: `#97D700` |

### Highlight CTA Card

| Mobile (<992px) | Desktop (≥992px) |
|-----------------|-------------------|
| Direction: Column | Direction: Row |
| Image width: `100%` | Image width: `630px` |
| Image height: `400px` | Image height: Auto |
| Content padding: `40px 20px` | Content padding: `60px` |
| Content background: `#97D700` | Content background: `#97D700` |
| Title font-size: `24px` | Title font-size: `32px` |
| Title line-height: `32px` | Title line-height: `40px` |

### FAQ Section

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Section padding: `80px $space-gutter` | Section padding: `120px` |
| Item padding: `20px` | Item padding: `20px 24px` |
| Item gap: `16px` | Item gap: `20px` |
| Grid gap: `12px` | Grid gap: `20px` |
| Question font-size: `18px` | Question font-size: `20px` |
| Question line-height: `26px` | Question line-height: `28px` |
| Answer font-size: `fluid(16, 18)` | Answer font-size: `fluid(16, 18)` |
| Item border: `1px solid #E9E9E9` | Item border: `1px solid #E9E9E9` |
| Item border-radius: `10px` | Item border-radius: `10px` |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#1F1F1F` | Text |
| Lime | `#97D700` | Feature bullets, highlight CTA background, buttons |
| Light Gray | `#E9E9E9` | Section borders, FAQ borders |
| Dark Blue | `#10069F` | Hover states |

---

## SEO

| Property | Value |
|----------|-------|
| Title | `[Product Name] | Geco` |
| Description | Product description from CMS |
| JSON-LD | `Product` |
| Canonical | `/products/[id]` |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `HowToUseSteps` | See `components/how-to-use-steps.md` |
| `WatchOurStories` | See `components/watch-our-stories.md` |
| `RelatedProducts` | See `components/related-products.md` |
| `CollapsibleSection` | Expandable content sections |
| `FallbackImage` | Image with error fallback |
