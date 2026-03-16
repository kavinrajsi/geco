# Page Header — Design Specs

## Overview

A full-width header banner with a dark blue background and a large white title. Used at the top of interior pages (e.g., Products, About) to establish the page context.

**Component:** `PageHeader.js`
**Location:** `src/components/PageHeader/`

---

## Responsive Behavior

### Layout

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Padding | 40px `$space-gutter` (20px) | 80px `$space-gutter` 120px |
| Background | `#10069F` | `#10069F` |
| Margin bottom | 0 | 40px |

### Typography — Title

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Font size | 28px | 32px |
| Font weight | 900 (Black) | 900 (Black) |
| Line height | 32px | 40px |
| Color | `#FFFFFF` | `#FFFFFF` |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark Blue | `#10069F` | Section background |
| White | `#FFFFFF` | Title text |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `_fluid.scss` | `$space-gutter`, `$bp-md` |
