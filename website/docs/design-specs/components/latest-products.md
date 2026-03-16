# Latest Products — Design Specs

## Overview

A product showcase section displaying the latest products in a horizontally scrollable track on mobile and a flex row on desktop. Each card features an image, category tag, product name, and a two-line description. Navigation arrows shift from below-track on mobile to side-positioned on desktop.

**Component:** `LatestProducts.js`
**Location:** `src/components/LatestProducts/`

---

## Responsive Behavior

### Section

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Padding           | 80px `$space-gutter`          | 80px 0                             |

### Title Typography

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 28px                          | 32px                               |
| Font weight       | 900 (Black)                   | 900 (Black)                        |
| Line height       | 32px                          | 40px                               |

### Wrapper

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Display           | Block                         | Flex                               |
| Gap               | —                             | 30px                               |
| Max width         | 100%                          | `$bp-xl` (1290px)                  |
| Padding X         | 0                             | 60px (for side arrows)             |

### Track

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 20px                          | 30px                               |
| Overflow X        | Auto (scroll)                 | Visible                            |
| Scroll snap       | x mandatory                   | —                                  |

---

## Product Card

### Card Layout

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Width             | 354px                         | Auto                               |
| Max width         | —                             | 410px                              |
| Flex              | 0 0 auto (flex-shrink 0)      | 1                                  |
| Gap               | 16px                          | 16px                               |

### Card Image

| Property          | Value                          |
|-------------------|--------------------------------|
| Height            | 273px                          |
| Border radius     | 10px                           |

### Card Tag

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 14px                           |
| Font weight       | 500 (Medium)                   |
| Line height       | 20px                           |
| Padding           | 4px 16px                       |

### Card Name

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 20px                           |
| Font weight       | 600 (SemiBold)                 |
| Line height       | 28px                           |

### Card Description

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 18px                           |
| Font weight       | 400 (Regular)                  |
| Line height       | 26px                           |
| Line clamp        | 2 lines                        |

---

## Navigation Arrows

### Arrow Button

| Property          | Value                          |
|-------------------|--------------------------------|
| Height            | 44px                           |
| Width             | 44px                           |

### Mobile Arrows (<1024px)

| Property          | Value                          |
|-------------------|--------------------------------|
| Display           | Flex                           |
| Gap               | 24px                           |
| Visibility        | Shown < 1024px only            |

### Desktop Side Arrows (≥1024px)

| Property          | Value                          |
|-------------------|--------------------------------|
| Display           | Flex                           |
| Position          | Absolute                       |
| Top               | 50% (vertically centered)      |
| Visibility        | Shown ≥ 1024px only            |

---

## Breakpoints Reference

| Value   | Trigger                                              |
|---------|------------------------------------------------------|
| 1024px  | Flex row layout, side arrows, overflow visible, larger title |

---

## Dependencies

| Dependency      | Purpose                                |
|-----------------|----------------------------------------|
| `_fluid.scss`   | Breakpoints, `$bp-xl`, `$space-gutter` |
