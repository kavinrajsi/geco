# Header — Design Specs

## Overview

The site-wide header with logo, desktop navigation with dropdown submenus, utility icons, and a hamburger-triggered mobile menu with accordion navigation. Three distinct breakpoints govern the transition from mobile to tablet to full desktop layout.

**Component:** `Header.js` + `HeaderWrapper.js`
**Location:** `src/components/Header/`

---

## Responsive Behavior

### Container

| Property          | Mobile (<768px)        | Tablet (≥768px)              | Desktop (≥992px)             |
|-------------------|-----------------------|------------------------------|------------------------------|
| Background        | `#10069F`             | `#10069F`                    | `#10069F`                    |
| Padding           | 24px 20px             | 32px `$space-gutter`         | 32px `$space-gutter`         |

### Logo

| Property          | Mobile (<768px)        | Tablet (≥768px)              | Desktop (≥992px)             |
|-------------------|-----------------------|------------------------------|------------------------------|
| Height            | 45px                  | 60px                         | 60px                         |

### Desktop Navigation (≥992px)

| Property          | Value                          |
|-------------------|--------------------------------|
| Display           | Flex (hidden < 992px)          |
| Gap               | 26px                           |

### Nav Link

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 18px                           |
| Font weight       | 600 (SemiBold)                 |
| Line height       | 26px                           |

### Submenu Dropdown

| Property          | Value                          |
|-------------------|--------------------------------|
| Min width         | 240px                          |
| Border radius     | 0 0 10px 10px                  |

### Submenu Link

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 14px                           |
| Font weight       | 500 (Medium)                   |
| Line height       | 20px                           |
| Padding           | 12px 16px                      |

### Utility Icons (≥992px)

| Property          | Value                          |
|-------------------|--------------------------------|
| Display           | Flex (hidden < 992px)          |
| Gap               | 16px                           |

---

## Hamburger Menu Button

| Property          | Mobile (<992px)               | Desktop (≥992px)                   |
|-------------------|-------------------------------|------------------------------------|
| Display           | Block                         | None (hidden)                      |
| Gap (between lines)| 5px                          | —                                  |
| Line width        | 30px                          | —                                  |
| Line height       | 2px                           | —                                  |

---

## Mobile Menu (<992px)

### Nav Container

| Property          | Value                          |
|-------------------|--------------------------------|
| Display           | Block (hidden ≥ 992px)         |
| Padding           | 56px 32px 120px                |
| Border radius     | 0 0 20px 20px                  |
| Gap               | 24px                           |

### Mobile Link

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 18px                           |
| Font weight       | 600 (SemiBold)                 |
| Line height       | 22px                           |
| Gap               | 16px                           |

### Mobile Sublink

| Property          | Value                          |
|-------------------|--------------------------------|
| Font size         | 16px                           |
| Font weight       | 500 (Medium)                   |
| Line height       | 22px                           |
| Gap               | 12px                           |

---

## Color Palette

| Token           | Hex        | Usage                    |
|-----------------|------------|--------------------------|
| Dark Blue       | `#10069F`  | Header background        |

---

## Breakpoints Reference

| Value   | Trigger                                              |
|---------|------------------------------------------------------|
| 768px   | Tablet padding and logo size                         |
| 992px   | Desktop nav visible, hamburger hidden, mobile menu hidden |

---

## Dependencies

| Dependency      | Purpose                                |
|-----------------|----------------------------------------|
| `_fluid.scss`   | Breakpoints, `$space-gutter`           |
