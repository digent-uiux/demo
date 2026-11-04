# Wishlist 01 - Blush wishlist

The Blocko page `wishlist-01` (theme **Blush**) as a Shopify OS 2.0 page: the `page.wishlist-01` template plus the header and footer
groups, built from standalone Blocko sections. It runs in any OS 2.0 theme (checked in Dawn).

## Sections

| Group / template | Section | Blocko variant | What it does |
|---|---|---|---|
| header group | `blko-theme-blush` | – | The Blush look: DS tokens on `:root` and the Blush fonts. Renders no markup. |
| header group | `blko-header-01` | Header 01 - Logo left, nav center | Centred main menu (link_list), search, account, wishlist link, cart count from `cart.item_count`; fold-out menu on mobile. |
| `page.wishlist-01.json` | `blko-wishlist-01` | Wishlist 01 - Vanity grid, sticky list card | Item blocks (real product: shade and size variants, price and stock per variant, move to bag via /cart/add.js); filter tabs, remove with undo kept in localStorage `blko-wishlist-hidden`, notify picks in `blko-notify`, list stats and share link. |
| `page.wishlist-01.json` | `blko-trust-badges-05` | Trust badges 05 - Split, skincare claims | Claim blocks (key, icon, explanation) and Product blocks; claim keys read from the product metafield set in the section (default `custom.claims`), else the block's keys. |
| `page.wishlist-01.json` | `blko-shoppable-image-06` | Shoppable image 06 - Lookbook tiles, makeup looks | Look blocks (collection or product, photo, caption); first look large, the rest stacked. |
| `page.wishlist-01.json` | `blko-coupon-07` | Coupon 07 - Dark ticket, serif, beauty | Ticket offer on dark with a copyable code. |
| `page.wishlist-01.json` | `blko-recommendations-07` | Recommendations 07 - Vivid, marquee tapes, beauty | Crossing word tapes (frozen with `?static`), then a collection (or Item blocks) on a snap rail with quick add via /cart/add.js and a scroll progress bar. |
| footer group | `blko-footer-02` | Footer 02 - Serif newsletter, soft | Serif newsletter (customer form), three menu columns, legal menu. |

Each section also lives on its own in `liquid/blocks/<slug>-NN/` with its README and settings table.

## Files

- `sections/`: the 8 sections above.
- `snippets/`: `blko-ui-*` (shared by every Blocko section, keep one copy) and the `blko-<id>-*` snippets of each section.
- `assets/`: each section's CSS/JS, `blko-ui-core.css`, `blko-ui-commerce.css`, the DS fonts (`blko-ui-*.woff2`) and the
  Blush fonts (`blko-font-*.woff2`).
- `locales/`: `en.default.blko.json`, `en.default.blko-commerce.json`.
- `groups/header-group.json`, `groups/footer-group.json`.
- `templates/page.wishlist-01.json` (the real template) and `templates/index.wishlist-01.json` (the same content, used by the local
  render/parity tools only; don't install it).

## Install

1. Copy `sections/`, `snippets/`, `assets/` and `locales/` into the same folders of your theme. If the theme already has
   `locales/en.default.json`, merge the `blko*` keys from the two `locales/en.default.blko*.json` files into it.
2. Copy `templates/page.wishlist-01.json` into the theme's `templates/` folder. Then assign the `wishlist-01` template to the page in Online Store > Pages.
3. Header and footer: `groups/header-group.json` and `groups/footer-group.json` are references. Compare the host theme’s groups and ask before changing them; they affect every page. In the Theme Editor, add **Blush look**, **Header 01** and **Footer 02** to the approved groups. Keep **Blush look** first. Do not copy these references over existing groups blindly.
4. Theme Editor: pick the main menu in Header 01 and the menus in Footer 02's columns; pick products in Wishlist 01's items and
   Trust badges 05's products, collections or products in Shoppable image 06's looks, and a collection in Recommendations 07.
   Left blank, they show placeholders and the design-system demo copy. The page palette (accents [2]) is set in the Blush look section.

## The Blush look section

The sections are theme-neutral: every colour, font, corner, border width and heading/button case reads a namespaced DS
token (`--blko-color-*`, `--blko-font-*`, `--blko-radius-*`, `--blko-theme-*`, `--blko-heading-transform`) with the DS
default look as fallback, so they never clash with the host theme's own variables. `blko-theme-blush` sets those
tokens on `:root` from `themes/blush.css` and loads the Blush fonts (Poppins). Remove it and the sections
fall back to the DS default look; swap it for another `blko-theme-<theme>` section and they take that theme's look.

## Paste this into your coding agent

```text
Install the page "Wishlist 01 - Blush wishlist" from https://github.com/digent-uiux/demo/tree/main/pages/blush/wishlist-01 into my Shopify theme by following its README. Ask which store/theme, which Shopify page to use, and whether the header/footer should change; wait for my OK. Copy this folder’s sections, snippets and assets, merge both locale files into locales/en.default.json, and install templates/page.wishlist-01.json. Use groups/*.json as references for the existing header/footer groups, keeping blko-theme-blush first; never overwrite shared groups without approval. Do not install templates/index.wishlist-01.json (local render fixture only). Run `shopify theme check`, explain template assignment and product/menu selection, and do not publish.
```

## QA (29/10)

- Each section: `check-all.sh` PASS (theme check 0 errors in skel and Dawn; parity ≤ 2% vs the DS embed).
- Page: `check-all.sh` PASS on the bundle. Page parity vs `/embed/page/wishlist-01/` (theme section skipped), bare and in Dawn: 1440 ≤ 0.2%, 390 ≤ 0.56% per section.

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-blush-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-blush-motion.css
- `assets/blko-blush-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-blush-motion.js
- `assets/blko-coupon-07.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-coupon-07.css
- `assets/blko-coupon-07.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-coupon-07.js
- `assets/blko-font-poppins-4cd3c7.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-font-poppins-4cd3c7.woff2 — binary font; download and upload
- `assets/blko-font-poppins-e1fdbc.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-font-poppins-e1fdbc.woff2 — binary font; download and upload
- `assets/blko-font-poppins-f8670f.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-font-poppins-f8670f.woff2 — binary font; download and upload
- `assets/blko-footer-02.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-footer-02.css
- `assets/blko-header-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-header-01.css
- `assets/blko-header-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-header-01.js
- `assets/blko-recommendations-07.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-recommendations-07.css
- `assets/blko-recommendations-07.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-recommendations-07.js
- `assets/blko-shoppable-image-06.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-shoppable-image-06.css
- `assets/blko-trust-badges-05.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-trust-badges-05.css
- `assets/blko-trust-badges-05.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-trust-badges-05.js
- `assets/blko-ui-anton.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-anton.woff2 — binary font; download and upload
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-core.css
- `assets/blko-ui-instrument-serif-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-instrument-serif-italic.woff2 — binary font; download and upload
- `assets/blko-ui-instrument-serif.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-instrument-serif.woff2 — binary font; download and upload
- `assets/blko-ui-plus-jakarta-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-ui-plus-jakarta-sans.woff2 — binary font; download and upload
- `assets/blko-wishlist-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-wishlist-01.css
- `assets/blko-wishlist-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/assets/blko-wishlist-01.js
- `groups/footer-group.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/groups/footer-group.json — group reference; compare and obtain approval before applying
- `groups/header-group.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/groups/header-group.json — group reference; compare and obtain approval before applying
- `locales/en.default.blko-commerce.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/locales/en.default.blko-commerce.json
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/locales/en.default.blko.json
- `sections/blko-coupon-07.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-coupon-07.liquid
- `sections/blko-footer-02.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-footer-02.liquid
- `sections/blko-header-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-header-01.liquid
- `sections/blko-recommendations-07.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-recommendations-07.liquid
- `sections/blko-shoppable-image-06.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-shoppable-image-06.liquid
- `sections/blko-theme-blush.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-theme-blush.liquid
- `sections/blko-trust-badges-05.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-trust-badges-05.liquid
- `sections/blko-wishlist-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/sections/blko-wishlist-01.liquid
- `snippets/blko-coupon-07-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-coupon-07-icon.liquid
- `snippets/blko-footer-02-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-footer-02-icon.liquid
- `snippets/blko-header-01-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-header-01-icon.liquid
- `snippets/blko-recommendations-07-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-recommendations-07-card.liquid
- `snippets/blko-recommendations-07-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-recommendations-07-icon.liquid
- `snippets/blko-shoppable-image-06-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-shoppable-image-06-icon.liquid
- `snippets/blko-ui-arrow-link.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-arrow-link.liquid
- `snippets/blko-ui-badge.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-badge.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-button.liquid
- `snippets/blko-ui-eyebrow.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-eyebrow.liquid
- `snippets/blko-ui-fonts.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-fonts.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-input.liquid
- `snippets/blko-ui-media.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-media.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-money.liquid
- `snippets/blko-ui-number.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-number.liquid
- `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-option.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-price.liquid
- `snippets/blko-ui-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-rating.liquid
- `snippets/blko-ui-section-heading.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-section-heading.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-section.liquid
- `snippets/blko-ui-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-stars.liquid
- `snippets/blko-ui-swatch.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-swatch.liquid
- `snippets/blko-ui-tabs.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-ui-tabs.liquid
- `snippets/blko-wishlist-01-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/snippets/blko-wishlist-01-icon.liquid
- `templates/index.wishlist-01.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/templates/index.wishlist-01.json — local render fixture; do not install
- `templates/page.wishlist-01.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/pages/blush/wishlist-01/templates/page.wishlist-01.json
