# Model info 01 - Height ruler and measurements

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `model-info-01` (look: the Linen preset,
as on the website demo). It runs in any theme: drop the files in, then add **Model info 01 - Ruler** in the Theme Editor.

## Files

- `sections/blko-model-info-01.liquid`
- `assets/blko-model-info-01.css`
- `assets/blko-model-info-01.js`
- `snippets/blko-ui-button.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-eb-garamond.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-albert-sans.woff2`
- `snippets/blko-fonts-linen.liquid`
- `assets/blko-linen-motion.css`
- `assets/blko-linen-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Model info 01 - Height ruler and measurements" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/model-info-01 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Model info 01 - Ruler**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/model-info-01. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (EB Garamond + Albert Sans, OFL, latin subset), corners and type style: the Linen preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `product` | product | Product |  |
| `simple_name` | text | Model name with custom.model_height | Our model |
| `label` | text | Section name for screen readers | Model sizes |
| `product_line` | text | Product line | Long tiered dress in washed linen, $168 |
| `heading` | text | Heading | See it on someone your height |
| `lead` | textarea | Lead | Worn by two of us, each in the size she'd buy… |
| `pick_label` | text | Model picker name for screen readers | Choose a model |
| `row_text` | text | Model row | [height], wears [size] |
| `ruler_label` | text | Ruler title | Height |
| `ruler_low` | range | Ruler from (inches) | 58 |
| `ruler_high` | range | Ruler to (inches) | 74 |
| `label_height` | text | Height | Height |
| `height_format` | text | Height value | [height] ([cm] cm) |
| `label_bust` | text | Bust | Bust |
| `label_waist` | text | Waist | Waist |
| `label_hips` | text | Hips | Hips |
| `unit_format` | text | Measurement value | [n] in |
| `label_usual` | text | Usual size | Usual size |
| `label_wearing` | text | Wearing | Wearing |
| `fit_prefix` | text | Before the fit note | On [name]: |
| `button_label` | text | Button | Shop size [size] |
| `guide_label` | text | Size guide link label | Size guide |
| `guide_url` | url | Size guide link |  |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 96 |
| `padding_bottom` | range | Bottom padding | 96 |

### Block `model` (Model)

| id | type | label | default |
|---|---|---|---|
| `image` | image_picker | Photo |  |
| `alt` | text | Photo description | A model in the dress |
| `name` | text | Name | Mai |
| `height_in` | range | Height (inches) | 62 |
| `bust` | text | Bust (inches) | 31 |
| `waist` | text | Waist (inches) | 24 |
| `hips` | text | Hips (inches) | 34 |
| `usual` | text | Usual size | XS |
| `size` | text | Size worn | XS |
| `fit` | textarea | Fit note | The hem brushes her ankles. She ties the wais… |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-albert-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-f-albert-sans.woff2 — binary font; download and upload
- `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-f-eb-garamond-italic.woff2 — binary font; download and upload
- `assets/blko-f-eb-garamond.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-f-eb-garamond.woff2 — binary font; download and upload
- `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-linen-motion.css
- `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-linen-motion.js
- `assets/blko-model-info-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-model-info-01.css
- `assets/blko-model-info-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-model-info-01.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/locales/en.default.blko.json
- `sections/blko-model-info-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/sections/blko-model-info-01.liquid
- `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/snippets/blko-fonts-linen.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/model-info-01/snippets/blko-ui-icon.liquid
