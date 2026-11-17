# Care guide 01 - Coat callouts, care steps

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `care-guide-01` (look: the Seam preset,
as on the website demo). It runs in any theme: drop the files in, then add **Care 01 - Coat callouts** in the Theme Editor.

## Files

- `sections/blko-care-guide-01.liquid`
- `assets/blko-care-guide-01.css`
- `assets/blko-care-guide-01.js`
- `snippets/blko-ui-price.liquid`
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
Install the standalone section "Care guide 01 - Coat callouts, care steps" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/care-guide-01 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Care 01 - Coat callouts**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/care-guide-01. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Gilda Display + Manrope, OFL, latin subset), corners and type style: the Seam preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading` | text | Heading | Four habits keep it for a decade |
| `lead` | textarea | Intro | Wool cleans itself in the air more than in wa… |
| `note` | textarea | Storage note | Moths love worn wool. Store it clean, in a co… |
| `image` | image_picker | Garment photo |  |
| `image_alt` | text | Photo alt text |  |
| `product` | product | Product |  |
| `product_title` | text | Preview title | Belted wrap coat, camel |
| `price` | number | Preview price | 640 |
| `button_link` | url | Button link |  |
| `button_label` | text | Button label | Shop the coat |
| `label` | text | Section name for screen readers | Care and materials |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `spec` (Fabric fact)

| id | type | label | default |
|---|---|---|---|
| `key` | text | Label | Shell |
| `value` | text | Value | 90% virgin wool, 10% cashmere |
| `x` | range | Pin across (%) | 50 |
| `y` | range | Pin down (%) | 50 |

### Block `step` (Care step)

| id | type | label | default |
|---|---|---|---|
| `symbol` | select | Care symbol | wash |
| `mark` | text | Symbol mark | 30 |
| `title` | text | Title | Hand wash, cool |
| `body` | textarea | Text | Only when it truly needs it. Thirty degrees, … |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-care-guide-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-care-guide-01.css
- `assets/blko-care-guide-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-care-guide-01.js
- `assets/blko-f-gilda-display.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-f-gilda-display.woff2 — binary font; download and upload
- `assets/blko-f-manrope.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-f-manrope.woff2 — binary font; download and upload
- `assets/blko-seam-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-seam-motion.css
- `assets/blko-seam-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-seam-motion.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/locales/en.default.blko.json
- `sections/blko-care-guide-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/sections/blko-care-guide-01.liquid
- `snippets/blko-fonts-seam.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/snippets/blko-fonts-seam.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/snippets/blko-ui-money.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/snippets/blko-ui-price.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-01/snippets/blko-ui-section.liquid
