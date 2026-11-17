# Installments 02 - Pay in four, three steps and a dated split

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `installments-02` (look: the Rivet preset,
as on the website demo). It runs in any theme: drop the files in, then add **Installments 02** in the Theme Editor.

## Files

- `sections/blko-installments-02.liquid`
- `assets/blko-installments-02.css`
- `assets/blko-installments-02.js`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-anton.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `snippets/blko-fonts-rivet.liquid`
- `assets/blko-rivet-motion.css`
- `assets/blko-rivet-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Installments 02 - Pay in four, three steps and a dated split" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/installments-02 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Installments 02**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/installments-02. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Anton + IBM Plex Sans, OFL, latin subset), corners and type style: the Rivet preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading` | text | Heading | Wear it now, |
| `heading_light` | text | Heading, light line | pay in four. |
| `product` | product | Product |  |
| `button_label` | text | Button | Add to cart |
| `sold_out_label` | text | Sold-out button | Sold out |
| `image` | image_picker | Photo |  |
| `payments` | range | Payments | 4 |
| `interval` | range | Days between payments | 14 |
| `split_text` | text | Split line | [n] payments of |
| `split_note` | text | After the amount | every two weeks, 0% interest |
| `today_label` | text | First payment | Today |
| `date_format` | text | Date format | %b %-d |
| `terms` | text | Terms | Pay in 4 is offered at checkout on orders fro… |
| `label` | text | Section name for screen readers | Pay in four |
| `link_label` | text | Button | Shop the drop |
| `link_url` | url | Button link | /collections/all |
| `preview_title` | text | Title | Heavyweight hoodie, rust |
| `preview_price` | number | Price | 150 |
| `size_label` | text | Size name for screen readers | Size |
| `preview_sizes` | text | Sizes | S, M, L, XL |
| `preview_size` | text | Picked size | L |
| `preview_dates` | text | Later payment dates | Dec 1, Dec 15, Dec 29 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `@app` (app blocks)

(none)

### Block `step` (Step)

| id | type | label | default |
|---|---|---|---|
| `title` | text | Title | Add it to your cart |
| `text` | text | Text | Pick your size and check out as usual. |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-anton.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-f-anton.woff2 — binary font; download and upload
- `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-f-ibm-plex-sans.woff2 — binary font; download and upload
- `assets/blko-installments-02.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-installments-02.css
- `assets/blko-installments-02.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-installments-02.js
- `assets/blko-rivet-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-rivet-motion.css
- `assets/blko-rivet-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-rivet-motion.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/locales/en.default.blko.json
- `sections/blko-installments-02.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/sections/blko-installments-02.liquid
- `snippets/blko-fonts-rivet.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/snippets/blko-fonts-rivet.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/snippets/blko-ui-option.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/installments-02/snippets/blko-ui-section.liquid
