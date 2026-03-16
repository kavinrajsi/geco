# Related Products — Design Specs

## Overview

A horizontally scrollable product carousel displayed on product detail pages. Shows related product cards with snap scrolling on mobile and side navigation arrows on desktop. Each card includes a product image, category, and name.

**Component:** `RelatedProducts.js`
**Location:** `src/components/RelatedProducts/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<768px) | Tablet (>=768px) | Desktop (>=1024px) |
|----------|-----------------|-------------------|----------------------|
| Padding | 80px 0 | 80px 0 | 80px 0 |
| Container align | — | — | align-items: center |

### Layout — Wrapper

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Max width | — | `$bp-xl` (1290px) |
| Padding X | 0 | 60px |

### Typography — Title

| Property | Mobile (<768px) | Tablet (>=768px) |
|----------|-----------------|-------------------|
| Font size | 28px | 32px |
| Font weight | 900 (Black) | 900 (Black) |
| Line height | 32px | 40px |

### Layout — Track (Scroll Container)

| Property | All Breakpoints |
|----------|-----------------|
| Gap | 30px |
| Overflow X | auto |
| Scroll snap type | x mandatory |

### Card

| Property | All Breakpoints |
|----------|-----------------|
| Width | 300px |
| Gap | 16px |
| Flex shrink | 0 |

### Card — Image

| Property | All Breakpoints |
|----------|-----------------|
| Border radius | 10px |

### Typography — Card Category

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 14px |
| Font weight | 400 (Regular) |
| Line height | 16px |

### Typography — Card Name

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 18px |
| Font weight | 500 (Medium) |
| Line height | 26px |

### Navigation — Arrow Buttons

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Size | 44 x 44 px | 44 x 44 px |
| Mobile arrows | display: flex; gap: 24px | display: none |
| Side arrows | display: none | display: flex; position: absolute; top: 50% |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 768px | Title scales to 32px / 40px |
| 1024px | Wrapper gets max-width + padding; side arrows appear; mobile arrows hidden; container centers |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `_fluid.scss` | `$bp-md`, `$bp-lg`, `$bp-xl` |
