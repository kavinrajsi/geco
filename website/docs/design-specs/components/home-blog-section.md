# Blogs (News & Insights) — Design Specs

## Overview

A blog teaser section displaying the most recent blog posts from Strapi CMS in a Swiper carousel. Each card shows a feature image, category tag, title, and excerpt. Navigation arrows appear below the slider on mobile and are hidden on desktop where slides beyond the 3rd are hidden.

**Component:** `HomeBlogSection.js` (server) + `BlogSlider.js` (client)
**Location:** `src/components/HomeBlogSection/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Padding Y | 80px | 80px |

### Typography — Title

| Property | All Breakpoints |
|----------|-----------------|
| Font size | fluid(28, 32) |
| Font weight | 900 (Black) |
| Line height | fluid(32, 40) |
| Text align | center |

### Layout — Slider

| Property | All Breakpoints |
|----------|-----------------|
| Gap | 40px |

### Card

| Property | All Breakpoints |
|----------|-----------------|
| Gap | 16px |

### Card — Image

| Property | All Breakpoints |
|----------|-----------------|
| Border radius | 10px |

### Typography — Card Tag

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 14px |
| Font weight | 500 (Medium) |
| Line height | 20px |
| Padding | 4px 16px |

### Typography — Card Title

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Font size | 20px | 20px |
| Font weight | 600 (SemiBold) | 600 (SemiBold) |
| Line height | 28px | 28px |
| Line clamp | 1 line | 2 lines |

### Typography — Card Excerpt

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 18px |
| Font weight | 400 (Regular) |
| Line height | 26px |
| Line clamp | 2 lines |

### Navigation — Arrow Buttons

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Display | flex | none (hidden) |
| Gap | 24px | — |
| Padding X | 20px | — |
| Size | 44 x 44 px | — |

### Slide Visibility

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Slides 4+ | visible | display: none |

---

## Interactive States

### Card Hover

| Element | Property | Default | Hover | Transition |
|---------|----------|---------|-------|------------|
| Image | Transform | scale(1) | scale(1.03) | 0.3s |

### Navigation Button

| Property | Default | Hover | Disabled |
|----------|---------|-------|----------|
| Border color | `#E9E9E9` | `#A0A0A0` | — |
| Opacity | 1 | 1 | 0.35 |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#1F1F1F` | Title, card title, tag text |
| Gray | `#6B727A` | Excerpt text |
| Light Gray | `#E9E9E9` | Image placeholder, nav border |
| Medium Gray | `#A0A0A0` | Nav border (hover) |
| Lime 40% | `rgba(151, 215, 0, 0.4)` | Category tag background |
| White | `#FFFFFF` | Section bg, nav bg |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 576px | Swiper shows 2.25 slides |
| 768px | Swiper shows 3.25 slides |
| 992px | Swiper shows 3 slides, slides 4+ hidden, nav arrows hidden, card title 2-line clamp |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `swiper` | Carousel (Swiper + Mousewheel) |
| `next/link` | Client-side navigation |
| `FallbackImage` | Image with error fallback |
| `@/lib/strapi` | `fetchStrapi`, `getStrapiMedia`, `extractTextFromContent` |
| `_fluid.scss` | Breakpoints, `$space-gutter` |
