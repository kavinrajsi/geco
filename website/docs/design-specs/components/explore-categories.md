# Explore Categories — Design Specs

## Overview

A section on the home page showcasing 4 product categories in a responsive grid. Each category is a clickable card with an image and a pill-shaped label overlay. Grid progresses from 1-column on mobile to 4-column on large screens.

**Component:** `ExploreCategories.js`
**Location:** `src/components/ExploreCategories/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<576px) | Small (>=576px) | Desktop (>=1024px) | Large (>=1200px) |
|----------|-----------------|-----------------|----------------------|---------------------|
| Padding Y | 80px | 80px | 120px | 120px |
| Gap | 40px | 40px | 40px | 40px |

### Layout — Header

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Width | 100% | 630px |
| Padding X | `$space-gutter` (20px) | 0 |
| Text align | center | center |
| Gap | 8px | 8px |

### Typography — Title

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Font size | 28px | 32px |
| Font weight | 900 (Black) | 900 (Black) |
| Line height | 32px | 40px |

### Typography — Subtitle

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Font size | 16px | 18px |
| Font weight | 500 (Medium) | 500 (Medium) |
| Line height | 24px | 26px |

### Layout — Grid

| Property | Mobile (<576px) | Small (>=576px) | Desktop (>=1024px) | Large (>=1200px) |
|----------|-----------------|-----------------|----------------------|---------------------|
| Columns | 1fr | repeat(2, 1fr) | repeat(2, 1fr) | repeat(4, 1fr) |
| Gap | 20px | 20px | 20px | 20px |
| Padding X | 20px | 20px | 20px | 20px |

### Card

| Property | Mobile (<1200px) | Large (>=1200px) |
|----------|-------------------|---------------------|
| Border radius | 20px | 20px |
| Aspect ratio | 1 / 1 (square) | auto (initial) |
| Height | auto | auto |

### Typography — Card Label

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 20px |
| Font weight | 600 (SemiBold) |
| Line height | 28px |
| Padding | 12px 60px |

---

## Interactive States

### Card Hover

| Element | Property | Default | Hover | Transition |
|---------|----------|---------|-------|------------|
| Image | Transform | scale(1) | scale(1.03) | 0.3s ease |
| Label | Background | `#FFFFFF` | `#97D700` (lime) | 0.3s ease |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#1F1F1F` | Title, card label text |
| Gray | `#6B727A` | Subtitle text |
| Light Gray | `#E9E9E9` | Card background / fallback |
| White | `#FFFFFF` | Label background (default) |
| Lime Green | `#97D700` | Label background (hover) |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 576px | Grid switches to 2 columns |
| 1024px | Desktop typography + header capped at 630px, larger padding |
| 1200px | Grid switches to 4 columns; card aspect-ratio removed |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `next/link` | Client-side navigation |
| `FallbackImage` | Image with error fallback to SVG logo |
| `_fluid.scss` | Breakpoint vars, `$space-gutter` |
