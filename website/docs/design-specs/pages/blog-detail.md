# Blog Detail Page — Design Specs

## Overview

Full blog article page with a hero feature image, rich text content with dynamic content blocks, tags, share buttons, and previous/next navigation.

**Route:** `/blogs/[slug]`
**File:** `src/app/blogs/[slug]/page.js`
**ISR:** Tag `strapi-blogs`

---

## Page Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Feature Image | Full-viewport hero image |
| 2 | Article Header | Title, date, category |
| 3 | Content Blocks | Dynamic rich text, images, videos, embeds |
| 4 | Tags + Share | Tag pills and social share buttons |
| 5 | Prev / Next Nav | Navigation between blog posts |

---

## Responsive Behavior

### Feature Image

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Height: `calc(100vh - 93px)` | Height: `calc(100vh - 124px)` |
| Width: `100%` | Width: `100%` |
| Object-fit: Cover | Object-fit: Cover |

### Article Wrapper

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Padding: `40px $space-gutter` | Padding: `60px $space-gutter` |
| Max width: `100%` | Max width: `850px` (≥1200px) |

### Article Typography

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Title font-size: `28px` | Title font-size: `48px` |
| Title line-height: `36px` | Title line-height: `56px` |
| Title font-family: Archivo Expanded | Title font-family: Archivo Expanded |
| Title font-weight: `900` | Title font-weight: `900` |
| Meta font-size: `16px` | Meta font-size: `18px` |
| Meta line-height: `24px` | Meta line-height: `26px` |

### Rich Text Content

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Body font-size: `fluid(16, 18)` | Body font-size: `fluid(16, 18)` |
| Body line-height: `fluid(24, 26)` | Body line-height: `fluid(24, 26)` |
| H2 font-size: `22px` | H2 font-size: `28px` |
| H3 font-size: `20px` | H3 font-size: `24px` |
| H4 font-size: `18px` | H4 font-size: `20px` |
| Image width: `100%` | Image width: `100%` |
| Image border-radius: `10px` | Image border-radius: `10px` |
| Figure (left/right): `100%` width | Figure (left/right): `50%` width, floated |
| Table font-size: `14px` | Table font-size: `16px` |
| Blockquote border: `3px solid #97D700` | Blockquote border: `3px solid #97D700` |

### Tags Section

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Padding: `32px 0` | Padding: `40px 0` |
| Gap: `12px` | Gap: `12px` |
| Tag font-size: `14px` | Tag font-size: `14px` |
| Tag padding: `8px 20px` | Tag padding: `8px 20px` |
| Tag border-radius: `50px` | Tag border-radius: `50px` |
| Tag background: `#F7F7F7` | Tag background: `#F7F7F7` |

### Previous / Next Navigation

| Mobile (<768px) | Desktop (≥768px) |
|----------------|-------------------|
| Direction: Column | Direction: Row |
| Gap: `24px` | Gap: `40px` |
| Title font-size: `18px` | Title font-size: `20px` |
| Title line-height: `26px` | Title line-height: `28px` |

---

## Content Block Types

| Type | Description |
|------|-------------|
| `rich-text` | Formatted text with headings, lists, links |
| `heading` | Standalone heading (h2–h4) |
| `image` | Image with optional caption and alignment |
| `video` | Embedded video player |
| `embed` | External embed (iframe) |
| `table` | Data table |
| `file` | Downloadable file attachment |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#1F1F1F` | Body text |
| Lime | `#97D700` | Blockquote border, tag hover |
| Off White | `#F7F7F7` | Tag background |
| Light Gray | `#E9E9E9` | Dividers |

---

## SEO

| Property | Value |
|----------|-------|
| Title | `[Blog Title] | Geco` |
| Description | Blog excerpt from CMS |
| JSON-LD | `BlogPosting` |
| Canonical | `/blogs/[slug]` |

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| `ShareButtons` | See `components/share-buttons.md` |
| `FallbackImage` | Image with error fallback |
