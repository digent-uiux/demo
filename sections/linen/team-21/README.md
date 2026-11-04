# Team, maker ledger

Team, maker ledger section from the Linen theme.

- Category: team
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/team--team-21.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Team, maker ledger" (id `team-21`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/team--team-21.html; Shopify bundle: sections/linen/team-21/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-team-21.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/sections/blko-team-21.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/snippets/blko-ui-section.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-team-21.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/assets/blko-team-21.css
   - `assets/blko-team-21.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/assets/blko-team-21.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/team-21/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-team-21.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-team-21.css`
- `assets/blko-team-21.js`
- `assets/blko-ui-core.css`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Every piece, signed by the people who made it |
| `text` | textarea | Text | Our garments carry this list on the inside label. Sort it by name, by craft or by how long each of us has been here. |
| `caption` | text | Table caption | The makers: name, role, where they work and the year they joined |
| `col_name` | text | Name column | Name |
| `col_role` | text | Role column | Role |
| `col_where` | text | Place column | Works from |
| `col_since` | text | Year column | Since |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-9 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `maker`: Maker

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-team-21.css`, `blko-team-21.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
