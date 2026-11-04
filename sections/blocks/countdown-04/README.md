# Countdown 04 - Ticker band

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `countdown-04` (look: the Lather preset,
as on the website demo). It runs in any theme: drop the files in, then add **Countdown 04 - Ticker ban** in the Theme Editor.

## Files

- `sections/blko-countdown-04.liquid`
- `assets/blko-countdown-04.css`
- `assets/blko-countdown-04.js`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-product-card.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-badge.liquid`
- `snippets/blko-ui-rating.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-stars.liquid`
- `snippets/blko-ui-number.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-archivo-black.woff2`
- `assets/blko-f-figtree.woff2`
- `snippets/blko-fonts-lather.liquid`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Countdown 04 - Ticker band" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/countdown-04 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set its sale products. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Countdown 04 - Ticker ban**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/countdown-04. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Archivo Black + Figtree, OFL, latin subset), corners and type style: the Lather preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `label` | text | Label | 48-hour skincare sale |
| `heading` | text | Heading | Stock up before the clock runs out |
| `ticker_one` | text | Ticker One | 48-hour skincare sale |
| `ends` | text | Ends | Ends in |
| `ticker_three` | text | Ticker Three | Up to 30% off |
| `ticker_four` | text | Ticker Four | Free shipping over $50 |
| `timer_label` | text | Timer Label | Sale ends in about 47 hours |
| `hours` | text | Hours | Hrs |
| `minutes` | text | Minutes | Min |
| `seconds` | text | Seconds | Sec |
| `seconds_left` | number | Seconds Left | 169533 |
| `link` | url | Link |  |
| `link_label` | text | Link Label | Shop all skincare |
| `sale_label` | text | Sale Label | Sale |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `product` (Sale product)

| id | type | label | default |
|---|---|---|---|
| `label` | text | Label | Sale |
| `tone` | select | Badge color | sale |
| `product` | product | Product |  |
| `title` | text | Title | Vitamin C serum |
| `price` | number | Price | 28 |
| `compare` | number | Compare | 38 |
| `image` | image_picker | Image |  |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-countdown-04.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-countdown-04.css
- `assets/blko-countdown-04.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-countdown-04.js
- `assets/blko-f-archivo-black.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-f-archivo-black.woff2 — binary font; download and upload
- `assets/blko-f-figtree.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-f-figtree.woff2 — binary font; download and upload
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/assets/blko-ui-motion.js
- `full.log`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/full.log
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/locales/en.default.blko.json
- `quick.log`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/quick.log
- `sections/blko-countdown-04.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/sections/blko-countdown-04.liquid
- `snippets/blko-fonts-lather.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-fonts-lather.liquid
- `snippets/blko-ui-badge.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-badge.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-money.liquid
- `snippets/blko-ui-number.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-number.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-price.liquid
- `snippets/blko-ui-product-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-product-card.liquid
- `snippets/blko-ui-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-rating.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-section.liquid
- `snippets/blko-ui-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/countdown-04/snippets/blko-ui-stars.liquid
