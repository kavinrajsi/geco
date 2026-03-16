# Blog List — Design Specs

## Overview

The blog listing page with a two-column layout: a main content area displaying blog post cards with pagination, and a sidebar with search, category filters, and a tag cloud. On mobile the sidebar appears above the post list; on desktop it sits to the right.

**Component:** `BlogList.js`
**Location:** `src/components/BlogList/`

---

## Responsive Behavior

### Page Layout

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Display           | Flex column              | Flex row                           |
| Gap               | 30px                     | 30px                               |
| Max width         | 100%                     | `$bp-xl` (1290px)                  |

### Sidebar

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Order             | -1 (above content)       | 1 (right side)                     |
| Gap               | 24px                     | 40px                               |
| Width             | 100%                     | 300px                              |

### Search Input

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Padding           | 12px 20px                | 12px 20px                          |
| Border radius     | 50px (pill)              | 50px (pill)                        |
| Font size         | 18px                     | 18px                               |
| Line height       | 26px                     | 26px                               |

### Section Titles (Categories, Tags)

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Font size         | 20px                     | 20px                               |
| Font weight       | 600 (SemiBold)           | 600 (SemiBold)                     |
| Line height       | 28px                     | 28px                               |

### Tags

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Font size         | 12px                     | 12px                               |
| Line height       | 16px                     | 16px                               |
| Padding           | 8px 16px                 | 8px 16px                           |

---

## Blog Card

### Card Layout

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Display           | Flex column              | Flex row                           |
| Gap               | 30px                     | 30px                               |
| Align items       | Stretch                  | Center                             |

### Card Image

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Aspect ratio      | 520 / 320                | —                                  |
| Height            | Auto                     | 320px                              |
| Width             | 100%                     | 520px                              |

### Card Typography

| Property          | Mobile (<1024px)         | Desktop (≥1024px)                  |
|-------------------|--------------------------|------------------------------------|
| Title font size   | 20px                     | 28px                               |
| Title line height | 28px                     | 36px                               |
| Excerpt font size | fluid(16, 18)            | fluid(16, 18)                      |
| Excerpt line ht   | fluid(24, 26)            | fluid(24, 26)                      |

---

## Load More Button

| Property          | Value                    |
|-------------------|--------------------------|
| Font size         | 14px                     |
| Padding           | 16px 40px                |

---

## Dependencies

| Dependency      | Purpose                                |
|-----------------|----------------------------------------|
| `_fluid.scss`   | Breakpoints, `$bp-xl`, `$space-gutter` |
