# Pre-order 01 - Coat drop with ship date and production bar

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `pre-order-01` (look: the Seam preset,
as on the website demo). It runs in any theme: drop the files in, then add **Pre-order 01** in the Theme Editor.

## Files

- `sections/blko-pre-order-01.liquid`
- `assets/blko-pre-order-01.css`
- `assets/blko-pre-order-01.js`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-swatch.liquid`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-money.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-gilda-display.woff2`
- `assets/blko-f-manrope.woff2`
- `snippets/blko-fonts-seam.liquid`
- `assets/blko-seam-motion.css`
- `assets/blko-seam-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Pre-order 01 - Coat drop with ship date and production bar" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/pre-order-01 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Pre-order 01**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/pre-order-01. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Gilda Display + Manrope, OFL, latin subset), corners and type style: the Seam preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `product` | product | Product |  |
| `kicker` | text | Line above the title | Pre-order |
| `subtitle` | text | Subtitle | in brick wool |
| `text` | textarea | Text | Double-faced Italian wool, unlined, cut long … |
| `button_label` | text | Pre-order button | Pre-order now |
| `instock_label` | text | In-stock button | Add to bag |
| `sold_out_label` | text | Sold-out button | Sold out |
| `unavailable_label` | text | Button when the combination doesn't exist | Unavailable |
| `guide_label` | text | Size guide link | Size guide |
| `guide_url` | url | Size guide page |  |
| `ship_text` | text | Ship line | Ships from [date] |
| `ship_date` | text | Ship date | 12 Dec |
| `date_format` | text | Date format for the metafield | %-d %b |
| `steps_label` | text | Production steps name for screen readers | Production |
| `step_1` | text | Step 1 | Cut |
| `step_2` | text | Step 2 | Sewn |
| `step_3` | text | Step 3 | Finishing |
| `steps_done` | range | Steps done | 2 |
| `current_pct` | range | Current step, % done | 60 |
| `progress_text` | text | Progress line | [done] of 3 production steps done |
| `in_progress` | text | Suffix on the current step | , in progress |
| `terms` | text | Terms | Charged today, sent the day it is finished. F… |
| `image` | image_picker | Photo |  |
| `detail_image` | image_picker | Close-up photo |  |
| `detail_alt` | text | Close-up crop alt text | Close-up of the coat's tie belt |
| `label` | text | Section name for screen readers | Pre-order the wrap coat |
| `link_label` | text | Button | Shop the collection |
| `link_url` | url | Button link | /collections/all |
| `preview_title` | text | Title | Belted wrap coat |
| `preview_price` | number | Price | 420 |
| `colour_label` | text | Colour label | Colour |
| `preview_colours` | text | Colours | Brick:#9c3b25, Oat:#d9cbb4, Ink:#1f2328 |
| `preview_colour` | text | Picked colour | Brick |
| `size_label` | text | Size label | Size |
| `preview_sizes` | text | Sizes | XS, S, M, L, XL |
| `preview_size` | text | Picked size | M |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `@app` (app blocks)

(none)

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-gilda-display.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-f-gilda-display.woff2 — binary font; download and upload
- `assets/blko-f-manrope.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-f-manrope.woff2 — binary font; download and upload
- `assets/blko-pre-order-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-pre-order-01.css
- `assets/blko-pre-order-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-pre-order-01.js
- `assets/blko-seam-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-seam-motion.css
- `assets/blko-seam-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-seam-motion.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/locales/en.default.blko.json
- `sections/blko-pre-order-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/sections/blko-pre-order-01.liquid
- `snippets/blko-fonts-seam.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-fonts-seam.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-money.liquid
- `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-option.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-price.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-section.liquid
- `snippets/blko-ui-swatch.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-01/snippets/blko-ui-swatch.liquid
