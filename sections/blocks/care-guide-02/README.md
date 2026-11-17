# Care guide 02 - Softness slider, checklist

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `care-guide-02` (look: the Linen preset,
as on the website demo). It runs in any theme: drop the files in, then add **Care 02 - Wash slider** in the Theme Editor.

## Files

- `sections/blko-care-guide-02.liquid`
- `assets/blko-care-guide-02.css`
- `assets/blko-care-guide-02.js`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-money.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
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
Install the standalone section "Care guide 02 - Softness slider, checklist" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/care-guide-02 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Care 02 - Wash slider**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/care-guide-02. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (EB Garamond + Albert Sans, OFL, latin subset), corners and type style: the Linen preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading` | text | Heading | Make it last, and it only gets softer |
| `lead` | textarea | Intro | Linen is the one cloth that improves with use… |
| `image` | image_picker | Photo, new |  |
| `image_alt` | text | Alt text, new |  |
| `image_washed` | image_picker | Photo, washed |  |
| `image_washed_alt` | text | Alt text, washed |  |
| `slider_label` | text | Slider label | Slide the washes |
| `max_washes` | range | Most washes on the slider | 40 |
| `scale_start` | text | Scale start | New |
| `scale_end` | text | Scale end | [max] washes |
| `after_one` | text | Photo tag, one wash | After 1 wash |
| `after_many` | text | Photo tag, other counts | After [count] washes |
| `softness` | text | Softness value | Softness [percent]% |
| `stage_1` | text | Stage, under 5 washes | Crisp, straight from the loom |
| `stage_2` | text | Stage, 5 to 14 washes | Relaxed, the stiffness gone |
| `stage_3` | text | Stage, 15 to 29 washes | Soft, drapes like cotton |
| `stage_4` | text | Stage, 30 washes and more | Heirloom soft, almost suede |
| `count_text` | text | Count | [done] of [total] habits done |
| `product` | product | Product |  |
| `product_title` | text | Preview title | Stand-collar linen shirt, undyed |
| `price` | number | Preview price | 118 |
| `button_link` | url | Button link |  |
| `button_label` | text | Button label | Shop the linen shirt |
| `label` | text | Section name for screen readers | Make it last |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `habit` (Habit)

| id | type | label | default |
|---|---|---|---|
| `title` | text | Habit | Wash at 30–40 °C with a mild liquid |
| `detail` | text | Why | Powder and bleach scratch the flax fibre. |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-care-guide-02.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-care-guide-02.css
- `assets/blko-care-guide-02.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-care-guide-02.js
- `assets/blko-f-albert-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-f-albert-sans.woff2 — binary font; download and upload
- `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-f-eb-garamond-italic.woff2 — binary font; download and upload
- `assets/blko-f-eb-garamond.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-f-eb-garamond.woff2 — binary font; download and upload
- `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-linen-motion.css
- `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-linen-motion.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/locales/en.default.blko.json
- `sections/blko-care-guide-02.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/sections/blko-care-guide-02.liquid
- `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/snippets/blko-fonts-linen.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/snippets/blko-ui-money.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/snippets/blko-ui-price.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-02/snippets/blko-ui-section.liquid
