# Swatches 04 - Shade wall with a lip try-on

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `swatches-04` (look: the Blush preset,
as on the website demo). It runs in any theme: drop the files in, then add **Swatches 04 - Shade wall** in the Theme Editor.

## Files

- `sections/blko-swatches-04.liquid`
- `assets/blko-swatches-04.css`
- `assets/blko-swatches-04.js`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-poppins-400.woff2`
- `assets/blko-f-poppins-500.woff2`
- `assets/blko-f-poppins-600.woff2`
- `snippets/blko-fonts-blush.liquid`
- `assets/blko-blush-motion.css`
- `assets/blko-blush-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Swatches 04 - Shade wall with a lip try-on" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/swatches-04 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Swatches 04 - Shade wall**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/swatches-04. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Poppins, OFL, latin subset), corners and type style: the Blush preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `label` | text | Section name for screen readers | Lip shades |
| `product` | product | Product with the shades |  |
| `link` | url | Button link without a product |  |
| `heading` | inline_richtext | Heading | Find your shade by undertone |
| `text` | text | Text | [count] lip colours. Pick one to see it on. |
| `selected` | range | Shade shown first | 3 |
| `meta_text` | text | Shade details | [code], [tone] undertone, [finish] finish |
| `filter_label` | text | Filter name for screen readers | Filter by undertone |
| `filter_all` | text | All | All |
| `filter_cool` | text | Cool | Cool |
| `filter_warm` | text | Warm | Warm |
| `filter_neutral` | text | Neutral | Neutral |
| `image` | image_picker | Main photo |  |
| `demo_alt` | text | Demo photo description | Close-up of a model having lip colour applied… |
| `skins_label` | text | Skin tones line | On three skin tones |
| `skin_alt` | text | Demo skin-tone photo description | Close-up of lips on [tone] skin |
| `skin_1_name` | text | Skin tone 1 | Fair |
| `skin_1_image` | image_picker | Skin tone 1 photo |  |
| `skin_2_name` | text | Skin tone 2 | Medium |
| `skin_2_image` | image_picker | Skin tone 2 photo |  |
| `skin_3_name` | text | Skin tone 3 | Deep |
| `skin_3_image` | image_picker | Skin tone 3 photo |  |
| `add_label` | text | Add to bag | Add [name] to bag |
| `sold_label` | text | Sold out | [name] is sold out |
| `added_label` | text | Added message | [name] is in your bag |
| `error_label` | text | Error message | Couldn't add it. Please try again. |
| `surface` | select | Background | soft-2 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `shade` (Shade)

| id | type | label | default |
|---|---|---|---|
| `name` | text | Shade name | New shade |
| `variant_name` | text | Variant name |  |
| `code` | text | Code | L-13 |
| `color` | color | Colour | #b4553a |
| `tone` | select | Undertone | neutral |
| `finish` | text | Finish | Satin |

### Block `@app` (app blocks)

(none)

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-blush-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-blush-motion.css
- `assets/blko-blush-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-blush-motion.js
- `assets/blko-f-poppins-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-f-poppins-400.woff2 — binary font; download and upload
- `assets/blko-f-poppins-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-f-poppins-500.woff2 — binary font; download and upload
- `assets/blko-f-poppins-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-f-poppins-600.woff2 — binary font; download and upload
- `assets/blko-swatches-04.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-swatches-04.css
- `assets/blko-swatches-04.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-swatches-04.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/locales/en.default.blko.json
- `sections/blko-swatches-04.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/sections/blko-swatches-04.liquid
- `snippets/blko-fonts-blush.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/snippets/blko-fonts-blush.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-04/snippets/blko-ui-section.liquid
