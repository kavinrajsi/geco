# Geco On Instagram — Design Specs

## Overview

An Instagram showcase section with 5 hardcoded post images. Displays as a Swiper carousel on mobile/tablet and switches to a full-width 5-column edge-to-edge grid on large screens. All posts link externally to Instagram.

**Component:** `InstagramFeed.js` (server) + `InstagramSlider.js` (client)
**Location:** `src/components/InstagramFeed/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<992px) | Desktop (>=992px) | Large (>=1200px) |
|----------|-----------------|---------------------|---------------------|
| Padding Y | 80px | 80px | 120px |
| Gap | 28px | 28px | 28px |

### Layout — Header

| Property | Mobile (<1200px) | Large (>=1200px) |
|----------|-------------------|---------------------|
| Width | 100% | auto |
| Padding X | `$space-gutter` (20px) | 0 |
| Text align | center | center |
| Gap | 8px | 8px |

### Typography — Title

| Property | Mobile (<1200px) | Large (>=1200px) |
|----------|-------------------|---------------------|
| Font size | 28px | 32px |
| Font weight | 900 (Black) | 900 (Black) |
| Line height | 32px | 40px |

### Typography — Subtitle

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 18px |
| Font weight | 400 (Regular) |
| Line height | 26px |

### Layout — Swiper

| Property | Mobile (<992px) | Desktop (>=992px) |
|----------|-----------------|---------------------|
| Padding X | `$space-gutter` (20px) | 0 |

### Post Card

| Property | All Breakpoints |
|----------|-----------------|
| Aspect ratio | 353 / 441 |

### Layout — Slider vs Grid

| Property | Mobile (<1200px) | Large (>=1200px) |
|----------|-------------------|---------------------|
| Slider | display: block | display: none |
| Grid | display: none | display: grid |
| Grid columns | — | repeat(5, 1fr) |
| Grid gap | — | 0 |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Light BG | `#F7F7F7` | Section background |
| Dark | `#1F1F1F` | Title, subtitle text |
| Light Gray | `#E9E9E9` | Post placeholder bg |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 576px | Swiper shows 2.25 slides |
| 768px | Swiper shows 3.25 slides |
| 992px | Swiper shows 4 slides, swiper padding removed |
| 1200px | Slider hidden, 5-column edge-to-edge grid shown, desktop typography, section padding increases |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `swiper` | Carousel (Swiper + Mousewheel) |
| `next/image` | Optimized image rendering |
| `_fluid.scss` | `$bp-lg`, `$space-gutter` |
