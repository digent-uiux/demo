# Care guide 03 - Material accordion

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `care-guide-03` (look: the Oak preset,
as on the website demo). It runs in any theme: drop the files in, then add **Care 03 - Materials** in the Theme Editor.

## Files

- `sections/blko-care-guide-03.liquid`
- `assets/blko-care-guide-03.css`
- `assets/blko-care-guide-03.js`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-money.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-schibsted-grotesk.woff2`
- `snippets/blko-fonts-oak.liquid`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Care guide 03 - Material accordion" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/care-guide-03 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Care 03 - Materials**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/care-guide-03. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Schibsted Grotesk, OFL, latin subset), corners and type style: the Oak preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading` | text | Heading | Looking after what you sit on |
| `lead` | textarea | Intro | Every piece is a mix of materials, and each o… |
| `image` | image_picker | Photo |  |
| `image_alt` | text | Photo alt text |  |
| `product` | product | Care kit product |  |
| `kit_title` | text | Preview title | Oak and fabric care kit |
| `kit_detail` | text | What is in it | Hardwax oil, wool balm, two cloths |
| `price` | number | Preview price | 38 |
| `button_label` | text | Button label | Add the care kit |
| `link` | url | Button link |  |
| `do_label` | text | Do | Do |
| `dont_label` | text | Don't | Don't |
| `freq_1` | text | First column | Weekly |
| `freq_2` | text | Second column | Monthly |
| `freq_3` | text | Third column | Seasonal |
| `freq_4` | text | Fourth column | Yearly |
| `none_label` | text | Empty task | Nothing needed |
| `freq_label` | text | Frequency list name for screen readers | How often to care for [material] |
| `label` | text | Section name for screen readers | Care by material |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `material` (Material)

| id | type | label | default |
|---|---|---|---|
| `name` | text | Material | Solid oak |
| `line` | text | Used for | Tables, chairs and frames |
| `image` | image_picker | Photo |  |
| `image_alt` | text | Photo alt text |  |
| `do` | textarea | Do | Wipe spills at once with a damp, well-wrung c… |
| `dont` | textarea | Don't | Spray polish with silicone: it builds a film … |
| `task_1` | text | First column task | Dust with a soft cloth |
| `task_2` | text | Second column task | Damp wipe |
| `task_3` | text | Third column task | Re-oil worn edges |
| `task_4` | text | Fourth column task | Full re-oil and buff |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-care-guide-03.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-care-guide-03.css
- `assets/blko-care-guide-03.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-care-guide-03.js
- `assets/blko-f-schibsted-grotesk.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-f-schibsted-grotesk.woff2 — binary font; download and upload
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/locales/en.default.blko.json
- `sections/blko-care-guide-03.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/sections/blko-care-guide-03.liquid
- `snippets/blko-fonts-oak.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/snippets/blko-fonts-oak.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/snippets/blko-ui-money.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/snippets/blko-ui-price.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/care-guide-03/snippets/blko-ui-section.liquid
