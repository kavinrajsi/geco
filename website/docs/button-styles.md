# Button Styles Catalog

## All Buttons

| # | Name | File | Class | Background | Color | Border | Radius | Padding | Font | States |
|---|------|------|-------|------------|-------|--------|--------|---------|------|--------|
| 1 | **Submit Button** | `ContactForm.module.scss` | `.contact-form__submit` | `#97d700` | `#1f1f1f` | `1px solid #97d700` | `50px` | `16px 40px` | 14px/500/uppercase | Hover: bg `#10069f`, color `#fff`. Disabled: opacity 0.5 |
| 2 | **Carousel Arrow** | `LatestProducts.module.scss` | `.latest__arrow` | `#fff` | — | `1px solid #e9e9e9` | `50%` | — (44x44) | — | Hidden mobile, absolute desktop |
| 3 | **Slider Nav** | `HomeFeaturedProducts.module.scss` | `.featured-products__nav-btn` | `#fff` | — | `1px solid #e9e9e9` | `1000px` | — (44x44) | — | Hover: border `#a0a0a0`. Disabled: opacity 0.35 |
| 4 | **Category Filter** | `BlogList.module.scss` | `.blog-list__category-item` | `none` | `#696c70` | `none` | — | `0` | 18px/inherit | Active: color `#1f1f1f`, underline |
| 5 | **Tag Filter** | `BlogList.module.scss` | `.blog-list__tag` | `none` | `#1f1f1f` | `1px solid #a0a0a0` | `48px` | `8px 16px` | 12px/uppercase | Active: bg `rgba(151,215,0,0.4)` |
| 6 | **Load More** | `BlogList.module.scss` | `.blog-list__load-more` | `#97d700` | `#1f1f1f` | `none` | `50px` | `16px 40px` | 14px/500/uppercase | — |
| 7 | **Step Nav** | `HowToUseSteps.module.scss` | `.nav__btn` | `none` | — | `none` | — | `0` | — | Disabled: opacity 0.35 |
| 8 | **Brochure CTA** | `products/[id]/page.module.scss` | `.product-detail__brochure` | `#97d700` | `#1f1f1f` | — | `50px` | `12px 40px` | 16px/600 | — |
| 9 | **Collapsible Toggle** | `products/[id]/page.module.scss` | `.product-detail__collapsible-toggle` | `none` | `#1f1f1f` | `none` | — | `24px 0` | 20px/600 | Chevron rotates 180deg |
| 10 | **FAQ Toggle** | `products/[id]/page.module.scss` | `.product-detail__faq-question` | `none` | `#1f1f1f` | `none` | — | `0` | 20px/600 | `+`/`–` indicator |
| 11 | **Highlight CTA** | `products/[id]/page.module.scss` | `.highlight__btn` | `#1f1f1f` | `#fff` | — | `50px` | `16px 40px` | 14px/500/uppercase | — |
| 12 | **Engineered CTA** | `EngineeredPrecision.module.scss` | `.engineered__cta` | `#97d700` | `#1f1f1f` | `1px solid transparent` | `50px` | `16px 40px` | 14px/500/uppercase | Hover: bg `#10069f`, color `#fff`, border `#97d700` |
| 13 | **Category Label** | `ExploreCategories.module.scss` | `.explore__card-label` | `#fff` | `#1f1f1f` | — | `50px` | `16px 12px` | 20px/600 | Hover: bg `#97d700` |
| 14 | **Hamburger** | `Header.module.scss` | `.header__hamburger` | `none` | — | `none` | — | `5px` | — | 3 white spans, hidden desktop |
| 15 | **Mobile Close** | `Header.module.scss` | `.mobile-menu__close` | `none` | — | `none` | — | `0` | — | — |
| 16 | **Contact Link** | `contact-us/page.module.scss` | `.contact__btn` | `#97d700` | `#1f1f1f` | — | `50px` | `8px 16px` | 16px/600 | With icon gap 8px |
| 17 | **Blog Nav** | `HomeBlogSection.module.scss` | `.home-blogs__nav-btn` | `#fff` | — | `1px solid #e9e9e9` | `1000px` | — (44x44) | — | Hover: border `#a0a0a0`. Disabled: opacity 0.35 |
| 18 | **Related Arrow** | `RelatedProducts.module.scss` | `.related__arrow` | `#fff` | — | `1px solid #e9e9e9` | `50%` | — (44x44) | — | Hidden mobile, absolute desktop |
| 19 | **Share Icon** | `ShareButtons.module.scss` | `.share__icon` | `#fff` | — | `1px solid #e9e9e9` | `12px` | — (48x48) | — | Hover: bg `#f7f7f7` |

## Design Patterns Summary

| Pattern | Values |
|---------|--------|
| **Primary CTA** | bg `#97d700`, color `#1f1f1f`, radius `50px`, padding `16px 40px`, uppercase |
| **Dark CTA** | bg `#1f1f1f`, color `#fff`, radius `50px`, padding `16px 40px`, uppercase |
| **Hover accent** | bg `#10069f` (dark blue), border `#97d700`, color `#fff` |
| **Nav circles** | `#fff` bg, `#e9e9e9` border, 44x44, `50%`/`1000px` radius |
| **Ghost/toggle** | No bg/border, full-width, flex between |
| **Disabled** | opacity `0.35`, pointer-events `none` |
| **Transitions** | `0.2s` (hover), `0.3s` (forms) |

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#97d700` | CTA backgrounds, hover accents |
| Primary Dark Blue | `#10069f` | Hover backgrounds |
| Dark Text | `#1f1f1f` | Text color, dark CTA bg |
| White | `#fff` | Nav buttons, text on dark |
| Light Gray Border | `#e9e9e9` | Nav button borders |
| Medium Gray | `#a0a0a0` | Hover borders, tag borders |
| Text Gray | `#696c70` | Inactive filter text |
| Light BG | `#f7f7f7` | Hover backgrounds |
| Green Transparent | `rgba(151,215,0,0.4)` | Active tag backgrounds |
