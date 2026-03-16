# Section Title — Design Specs

## Overview

A reusable section heading block with a centered title and optional description text. Used across multiple pages to introduce content sections.

**Component:** `SectionTitle.js`
**Location:** `src/components/SectionTitle/`

---

## Responsive Behavior

### Layout

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Margin bottom | 24px | 32px |

### Typography — Heading

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Font size | 28px | 32px |
| Font weight | 900 (Black) | 900 (Black) |
| Line height | 32px | 40px |
| Text align | Center | Center |

### Typography — Description

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Font size | 16px | 18px |
| Font weight | 500 (Medium) | 500 (Medium) |
| Line height | 24px | 26px |
| Text align | Center | Center |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `_fluid.scss` | `$bp-md` |
