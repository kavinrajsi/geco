# Share Buttons — Design Specs

## Overview

A horizontal row of social share icon buttons with a text label. Used on detail pages (e.g., blog posts, product pages) to allow sharing via social platforms. No responsive changes — layout is consistent across all breakpoints.

**Component:** `ShareButtons.js`
**Location:** `src/components/ShareButtons/`

---

## Responsive Behavior

### Layout

| Property | All Breakpoints |
|----------|-----------------|
| Display | flex |
| Align items | center |
| Gap | 12px |

### Typography — Label

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 18px |
| Font weight | 400 (Regular) |
| Line height | 26px |
| White space | nowrap |

### Icons Container

| Property | All Breakpoints |
|----------|-----------------|
| Display | flex |
| Gap | 8px |

### Icon Button

| Property | All Breakpoints |
|----------|-----------------|
| Height | 48px |
| Width | 48px |
| Border radius | 12px |
| Border | 1px solid `#E9E9E9` |
| Background | `#FFFFFF` |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Icon button background |
| Light Gray | `#E9E9E9` | Icon button border |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| (none) | No external dependencies |
