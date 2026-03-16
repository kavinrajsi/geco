# Product Grid — Design Specs

## Overview

A filterable product listing grid that displays product cards in a responsive flex layout. Includes a row of category filter pills at the top. Cards show a product image, category label, and product name.

**Component:** `ProductGrid.js`
**Location:** `src/components/ProductGrid/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<576px) | Small (>=576px) | Desktop (>=992px) | Large (>=1200px) |
|----------|-----------------|-----------------|---------------------|---------------------|
| Padding | 0 0 180px | 0 0 180px | 0 0 180px | 0 0 80px |
| Max width | — | — | — | `$bp-xl` (1290px) |
| Gap | 32px | 32px | 32px | 32px |

### Layout — Grid

| Property | Mobile (<576px) | Small (>=576px) | Desktop (>=992px) | Large (>=1200px) |
|----------|-----------------|-----------------|---------------------|---------------------|
| Gap | 30px | 56px 30px | 56px 30px | 56px 30px |
| Card width | `calc((100%/12)*12 - 30px)` (full) | `calc((100%/12)*6 - 30px)` (half) | `calc((100%/12)*4 - 30px)` (third) | `calc((100%/12)*3 - 30px)` (quarter) |

### Typography — Filter Pills

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 14px |
| Font weight | 500 (Medium) |
| Line height | 20px |

### Filter — Active State

| Property | Value |
|----------|-------|
| Background | `#97D700` |
| Border | 2px solid `#97D700` |
| Padding | 8px 32px |

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

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Lime Green | `#97D700` | Active filter background + border |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 576px | Cards switch to 2-up (half width) |
| 992px | Cards switch to 3-up (third width) |
| 1200px | Cards switch to 4-up (quarter width), max-width applied, reduced bottom padding |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `_fluid.scss` | `$bp-sm`, `$bp-lg`, `$bp-xl` |
