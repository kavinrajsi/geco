# Title Styles Reference

All title/heading styles used across the website, organised by page.

---

## Page Titles (PageHeader Component)

Used on Products, Contact, and Blogs pages.

| Page | Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| All (PageHeader) | Page title | `.page-header__title` | h1 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #fff | 576→1400px |

---

## Home Page Section Titles

| Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| Explore Categories | `.explore__title` | h2 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #1f1f1f | 576→1400px |
| Engineered Precision | `.engineered__title` | h2 | Archivo | 28→40px | 600 | 32→48px | capitalize | #fff | 576→1400px |
| Build Principles | `.principles__title` | h2 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #1f1f1f | 576→1400px |
| Featured Products | `.featured-products__title` | h2 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #1f1f1f | 576→1400px |
| Watch Our Stories | `.stories__title` | h2 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #1f1f1f | 576→1400px |
| Instagram Feed | `.instagram__title` | h2 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #1f1f1f | 576→1400px |
| Blog Section | `.home-blogs__title` | h2 | Archivo Expanded | 28→32px | 900 | 32→40px | uppercase | #1f1f1f | 576→1400px |

---

## About Page Titles

| Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| All section headings | `.about__heading` | h2 | Archivo Expanded | 24→32px | 900 | 32→40px | none | #1f1f1f | 576→768px |
| Tagline | `p.about__tagline` | p | Archivo | 18→24px | 600 | 22→32px | capitalize | #1f1f1f | 576→1400px |

---

## Product Detail Page Titles

| Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| Product name | `.product-detail__title` | h1 | Archivo Expanded | 28→32px @ 1024px | 900 | 32→40px | uppercase | #1f1f1f | No (media query) |
| How to Use | `.product-detail__how-to-use-title` | h2 | Archivo Expanded | 28→32px @ 768px | 900 | 32→40px | uppercase | #1f1f1f | No (media query) |
| Highlight CTA | `.highlight__title` | h3 | Archivo | 24→28px @ 1024px | 600 | 28→36px | capitalize | #000 | No (media query) |
| FAQ | `.product-detail__faq-title` | h2 | Archivo Expanded | 28→32px @ 768px | 900 | 32→40px | uppercase | #1f1f1f | No (media query) |
| Collapsible toggle | `.product-detail__collapsible-toggle` | button | Archivo | 20→24px @ 1024px | 600 | 28→32px | none | #1f1f1f | No (media query) |

---

## Product List Page Titles

| Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| Filter button | `.product-grid__filter` | button | Archivo | 12→14px | 500 | 20px | uppercase | #1f1f1f | 576→768px |
| Card category | `.product-grid__card-category` | span | Archivo | 12→14px | 400 | 14→16px | uppercase | #6b727a | 576→768px |
| Card name | `.product-grid__card-name` | span | Archivo | 16→18px | 500 | 24→26px | uppercase | #1f1f1f | 576→768px |

---

## Blog List Page Titles

| Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| Sidebar section title | `.blog-list__section-title` | h3 | inherit | 20px (fixed) | 600 | 28px | capitalize | #1f1f1f | No (fixed) |
| Card title | `.blog-list__card-title` | h2 | Archivo | 20→28px @ 768px | 600 | 28→36px | capitalize @ 768px | #1f1f1f | No (media query) |

---

## Contact Page Titles

| Section | Class | Tag | Font Family | Font Size | Font Weight | Line Height | Text Transform | Color | Interpolated |
|---|---|---|---|---|---|---|---|---|---|---|
| Address title | `.contact__address-title` | h2 | Archivo | 18→20px | 600 | 24→28px | none | #1f1f1f | 576→768px |

---

## Not Yet Interpolated

The following titles still use hardcoded media queries instead of the `interpolate` mixin:

- **Product Detail**: 5 titles (product name, how-to-use, highlight, FAQ, collapsible)
- **Blog List**: 2 titles (sidebar section title, card title)
- **About heading**: uses 768px end breakpoint (not 1400px)
- **Contact address title**: uses 768px end breakpoint (not 1400px)
