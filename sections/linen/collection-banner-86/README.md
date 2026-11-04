# Collection, cloth book

Collection, cloth book section from the Linen theme.

- Category: collection-banner
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/collection-banner--collection-banner-86.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection, cloth book" (id `collection-banner-86`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/collection-banner--collection-banner-86.html; Shopify bundle: sections/linen/collection-banner-86/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-collection-banner-86.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/sections/blko-collection-banner-86.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/snippets/blko-fonts-linen.liquid
   - `snippets/blko-linen-mixed.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/snippets/blko-linen-mixed.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/snippets/blko-ui-section.liquid
   - `assets/blko-collection-banner-86.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-collection-banner-86.css
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-linen-motion.css
   - `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-linen-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-86/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-collection-banner-86.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-linen-mixed.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-collection-banner-86.css`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-linen-motion.css`
- `assets/blko-linen-motion.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Index label | The cloth room / 01 |
| `footnote` | text | Footnote | Natural cloth. An everyday wardrobe. |
| `image` | image_picker | Photo |  |
| `home_label` | text | Home crumb | Home |
| `heading` | text | Heading | All clothing |
| `text` | text | Text | Linen, cotton and wool, cut to be worn for years. |
| `show_count` | checkbox | Show product count | true |
| `demo_count` | range | Demo count | 3 |
| `tones_label` | text | Swatch list label | Cloth tones |
| `tones_caption` | text | Caption | Chalk · Oat · Sand · Sky |
| `tone_1` | color | Tone 1 | #f2eee6 |
| `tone_name_1` | text | Tone 1 name | Chalk |
| `tone_2` | color | Tone 2 | #d8c9ad |
| `tone_name_2` | text | Tone 2 name | Oat |
| `tone_3` | color | Tone 3 | #b49c78 |
| `tone_name_3` | text | Tone 3 name | Sand |
| `tone_4` | color | Tone 4 | #8ea6c1 |
| `tone_name_4` | text | Tone 4 name | Sky |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-collection-banner-86.css`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-linen-motion.css`, `blko-linen-motion.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-linen.liquid`, `blko-linen-mixed.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.collection_banner_86.breadcrumb`, `blko.collection_banner_86.count_html.one`, `blko.collection_banner_86.count_html.other`, `blko.collection_banner_86.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
