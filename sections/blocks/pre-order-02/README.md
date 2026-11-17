# Pre-order 02 - Batch timeline, three dated stops

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `pre-order-02` (look: the Kiln preset,
as on the website demo). It runs in any theme: drop the files in, then add **Pre-order 02** in the Theme Editor.

## Files

- `sections/blko-pre-order-02.liquid`
- `assets/blko-pre-order-02.css`
- `assets/blko-pre-order-02.js`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-money.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-dm-serif-display.woff2`
- `assets/blko-f-dm-serif-display-italic.woff2`
- `assets/blko-f-alegreya-sans-400.woff2`
- `assets/blko-f-alegreya-sans-500.woff2`
- `assets/blko-f-alegreya-sans-700.woff2`
- `snippets/blko-fonts-kiln.liquid`
- `assets/blko-kiln-motion.css`
- `assets/blko-kiln-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Pre-order 02 - Batch timeline, three dated stops" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/pre-order-02 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Pre-order 02**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/pre-order-02. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (DM Serif Display + Alegreya Sans, OFL, latin subset), corners and type style: the Kiln preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading` | text | Heading | Batch 4, |
| `heading_light` | text | Heading, light words | thrown to order |
| `text` | textarea | Text | Our speckled stoneware is made in small batch… |
| `product` | product | Product |  |
| `button_label` | text | Button | Reserve a set |
| `sold_out_label` | text | Sold-out button | Batch full |
| `close_text` | text | Close line | Batch 4 closes [date], |
| `close_date` | text | Close date | 30 Nov |
| `date_format` | text | Date format for the metafield | %-d %b |
| `left_text` | text | Sets left | [left] of [total] sets left |
| `batch_size` | range | Batch size | 60 |
| `stops_label` | text | Timeline name for screen readers | From order to your door |
| `label` | text | Section name for screen readers | Join the next batch |
| `link_label` | text | Button | Shop the batch |
| `link_url` | url | Button link | /collections/all |
| `preview_title` | text | Product | Speckled tumbler, set of 4 |
| `preview_price` | number | Price | 96 |
| `preview_left` | number | Sets left | 22 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `@app` (app blocks)

(none)

### Block `stop` (Stop)

| id | type | label | default |
|---|---|---|---|
| `date` | text | Date | Now to 30 Nov |
| `title` | text | Title | You order |
| `text` | text | Text | Reserve a set. We throw only as many as are o… |
| `image` | image_picker | Photo |  |
| `image_alt` | text | Photo alt text | A speckled stoneware tumbler on an oak table |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-alegreya-sans-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-f-alegreya-sans-400.woff2 — binary font; download and upload
- `assets/blko-f-alegreya-sans-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-f-alegreya-sans-500.woff2 — binary font; download and upload
- `assets/blko-f-alegreya-sans-700.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-f-alegreya-sans-700.woff2 — binary font; download and upload
- `assets/blko-f-dm-serif-display-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-f-dm-serif-display-italic.woff2 — binary font; download and upload
- `assets/blko-f-dm-serif-display.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-f-dm-serif-display.woff2 — binary font; download and upload
- `assets/blko-kiln-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-kiln-motion.css
- `assets/blko-kiln-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-kiln-motion.js
- `assets/blko-pre-order-02.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-pre-order-02.css
- `assets/blko-pre-order-02.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-pre-order-02.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/locales/en.default.blko.json
- `sections/blko-pre-order-02.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/sections/blko-pre-order-02.liquid
- `snippets/blko-fonts-kiln.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/snippets/blko-fonts-kiln.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/snippets/blko-ui-money.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/snippets/blko-ui-price.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/pre-order-02/snippets/blko-ui-section.liquid
