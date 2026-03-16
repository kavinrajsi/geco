# Engineered for Precision — Design Specs

## Overview

A full-width, image-backed hero section with marketing headline, description, and CTA button. Background images swap responsively across three breakpoints. Content shifts from centered (mobile) to right-aligned (desktop).

**Component:** `EngineeredPrecision.js`
**Location:** `src/components/EngineeredPrecision/`

---

## Responsive Behavior

### Layout — Section

| Property | Mobile (<768px) | Tablet (>=768px) | Desktop (>=960px) | Large (>=1200px) |
|----------|-----------------|-------------------|----------------------|---------------------|
| Min height | 640px | 1000px | 760px | 760px |
| Background image | `mobile-bg.png` | `tablet-bg.png` | `desktop-bg.png` | `desktop-bg.png` |
| Display | block | block | block | flex |
| Align items | — | — | — | center |
| Justify content | — | — | — | flex-end |

### Layout — Content Block

| Property | Mobile (<768px) | Tablet (>=768px) | Desktop (>=960px) |
|----------|-----------------|-------------------|----------------------|
| Padding Y | 64px 0 | 120px 0 | 120px 0 |
| Gap | 40px | 40px | 40px |
| Align items | center | center | flex-start |
| Text align | center | center | left |

### Typography — Title

| Property | Mobile (<768px) | Tablet (>=768px) |
|----------|-----------------|-------------------|
| Font size | 28px | 40px |
| Font weight | 600 (SemiBold) | 600 (SemiBold) |
| Line height | 32px | 48px |

### Typography — Description

| Property | Mobile (<768px) | Tablet (>=768px) |
|----------|-----------------|-------------------|
| Font size | 16px | 18px |
| Font weight | 500 (Medium) | 500 (Medium) |
| Line height | 24px | 26px |

### CTA Button — "Learn more"

| Property | All Breakpoints |
|----------|-----------------|
| Font size | 14px |
| Line height | 20px |
| Padding | 16px 40px |

---

## Interactive States

### CTA Button

| Property | Default | Hover |
|----------|---------|-------|
| Background | `#97D700` (lime) | `#10069F` (dark blue) |
| Color | `#1F1F1F` | `#FFFFFF` |
| Border | 1px solid transparent | 1px solid `#97D700` |
| Transition | 0.2s (background, color, border-color) | |

---

## Background Images

| Breakpoint | File | Path |
|------------|------|------|
| Mobile (<768px) | `mobile-bg.png` | `/images/engineered-precision/mobile-bg.png` |
| Tablet (>=768px) | `tablet-bg.png` | `/images/engineered-precision/tablet-bg.png` |
| Desktop (>=960px) | `desktop-bg.png` | `/images/engineered-precision/desktop-bg.png` |

All images: CSS `background-image`, positioned `center bottom`, sized `cover`.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Text (title, description) |
| Lime Green | `#97D700` | CTA background, hover border |
| Dark | `#1F1F1F` | CTA text (default) |
| Dark Blue | `#10069F` | CTA background (hover) |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 768px | Tablet bg, larger type, increased padding |
| 960px | Desktop bg, content right-aligned + left text-align |
| 1200px | Section becomes flex container, vertically centered |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `next/link` | Client-side navigation to `/products` |
| `_fluid.scss` | `$bp-md`, `$bp-xl`, `$space-gutter` |
