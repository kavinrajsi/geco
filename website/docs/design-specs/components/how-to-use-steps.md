# How To Use Steps — Design Specs

## Overview

A step-by-step instructional section showing four steps with image, label, title, and description. On mobile and tablet it renders as a Swiper slider; on desktop it switches to a static 4-column grid. Three breakpoints control typography and layout transitions.

**Component:** `HowToUseSteps.js`
**Location:** `src/components/HowToUseSteps/`

---

## Responsive Behavior

### Display Mode

| Property          | Mobile (<992px)               | Desktop (≥992px)                   |
|-------------------|-------------------------------|------------------------------------|
| Slider            | Display block                 | Display none                       |
| Grid              | Display none                  | Display grid                       |

### Grid Layout (≥992px)

| Property          | Value                          |
|-------------------|--------------------------------|
| Columns           | repeat(4, 1fr)                 |
| Gap               | 30px                           |

### Step Image

| Property          | Value                          |
|-------------------|--------------------------------|
| Aspect ratio      | 1 / 1 (square)                 |
| Border radius     | 16px                           |

---

## Step Typography

### Step Label

| Property          | Mobile (<768px)        | Tablet (≥768px)              | Desktop (≥992px)             |
|-------------------|-----------------------|------------------------------|------------------------------|
| Font size         | 14px                  | 14px                         | 14px                         |
| Font weight       | 400 (Regular)         | 400 (Regular)                | 400 (Regular)                |
| Line height       | 16px                  | 22px                         | 22px                         |

### Step Title

| Property          | Mobile (<768px)        | Tablet (≥768px)              | Desktop (≥992px)             |
|-------------------|-----------------------|------------------------------|------------------------------|
| Font size         | 20px                  | 20px                         | 20px                         |
| Font weight       | 600 (SemiBold)        | 600 (SemiBold)               | 600 (SemiBold)               |
| Line height       | 28px                  | 28px                         | 28px                         |

### Step Description

| Property          | Mobile (<768px)        | Tablet (≥768px)              | Desktop (≥992px)             |
|-------------------|-----------------------|------------------------------|------------------------------|
| Font size         | 16px                  | 18px                         | 18px                         |
| Font weight       | 500 (Medium)          | 500 (Medium)                 | 400 (Regular)                |
| Line height       | 24px                  | 26px                         | 26px                         |

---

## Slider Navigation (Mobile Only)

| Property          | Value                          |
|-------------------|--------------------------------|
| Gap               | 12px                           |
| Margin top        | 32px                           |
| Visibility        | Shown < 992px only             |

---

## Breakpoints Reference

| Value   | Trigger                                              |
|---------|------------------------------------------------------|
| 768px   | Tablet typography adjustments (label, description)   |
| 992px   | Switch from slider to 4-column grid, description font weight changes |

---

## Dependencies

| Dependency      | Purpose                                |
|-----------------|----------------------------------------|
| `swiper`        | Carousel for mobile/tablet             |
| `_fluid.scss`   | Breakpoints                            |
