# Herbarium sheets journal

Herbarium sheets journal section from the Balm 2 theme.

- Category: main-blog
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/main-blog--blog-37.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Herbarium sheets journal" (id `blog-37`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/main-blog--blog-37.html; Shopify bundle: sections/balm-2/blog-37/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-blog-37.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/sections/blko-blog-37.liquid
   - `snippets/blko-blog-37-sheet.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/snippets/blko-blog-37-sheet.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-balm-motion.js
   - `assets/blko-blog-37.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-blog-37.css
   - `assets/blko-blog-37.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-blog-37.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-f-karla.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/blog-37/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-blog-37.liquid`
- `snippets/blko-blog-37-sheet.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-blog-37.css`
- `assets/blko-blog-37.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | The journal |
| `per_page` | range | Sheets per page | 6 |
| `blog` | blog | Blog |  |
| `show_mins` | checkbox | Show read time | true |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 112 |
| `padding_bottom` | range | Bottom padding | 112 |

## Blocks

- `post`: Post (preview)

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-blog-37.css`, `blko-blog-37.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-blog-37-sheet.liquid`, `blko-fonts-balm.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.blog_37.by_label`, `blko.blog_37.collected`, `blko.blog_37.count`, `blko.blog_37.family`, `blko.blog_37.file`, `blko.blog_37.herbarium`, `blko.blog_37.lead`, `blko.blog_37.mins`, `blko.blog_37.newer`, `blko.blog_37.no`, `blko.blog_37.older`, `blko.blog_37.page`, `blko.blog_37.pages` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
