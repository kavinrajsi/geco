# Featured Products — Design Specs

## Overview

A carousel section showcasing featured products fetched from Strapi CMS. Each product card displays a primary image that swaps to a secondary image on hover. Uses Swiper for mobile/tablet sliding and shows all cards on desktop with side navigation arrows.

**Component:** `HomeFeaturedProducts.js` (server) + `FeaturedProductsSlider.js` (client)
**Location:** `src/components/HomeFeaturedProducts/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Padding Y | 80px | 120px |

### Layout — Header

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Width | 100% | 630px |
| Text align | center | center |
| Gap | 8px | 8px |

### Typography — Title

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Font size | 28px | 32px |
| Font weight | 900 (Black) | 900 (Black) |
| Line height | 32px | 40px |

### Typography — Subtitle

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Font size | 16px | 18px |
| Font weight | 500 (Medium) | 500 (Medium) |
| Line height | 24px | 26px |

### Layout — Swiper

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Padding X | `$space-gutter` (20px) | 0 |

### Layout — Slider Wrapper

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Max width | — | `$bp-xl` (1290px) |
| Padding X | — | 60px (for arrows) |

### Card

| Property | All Breakpoints |
|----------|-----------------|
| Gap | 16px |

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

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Size | 44 x 44 px | 44 x 44 px |
| Mobile nav | display: flex; gap: 24px | display: none |
| Side nav | display: none | display: flex; position: absolute; top: 50%; z-index: 1 |

---

## Interactive States

### Card Hover

| Element | Property | Default | Hover | Transition |
|---------|----------|---------|-------|------------|
| Primary image | Opacity | 1 | 0 | 0.4s ease |
| Secondary image | Opacity | 0 | 1 | 0.4s ease |
| Both images | Transform | scale(1) | scale(1.03) | 0.3s ease |

### Navigation Button

| Property | Default | Hover | Disabled |
|----------|---------|-------|----------|
| Border color | `#E9E9E9` | `#A0A0A0` | — |
| Opacity | 1 | 1 | 0.35 |
| Pointer events | auto | auto | none |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#1F1F1F` | Title, product name, arrows |
| Gray | `#6B727A` | Subtitle, category text |
| Light Gray | `#E9E9E9` | Nav button border |
| Medium Gray | `#A0A0A0` | Nav button border (hover) |
| White | `#FFFFFF` | Section bg, nav button bg |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 576px | Swiper shows 2.25 slides |
| 768px | Swiper shows 3.25 slides |
| 992px | Swiper shows all 4 slides, desktop arrows appear, mobile nav hidden, desktop typography |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `swiper` | Carousel (Swiper + Mousewheel module) |
| `next/link` | Client-side navigation |
| `FallbackImage` | Image with error fallback |
| `@/lib/strapi` | `fetchStrapi`, `getStrapiMedia` |
| `_fluid.scss` | Breakpoints, `$space-gutter`, `$bp-xl` |
