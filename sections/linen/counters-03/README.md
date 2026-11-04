# Wash study

Flip digit countdown.

- Category: rich-text
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/rich-text--counters-03.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Wash study" (id `counters-03`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/rich-text--counters-03.html; Shopify bundle: sections/linen/counters-03/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-counters-03.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/sections/blko-counters-03.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/snippets/blko-fonts-linen.liquid
   - `snippets/blko-linen-mixed.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/snippets/blko-linen-mixed.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/snippets/blko-ui-section.liquid
   - `assets/blko-counters-03.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-counters-03.css
   - `assets/blko-counters-03.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-counters-03.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-linen-motion.css
   - `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-linen-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/counters-03/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Fonts: bundled EB Garamond + Albert Sans (OFL, latin subset), or any font from the Shopify library, or the theme's fonts.
- Colours, corners and type style: the Linen preset by default. **Read the theme's tokens** makes the section follow a Blocko
  theme's settings (`--color-bg`, `--color-text`, `--radius-card`, `--button-case`…); other themes keep the preset.
- Images: Shopify placeholders until you pick one. Pickers left blank show the design-system demo content.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-counters-03.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-linen-mixed.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-counters-03.css`
- `assets/blko-counters-03.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-linen-motion.css`
- `assets/blko-linen-motion.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | A study in wearing |
| `heading` | textarea | Heading | From crisp to yours. |
| `text` | textarea | Text | Natural cloth changes with you. Not a finish to preserve, but a story to add to. |
| `care_note` | text | Care note | Follow the care label on your own piece. |
| `unit` | text | Unit | Washes |
| `controls_label` | text | Controls label | Explore the wash study |
| `stage_label_1` | text | Stage label 1 | First wash |
| `stage_label_2` | text | Stage label 2 | Worn in |
| `stage_label_3` | text | Stage label 3 | Keep going |
| `stage_value_1` | text | Stage value 1 | 01 |
| `stage_value_2` | text | Stage value 2 | 10 |
| `stage_value_3` | text | Stage value 3 | 30 |
| `stage_note_1` | text | Stage note 1 | Wash before the first wear. A cool, gentle cycle lets the weave settle. |
| `stage_note_2` | text | Stage note 2 | The cloth relaxes with washing and wearing. Air between wears; wash only when needed. |
| `stage_note_3` | text | Stage note 3 | A loose stitch is a small repair, not the end of a shirt. Mend it and keep wearing it. |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-counters-03.css`, `blko-counters-03.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-linen-motion.css`, `blko-linen-motion.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-linen.liquid`, `blko-linen-mixed.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
