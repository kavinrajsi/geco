# Build Principles — Design Specs

## Overview

A grid section displaying four core brand principles, each represented by an icon, title, and description. The layout shifts from a 2-column grid on mobile to a 4-column grid on desktop, with updated typography and spacing at the breakpoint.

**Component:** `BuildPrinciples.js`
**Location:** `src/components/BuildPrinciples/`

---

## Responsive Behavior

### Section

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Background        | `#F7F7F7`                     | None (transparent)                 |
| Padding Y         | 80px 0                        | 120px 0 60px                       |

### Container

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Padding X         | `$space-gutter` (20px)        | `$space-gutter` (20px)             |

### Header

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 8px                           | 8px                                |
| Text align        | Center                        | Center                             |
| Width             | 100%                          | 630px                              |

### Title Typography

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 28px                          | 32px                               |
| Font weight       | 900 (Black)                   | 900 (Black)                        |
| Line height       | 32px                          | 40px                               |
| Text transform    | Uppercase                     | Uppercase                          |

### Subtitle Typography

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 16px                          | 18px                               |
| Font weight       | 500 (Medium)                  | 500 (Medium)                       |
| Line height       | 24px                          | 26px                               |

---

## Principles Grid

### Grid Layout

| Property              | Mobile (<1024px)          | Desktop (≥1024px)                  |
|-----------------------|---------------------------|------------------------------------|
| Grid columns          | 1fr 1fr                   | repeat(4, 1fr)                     |
| Gap (row / column)    | 56px / 20px               | 30px                               |

### Card

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 24px                          | 24px                               |

### Card Icon

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Height            | 75px                          | 100px                              |

### Card Title

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 18px                          | 24px                               |
| Font weight       | 600 (SemiBold)                | 600 (SemiBold)                     |
| Line height       | 22px                          | 32px                               |

### Card Description

| Property          | Mobile (<1024px)              | Desktop (≥1024px)                  |
|-------------------|-------------------------------|------------------------------------|
| Font size         | —                             | 18px                               |
| Line height       | —                             | 26px                               |

---

## Color Palette

| Token           | Hex        | Usage                    |
|-----------------|------------|--------------------------|
| Light BG        | `#F7F7F7`  | Section background (mobile only) |

---

## Dependencies

| Dependency      | Purpose                                |
|-----------------|----------------------------------------|
| `_fluid.scss`   | Breakpoints, `$space-gutter`           |
