# Model info 02 - Three bodies, one size each

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `model-info-02` (look: the Rivet preset,
as on the website demo). It runs in any theme: drop the files in, then add **Model info 02 - Lineup** in the Theme Editor.

## Files

- `sections/blko-model-info-02.liquid`
- `assets/blko-model-info-02.css`
- `assets/blko-model-info-02.js`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-money.liquid`
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
Install the standalone section "Model info 02 - Three bodies, one size each" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/model-info-02 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Model info 02 - Lineup**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/model-info-02. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Anton + IBM Plex Sans, OFL, latin subset), corners and type style: the Rivet preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `product` | product | Product |  |
| `heading` | text | Heading | How it fits on three bodies |
| `lead` | textarea | Lead | Heavyweight 480 gsm fleece, boxy cut, dropped… |
| `chart_label` | text | Size chart link label | Size chart |
| `chart_url` | url | Size chart link |  |
| `default_pick` | select | Chosen at first | 2 |
| `wear_text` | text | Size line | Usually [usual], wearing [size] in [colour] |
| `choose_label` | text | Choose button | Choose [size] |
| `chosen_label` | text | Chosen button | Size [size] chosen |
| `pick_text` | text | Chosen line | [colour], size [size] |
| `add_label` | text | Add button | Add to cart |
| `added_label` | text | After adding | Added: [colour], [size] |
| `sold_label` | text | Sold-out button | Sold out |
| `add_error` | text | Add error | We couldn't add that size. Please try again. |
| `preview_price` | number | Preview price | 98 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 96 |
| `padding_bottom` | range | Bottom padding | 96 |

### Block `@app` (app blocks)

(none)

### Block `model` (Model)

| id | type | label | default |
|---|---|---|---|
| `image` | image_picker | Photo |  |
| `alt` | text | Photo description | A model in the hoodie |
| `name` | text | Name | Sami |
| `stats` | text | Height and weight | 5'10", 165 lb |
| `usual` | text | Usual size | M |
| `size` | text | Size worn | M |
| `colour` | text | Colour worn | black |
| `fit` | textarea | Fit note | True to size: boxy through the body, the shou… |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-anton.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-f-anton.woff2 — binary font; download and upload
- `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-f-ibm-plex-sans.woff2 — binary font; download and upload
- `assets/blko-model-info-02.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-model-info-02.css
- `assets/blko-model-info-02.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-model-info-02.js
- `assets/blko-rivet-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-rivet-motion.css
- `assets/blko-rivet-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-rivet-motion.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/locales/en.default.blko.json
- `sections/blko-model-info-02.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/sections/blko-model-info-02.liquid
- `snippets/blko-fonts-rivet.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/snippets/blko-fonts-rivet.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/snippets/blko-ui-money.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-02/snippets/blko-ui-price.liquid
