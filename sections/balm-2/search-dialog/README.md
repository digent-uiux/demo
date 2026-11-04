# t:blko.search_dialog.schema.name

t:blko.search_dialog.schema.name section from the Balm 2 theme.

- Category: search-dialog
- Kind: section
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section
- Live demo: none

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "t:blko.search_dialog.schema.name" (id `search-dialog`, theme `balm-2`; Shopify bundle: sections/balm-2/search-dialog/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-search-dialog.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-dialog/sections/blko-search-dialog.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-dialog/snippets/blko-icon.liquid
   - `assets/blko-predictive-search.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-dialog/assets/blko-predictive-search.css
   - `assets/blko-predictive-search.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-dialog/assets/blko-predictive-search.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-dialog/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-search-dialog.liquid`
- `snippets/blko-icon.liquid`
- `assets/blko-predictive-search.css`
- `assets/blko-predictive-search.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `label` | text | t:blko.search_dialog.schema.label | Search the apothecary |
| `placeholder` | text | t:blko.search_dialog.schema.placeholder | Rosehip, oat, a balm… |
| `terms` | text | t:blko.search_dialog.schema.terms | rosehip, oily skin, calendula, refills |
| `show_trending` | checkbox | t:blko.search_dialog.schema.show_trending | true |
| `trending` | collection | t:blko.search_dialog.schema.trending |  |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-predictive-search.css`, `blko-predictive-search.js`
- Snippets: `blko-icon.liquid`
- Locale keys: `blko.search_dialog.close`, `blko.search_dialog.field`, `blko.search_dialog.from`, `blko.search_dialog.often`, `blko.search_dialog.trending` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
