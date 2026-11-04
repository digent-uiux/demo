# Routine builder 01

Routine builder 01 section from the Balm 2 theme.

- Category: routine-builder
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/routine-builder--routine-builder-01.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Routine builder 01" (id `routine-builder-01`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/routine-builder--routine-builder-01.html; Shopify bundle: sections/balm-2/routine-builder-01/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-routine-builder-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/sections/blko-routine-builder-01.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-checkbox.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-checkbox.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-price.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/snippets/blko-ui-section.liquid
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-f-karla.woff2
   - `assets/blko-routine-builder-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-routine-builder-01.css
   - `assets/blko-routine-builder-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-routine-builder-01.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/routine-builder-01/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-routine-builder-01.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-checkbox.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-routine-builder-01.css`
- `assets/blko-routine-builder-01.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | The ritual, prescribed |
| `heading` | inline_richtext | Heading (italic = accent) | Build a ritual for <em>your</em> skin |
| `lead` | text | Lead | Tell us what your skin is asking for. We'll write the three steps; you can change any of them. |
| `ritual_off` | range | Full ritual saving (%) | 10 |
| `full_note` | text | Note with every step | Full ritual, [off]% off |
| `partial_note` | text | Note when a step is left out | Add all three steps to save [off]% |
| `foot` | text | Small print | Lasts about 10 weeks · Glass, refillable |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

- `concern`: Concern
- `step`: Step
- `option`: Step option

## Dependencies

- Assets: `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-routine-builder-01.css`, `blko-routine-builder-01.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-checkbox.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-price.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.routine_builder_01.add`, `blko.routine_builder_01.added`, `blko.routine_builder_01.aside`, `blko.routine_builder_01.concern`, `blko.routine_builder_01.empty`, `blko.routine_builder_01.error`, `blko.routine_builder_01.for`, `blko.routine_builder_01.include`, `blko.routine_builder_01.label`, `blko.routine_builder_01.match`, `blko.routine_builder_01.ritual_no`, `blko.routine_builder_01.step`, `blko.routine_builder_01.step_suffix` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
