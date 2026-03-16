# Hero Slider — Design Specs

## Overview

A full-width auto-playing image carousel at the top of the home page. Displays responsive desktop/mobile image variants per slide with looping navigation, mousewheel support, and custom pagination dots. Serves as the primary hero section.

**Component:** `HeroSlider.js` (client)
**Location:** `src/components/HeroSlider/`

---

## Responsive Behavior

### Layout — Images

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Mobile image | display: block | display: none |
| Mobile image height | `calc(100vh - 94px - 44px)` | — |
| Mobile image width | 100% | — |
| Mobile image fit | contain | — |
| Desktop image | display: none | display: block |
| Desktop image height | — | `calc(100vh - 124px)` |
| Desktop image width | — | 100vw |
| Desktop image fit | — | contain |

### Pagination

| Property | Mobile (<768px) | Desktop (>=768px) |
|----------|-----------------|---------------------|
| Bottom | — | 36px |
| Bullet width | — | 8px |
| Bullet height | — | 8px |
| Bullet margin | — | 0 10px |

**Height calculations account for:**
- Desktop: 124px header height
- Mobile: 94px header + 44px offset (announcement bar or similar)

---

## Swiper Configuration

| Property | Value |
|----------|-------|
| Autoplay delay | 5000ms (5s) |
| Disable on interaction | false |
| Mousewheel | Force to axis |
| Pagination | Clickable dots |
| Loop | true |
| Navigation arrows | None |

---

## Pagination Dots

### Inactive Bullet

| Property | Value |
|----------|-------|
| Size | 8 x 8 px |
| Background | Transparent |
| Border | 1px solid `#A0A0A0` |
| Border radius | 50% (circle) |
| Opacity | 1 |
| Margin | 0 10px |
| Transition | 0.3s (background, border-color) |

### Active Bullet

| Property | Value |
|----------|-------|
| Background | `#97D700` (lime) |
| Border color | Transparent |

### Active Bullet — Outer Ring (::before)

| Property | Value |
|----------|-------|
| Size | 20 x 20 px |
| Border | 1px solid `#97D700` |
| Border radius | 50% (circle) |
| Position | Centered on bullet |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark Blue | `#11099D` | Slide background (behind image) |
| Gray | `#A0A0A0` | Inactive pagination bullet border |
| Lime Green | `#97D700` | Active bullet fill + outer ring |

---

## Breakpoints Reference

| Value | Trigger |
|-------|---------|
| 768px | Swap from mobile image to desktop image; pagination dots visible |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `swiper` | Carousel (Autoplay, Mousewheel, Pagination) |
| `FallbackImage` | Image with error fallback |
| `_fluid.scss` | `$bp-md` breakpoint |
