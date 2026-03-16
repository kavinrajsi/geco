# Contact Form — Design Specs

## Overview

A contact form card with text inputs, a textarea, and a submit button. On submission success, the form is replaced by a confirmation message. The form layout shifts from stacked fields on mobile to side-by-side paired fields on desktop.

**Component:** `ContactForm.js`
**Location:** `src/components/ContactForm/`

---

## Responsive Behavior

### Card Container

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Background        | `#F7F7F7`                     | `#F7F7F7`                          |
| Border radius     | 30px                          | 30px                               |
| Gap               | 24px                          | 24px                               |
| Padding           | 24px 16px                     | 24px                               |

### Title Typography

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 24px                          | 28px                               |
| Font weight       | 600 (SemiBold)                | 600 (SemiBold)                     |
| Line height       | 28px                          | 36px                               |

### Form Layout

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Gap               | 16px                          | 20px                               |

### Form Row (Paired Fields)

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Display           | Flex column                   | Flex row                           |
| Gap               | 16px                          | 16px                               |

### Input / Textarea

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Font size         | 16px                          | 18px                               |
| Line height       | 24px                          | 26px                               |
| Height (input)    | 48px                          | 48px                               |
| Padding           | 11px 16px                     | 11px 16px                          |

### Textarea

| Property          | Value                          |
|-------------------|--------------------------------|
| Height            | 120px                          |

### Submit Button

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 14px                           |
| Line height       | 20px                           |
| Padding           | 16px 40px                      |

---

## Footer

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Display           | Flex column                   | Flex row                           |
| Gap               | 32px                          | 32px                               |
| Align items       | Stretch                       | Center                             |

---

## Success State

### Success Typography

| Property          | Mobile (<768px)               | Desktop (≥768px)                   |
|-------------------|-------------------------------|------------------------------------|
| Title font size   | 24px                          | 28px                               |
| Title line height | 28px                          | 36px                               |
| Message font size | 16px                          | 18px                               |
| Message line ht   | 24px                          | 26px                               |

---

## Color Palette

| Token           | Hex        | Usage                    |
|-----------------|------------|--------------------------|
| Light BG        | `#F7F7F7`  | Card background          |

---

## Dependencies

| Dependency      | Purpose                                |
|-----------------|----------------------------------------|
| `_fluid.scss`   | Breakpoints, `$space-gutter`           |
