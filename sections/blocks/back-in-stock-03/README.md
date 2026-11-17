# Back in stock 03 - Per-size notify bells

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `back-in-stock-03` (look: the Prism preset,
as on the website demo). It runs in any theme: drop the files in, then add **Notify 03 - Size bells** in the Theme Editor.

## Files

- `sections/blko-back-in-stock-03.liquid`
- `assets/blko-back-in-stock-03.css`
- `assets/blko-back-in-stock-03.js`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-input.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-unbounded.woff2`
- `assets/blko-f-work-sans.woff2`
- `snippets/blko-fonts-prism.liquid`
- `assets/blko-prism-motion.css`
- `assets/blko-prism-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Back in stock 03 - Per-size notify bells" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/back-in-stock-03 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Notify 03 - Size bells**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/back-in-stock-03. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Unbounded + Work Sans, OFL, latin subset), corners and type style: the Prism preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `product` | product | Product |  |
| `label` | text | Section name for screen readers | Product |
| `heading` | text | Heading | Your size, the day it's back |
| `lead` | textarea | Text under the heading | Every sold-out size has its own bell. Leave y… |
| `image` | image_picker | Photo |  |
| `chip` | text | Note on the photo | Hand-knit, batch of 60 |
| `subtitle` | text | Note after the price | Fog grey, oversized fit |
| `choose_label` | text | Table label | Choose a size |
| `sold_label` | text | Sold out | Sold out |
| `waiting_text` | text | Waiting count | [n] waiting |
| `low_stock` | range | Low-stock line at or under | 2 |
| `low_text` | text | Low-stock line | Only [n] left |
| `in_stock_label` | text | In stock | In stock |
| `add_label` | text | Add button | Add |
| `in_bag_label` | text | After adding | In bag |
| `add_error` | text | Add error | We couldn't add this size. Please try again. |
| `add_preview` | text | Add without a product | Choose a product in the theme editor to enabl… |
| `notify_label` | text | Bell button | Notify |
| `bell_aria` | text | Bell name for screen readers | Notify me when size [size] is back |
| `on_label` | text | Bell after signing up | On |
| `on_aria` | text | Signed-up bell for screen readers | Alert on for size [size] |
| `form_label` | text | Form question | Where should we send the size [size] alert? |
| `email_placeholder` | text | Email placeholder | you@example.com |
| `save_label` | text | Save button | Save |
| `email_error` | text | Email error | That email doesn't look right |
| `send_error` | text | Send error | We couldn't send that. Please try again. |
| `request_text` | text | Message the store receives | Back in stock request: [product], size [variant] |
| `foot_note` | textarea | Note under the table | One email per size, sent when it's back. We k… |
| `saved_note` | text | Note once signed up | Alerts go to [email]. Tap any other bell to a… |
| `preview_title` | text | Product name | Chunky Rib Cardigan |
| `preview_price` | number | Price | 210 |
| `open_size` | text | Size with its form open | M |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

### Block `@app` (app blocks)

(none)

### Block `size` (Preview size)

| id | type | label | default |
|---|---|---|---|
| `title` | text | Size | M |
| `note` | text | Measurement | Chest 94–100 cm |
| `stock` | number | In stock | 4 |
| `waiting` | number | People waiting | 0 |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-back-in-stock-03.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-back-in-stock-03.css
- `assets/blko-back-in-stock-03.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-back-in-stock-03.js
- `assets/blko-f-unbounded.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-f-unbounded.woff2 — binary font; download and upload
- `assets/blko-f-work-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-f-work-sans.woff2 — binary font; download and upload
- `assets/blko-prism-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-prism-motion.css
- `assets/blko-prism-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-prism-motion.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/locales/en.default.blko.json
- `sections/blko-back-in-stock-03.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/sections/blko-back-in-stock-03.liquid
- `snippets/blko-fonts-prism.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/snippets/blko-fonts-prism.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/snippets/blko-ui-input.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/back-in-stock-03/snippets/blko-ui-money.liquid
