# Footer — Design Specs

## Overview

The site-wide footer with brand logo, contact information, navigation link columns (using accordion behavior on mobile), social media icons, and a bottom copyright bar. Layout shifts from a stacked column on mobile to a horizontal row on desktop.

**Component:** `Footer.js`
**Location:** `src/components/Footer/`

---

## Responsive Behavior

### Section

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Background        | `#97D700`                     | `#97D700`                          |
| Padding Y         | 40px 0                        | 40px 0                             |

### Container

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Display           | Flex column                   | Flex row                           |
| Gap               | 24px / 40px                   | 24px / 40px                        |
| Padding X         | `$space-gutter` (20px)        | `$space-gutter` (20px)             |
| Padding Y         | fluid(0, 60)                  | fluid(0, 60)                       |
| Max width         | 100%                          | `$bp-xl` (1290px)                  |
| Justify content   | Flex-start                    | Space-between                      |

### Brand Area

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 40px                          | 40px                               |
| Width             | 100%                          | 300px                              |

### Logo

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Height            | 45px                          | 60px                               |

### Contact Item

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 18px                          | 18px                               |
| Line height       | 26px                          | 26px                               |
| Gap               | 12px                          | 12px                               |

---

## Navigation

### Nav Layout

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Display           | Flex column                   | Flex row                           |
| Gap               | 0                             | 60px                               |
| Padding top       | 36px                          | 0                                  |

### Accordion Header Text

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 18px                          | 16px                               |
| Font weight       | 600 (SemiBold)                | 600 (SemiBold)                     |
| Line height       | 22px                          | 26px                               |
| Padding bottom    | 0                             | 8px                                |

### Nav Links

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 8px                           | 8px                                |
| Padding bottom    | 16px                          | 0                                  |
| Font size         | `$font-body`                  | `$font-body`                       |

---

## Social Icons

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 16px                          | 16px                               |
| Icon width        | 24px                          | 24px                               |
| Icon height       | 24px                          | 24px                               |
| Container width   | 100%                          | 300px                              |

---

## Bottom Bar

### Inner Layout

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Display           | Flex column                   | Flex row                           |
| Gap               | 8px                           | 8px                                |
| Margin top        | 32px                          | 0                                  |
| Padding top       | 16px                          | 0                                  |
| Padding Y         | 16px 0                        | 12px 0                             |
| Align items       | Flex-start                    | Center                             |
| Justify content   | Flex-start                    | Space-between                      |

### Copyright Text

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 14px                           |
| Line height       | 16px                           |

---

## Color Palette

| Token           | Hex        | Usage                    |
|-----------------|------------|--------------------------|
| Lime Green      | `#97D700`  | Footer background        |

---

## Dependencies

| Dependency      | Purpose                                          |
|-----------------|--------------------------------------------------|
| `_fluid.scss`   | Breakpoints, `$bp-xl`, `$space-gutter`, `$font-body` |
