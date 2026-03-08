# Fluid Typography System

## Overview

This project uses a fluid typography system that smoothly scales font sizes, spacing, and other properties between mobile (375px) and desktop (1200px) viewports — with no breakpoints required.

The system is built with SCSS and lives in `src/styles/_fluid.scss`. It provides two approaches:

1. **Linear interpolation** via `fluid()` function — for most use cases
2. **Non-linear interpolation** via `interpolate()` mixin — for eased scaling on hero elements

Inspired by [Non-Linear Interpolation in CSS](https://www.madebymike.com.au/writing/non-linear-interpolation-in-css/) by Mike Riethmuller.

---

## Quick Start

Import the fluid module in any SCSS file:

```scss
@use "../styles/fluid" as *;
```

Then use the preset tokens or call the function directly:

```scss
.title {
  font-size: $font-h1; // Scales 28px → 40px across viewports
}

.custom {
  font-size: fluid(14, 20); // Custom range: 14px → 20px
}
```

---

## API Reference

### `fluid($min-size, $max-size, $min-width?, $max-width?)`

Returns a `clamp()` value that scales linearly between two sizes.

| Parameter    | Type   | Default | Description                     |
|-------------|--------|---------|----------------------------------|
| `$min-size` | number | —       | Size in px at minimum viewport   |
| `$max-size` | number | —       | Size in px at maximum viewport   |
| `$min-width`| number | 375     | Minimum viewport width in px     |
| `$max-width`| number | 1200    | Maximum viewport width in px     |

**How it works:**

The function calculates a slope and intercept to produce a `clamp()` expression:

```
clamp(min-size, intercept + slope * 100vw, max-size)
```

- Below `$min-width` → locks to `$min-size`
- Between `$min-width` and `$max-width` → scales linearly
- Above `$max-width` → locks to `$max-size`

**Examples:**

```scss
// Basic usage
font-size: fluid(16, 24);
// Output: clamp(16px, 10.303px + 1.5152vw, 24px)

// Custom viewport range
padding: fluid(20, 60, 480, 1440);
// Scales 20px → 60px between 480px and 1440px viewports

// Use for any CSS property that accepts px values
gap: fluid(12, 32);
margin-bottom: fluid(24, 48);
```

---

### `@include interpolate(...)`

Mixin for **non-linear** (eased) interpolation. Creates multiple media query segments that simulate CSS animation easing curves applied to viewport-based scaling.

| Parameter    | Type   | Default       | Description                          |
|-------------|--------|---------------|---------------------------------------|
| `$property` | string | —             | CSS property name (e.g. `font-size`)  |
| `$min-vw`   | number | —             | Start viewport width in px            |
| `$min-size` | number | —             | Size at start viewport in px          |
| `$max-vw`   | number | —             | End viewport width in px              |
| `$max-size` | number | —             | Size at end viewport in px            |
| `$ease`     | string | `ease-in-out` | Easing function                       |
| `$points`   | number | `3`           | Number of bending points (segments)   |

**Available easing functions:**

| Easing         | Behavior                                              |
|---------------|-------------------------------------------------------|
| `ease-in`      | Starts slow, accelerates — `t²`                      |
| `ease-out`     | Starts fast, decelerates — `1 - (1 - t)²`            |
| `ease-in-out`  | Slow at both ends, fast in middle — quadratic bezier  |

**Examples:**

```scss
// Hero heading: slow growth on small screens, fast in middle, plateaus on desktop
.hero-title {
  @include interpolate("font-size", 375, 32, 1200, 72, "ease-in-out");
}

// Subtle ease-in for spacing
.section {
  @include interpolate("padding-top", 375, 40, 1200, 120, "ease-in");
}

// Ease-out for element that should reach near-max size quickly
.subtitle {
  @include interpolate("font-size", 375, 18, 1200, 28, "ease-out");
}

// More bending points for smoother curve
.display {
  @include interpolate("font-size", 375, 36, 1200, 80, "ease-in-out", 5);
}
```

**What it generates:**

For 3 bending points, the mixin outputs:

```css
/* Fallback */
font-size: 32px;

/* Segment 1: 375px → 650px (slow growth — eased) */
@media (min-width: 375px) and (max-width: 650px) {
  font-size: clamp(32px, ... , 36.4px);
}

/* Segment 2: 650px → 925px (fast growth — middle of ease) */
@media (min-width: 650px) and (max-width: 925px) {
  font-size: clamp(36.4px, ... , 67.6px);
}

/* Segment 3: 925px → 1200px (slow growth — eased) */
@media (min-width: 925px) and (max-width: 1200px) {
  font-size: clamp(67.6px, ... , 72px);
}

/* Final value */
@media (min-width: 1200px) {
  font-size: 72px;
}
```

---

## Preset Tokens

Ready-to-use variables that cover the standard type scale and spacing:

### Type Scale

| Token           | Range         | Use Case                     |
|----------------|---------------|-------------------------------|
| `$font-display` | 36px → 56px  | Hero / display headings       |
| `$font-h1`      | 28px → 40px  | Page titles                   |
| `$font-h2`      | 22px → 32px  | Section headings              |
| `$font-h3`      | 18px → 24px  | Card titles, sub-headings     |
| `$font-body`    | 15px → 18px  | Body text, paragraphs         |
| `$font-body-sm` | 13px → 16px  | Small body text, captions     |
| `$font-label`   | 13px → 14px  | Labels, nav items, metadata   |

### Spacing

| Token            | Range        | Use Case                      |
|-----------------|--------------|--------------------------------|
| `$space-section` | 32px → 64px | Vertical section padding       |
| `$space-page-x`  | 16px → 24px | Horizontal page padding        |

### Usage in components

```scss
@use "../styles/fluid" as *;

.page {
  padding: $space-section $space-page-x;

  h1 {
    font-size: $font-h1;
    font-weight: 700;
  }

  p {
    font-size: $font-body;
    line-height: 1.7;
  }
}

.card h2 {
  font-size: $font-h3;
}

.nav a {
  font-size: $font-label;
}
```

---

## When to Use What

| Scenario                                  | Approach                          |
|------------------------------------------|-----------------------------------|
| Body text, labels, card titles           | Preset tokens (`$font-body`, etc) |
| Custom size range not in presets         | `fluid(min, max)`                 |
| Spacing, gaps, padding                   | `fluid(min, max)`                 |
| Hero headings needing polished scaling   | `@include interpolate(...)`       |
| Fine control over scaling rate           | `@include interpolate(...)`       |

### Rule of thumb

- **Use `fluid()` / preset tokens** for 90% of cases — simple, one-line, no media queries generated
- **Use `@include interpolate()`** only for prominent elements (hero titles, display text) where the *feel* of the scaling matters

---

## Customization

### Change viewport bounds globally

Edit the variables at the top of `src/styles/_fluid.scss`:

```scss
$fluid-min-width: 375;  // Mobile breakpoint
$fluid-max-width: 1200; // Desktop breakpoint
```

### Add new preset tokens

```scss
$font-caption: #{fluid(11, 13)};
$space-card: #{fluid(16, 32)};
```

### Override for a specific element

```scss
// Use custom bounds for a tablet-only range
.tablet-heading {
  font-size: fluid(24, 36, 768, 1024);
}
```

---

## File Structure

```
src/
├── styles/
│   └── _fluid.scss          ← Fluid system (function, mixin, tokens)
├── app/
│   ├── globals.scss          ← Imports fluid, sets base font-size
│   ├── page.module.scss      ← Uses $font-display, fluid() for padding
│   ├── about/page.module.scss
│   ├── products/page.module.scss
│   ├── blogs/page.module.scss
│   ├── contact/page.module.scss
│   └── ...
└── components/
    ├── Header/Header.module.scss  ← Uses $font-label, fluid() for gaps
    └── Footer/Footer.module.scss  ← Uses $font-body-sm, fluid() for spacing
```

---

## Browser Support

- `clamp()` — supported in all modern browsers (Chrome 79+, Firefox 75+, Safari 13.1+, Edge 79+)
- Media queries — universal support
- No JavaScript required
