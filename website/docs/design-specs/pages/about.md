# About Page — Design Specs

## Overview

Company story page with a hero video, text sections, and alternating text+image split layouts. Content is hardcoded.

**Route:** `/about`
**File:** `src/app/about/page.js`

---

## Responsive Behavior

### Video Hero

| Property | Mobile (<768px) | Desktop (≥768px) |
|----------|----------------|-------------------|
| Width | `100%` | `100%` |
| Height | Auto | Auto |
| Border radius | `0` | `0` |

### Section Layout

| Property | Mobile (<768px) | Desktop (≥768px) |
|----------|----------------|-------------------|
| Padding | `80px $space-gutter` | `120px $space-gutter` |
| Max width | `100%` | `850px` (≥1200px) |
| Background (alt) | `#F8FFE1` | `#F8FFE1` |

### Typography

| Property | Mobile (<768px) | Desktop (≥768px) |
|----------|----------------|-------------------|
| Heading font-size | `24px` | `32px` |
| Heading line-height | `32px` | `40px` |
| Heading font-family | Archivo Expanded | Archivo Expanded |
| Heading font-weight | `900` | `900` |
| Heading text-transform | Uppercase | Uppercase |
| Body font-size | `fluid(16, 18)` | `fluid(16, 18)` |
| Body line-height | `fluid(24, 26)` | `fluid(24, 26)` |

### Split Layout (Text + Image)

| Property | Mobile (<992px) | Desktop (≥992px) |
|----------|-----------------|-------------------|
| Direction | Column | Row |
| Gap | `32px` | `60px` |
| Image width | `100%` | `520px` |
| Image height | Auto | `640px` |
| Image object-fit | Cover | Cover |
| Image border-radius | `20px` | `20px` |
| Text width | `100%` | Flex 1 |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Default section background |
| Light Green | `#F8FFE1` | Alternate section background |
| Dark | `#1F1F1F` | Body text |

---

## SEO

| Property | Value |
|----------|-------|
| Title | `About | Geco` |
| JSON-LD | `AboutPage` |
| Canonical | `/about` |
