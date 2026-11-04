# Process steps 05

Process steps 05 section from the Balm 2 theme.

- Category: process-steps
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/process-steps--process-steps-05.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Process steps 05" (id `process-steps-05`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/process-steps--process-steps-05.html; Shopify bundle: sections/balm-2/process-steps-05/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-process-steps-05.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/sections/blko-process-steps-05.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-field.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-ui-field.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-ui-input.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/snippets/blko-ui-section.liquid
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-f-karla.woff2
   - `assets/blko-process-steps-05.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-process-steps-05.css
   - `assets/blko-process-steps-05.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-process-steps-05.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/process-steps-05/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-process-steps-05.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-field.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-process-steps-05.css`
- `assets/blko-process-steps-05.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | How it’s made |
| `heading` | inline_richtext | Heading (italic = accent) | Four steps, one <em>small</em> batch |
| `text` | textarea | Text | Every bottle starts as herbs in oil at our workshop bench, and ships four weeks later. |
| `ship_day` | number | Ships on day | 28 |
| `lookup` | checkbox | Show batch lookup | true |
| `code_label` | text | Field label | Your batch code |
| `hint` | text | Hint | Printed on the bottle’s label. |
| `placeholder` | text | Placeholder | L-0412 |
| `button` | text | Button | Look up |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 144 |
| `padding_bottom` | range | Bottom padding | 144 |

## Blocks

- `step`: Step

## Dependencies

- Assets: `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-process-steps-05.css`, `blko-process-steps-05.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-field.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-input.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.process_steps_05.bad`, `blko.process_steps_05.clear`, `blko.process_steps_05.day`, `blko.process_steps_05.label`, `blko.process_steps_05.shipped`, `blko.process_steps_05.ships`, `blko.process_steps_05.typical`, `blko.process_steps_05.went` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
