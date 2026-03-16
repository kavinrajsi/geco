# Watch Our Stories — Design Specs

## Overview

A reusable video section with a centered header and a responsive video player. Supports both local HTML5 video (autoplay/loop/muted) and external iframe embeds. Used on the home page and product detail pages.

**Component:** `WatchOurStories.js`
**Location:** `src/components/WatchOurStories/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Background | `#F7F7F7` | `#F7F7F7` |
| Padding top | 80px | 120px |
| Padding bottom | 0 | 0 |
| Padding X | `$space-gutter` (20px) | 315px |
| Gap | 40px | 40px |

### Layout — Header

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Width | 100% | 630px |
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

### Video Container

| Property | Mobile (<1024px) | Desktop (>=1024px) |
|----------|-------------------|----------------------|
| Aspect ratio | 1070 / 602 | 1070 / 602 |
| Border radius | 20px | 20px |
| Width | 100% | 100% |
| Max width | — | 1070px |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Light BG | `#F7F7F7` | Section background |
| Dark | `#1F1F1F` | Title text |
| Gray | `#6B727A` | Subtitle text |
| Placeholder | `#D9D9D9` | Video container background |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 1024px | Desktop padding (315px horizontal), larger type, header capped at 630px, video max-width 1070px |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `_fluid.scss` | `$bp-lg`, `$space-gutter` |
