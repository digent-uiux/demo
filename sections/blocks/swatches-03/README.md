# Swatches 03 - Hanging cloth bunch with a fitting button

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `swatches-03` (look: the Seam preset,
as on the website demo). It runs in any theme: drop the files in, then add **Swatches 03 - Cloth bunch** in the Theme Editor.

## Files

- `sections/blko-swatches-03.liquid`
- `assets/blko-swatches-03.css`
- `assets/blko-swatches-03.js`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-gilda-display.woff2`
- `assets/blko-f-manrope.woff2`
- `snippets/blko-fonts-seam.liquid`
- `assets/blko-seam-motion.css`
- `assets/blko-seam-motion.js`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Swatches 03 - Hanging cloth bunch with a fitting button" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/swatches-03 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Swatches 03 - Cloth bunch**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/swatches-03. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Gilda Display + Manrope, OFL, latin subset), corners and type style: the Seam preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `label` | text | Section name for screen readers | Cloth bunch |
| `heading` | inline_richtext | Heading | Choose the cloth, then the cut |
| `text` | text | Text | [count] cloths in this season's bunch. Tap a … |
| `fan_label` | text | Cloth group name for screen readers | Cloths |
| `selected` | range | Cloth shown first | 2 |
| `spread` | range | Fan spread | 72 |
| `image` | image_picker | Photo |  |
| `comp_label` | text | Composition label | Composition |
| `weight_label` | text | Weight label | Weight |
| `weight_unit` | text | Weight unit | g/m² |
| `weight_min` | number | Lightest weight on the scale | 180 |
| `weight_max` | number | Heaviest weight on the scale | 420 |
| `light_label` | text | Light end | Light |
| `heavy_label` | text | Heavy end | Heavy |
| `season_label` | text | Season label | Season |
| `link_label` | text | Button | Book a fitting |
| `link` | url | Fitting page |  |
| `cloth_param` | text | Cloth parameter on the fitting link | cloth |
| `note` | text | Line under the button | Free, about 45 minutes. We bring [name] to th… |
| `surface` | select | Background | dark |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `cloth` (Cloth)

| id | type | label | default |
|---|---|---|---|
| `name` | text | Name | Navy twill |
| `color` | color | Colour | #243049 |
| `weave` | select | Weave drawing | twill |
| `comp` | text | Composition | 100% fine wool |
| `gsm` | number | Weight (g/m²) | 260 |
| `seasons` | text | Seasons (comma separated) | All year |
| `feel` | textarea | How it feels | Smooth face, crisp hand. The four-season suit… |
| `product` | product | Product |  |

### Block `@app` (app blocks)

(none)

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-gilda-display.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-f-gilda-display.woff2 — binary font; download and upload
- `assets/blko-f-manrope.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-f-manrope.woff2 — binary font; download and upload
- `assets/blko-seam-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-seam-motion.css
- `assets/blko-seam-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-seam-motion.js
- `assets/blko-swatches-03.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-swatches-03.css
- `assets/blko-swatches-03.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-swatches-03.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/locales/en.default.blko.json
- `sections/blko-swatches-03.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/sections/blko-swatches-03.liquid
- `snippets/blko-fonts-seam.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/snippets/blko-fonts-seam.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/swatches-03/snippets/blko-ui-section.liquid
