# Reviews, wash thread

Reviews, wash thread section from the Linen theme.

- Category: reviews
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/reviews--reviews-31.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Reviews, wash thread" (id `reviews-31`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/reviews--reviews-31.html; Shopify bundle: sections/linen/reviews-31/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-reviews-31.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/sections/blko-reviews-31.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/snippets/blko-fonts-linen.liquid
   - `snippets/blko-reviews-31-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/snippets/blko-reviews-31-stars.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/snippets/blko-ui-section.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-reviews-31.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/assets/blko-reviews-31.css
   - `assets/blko-reviews-31.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/assets/blko-reviews-31.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/reviews-31/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-reviews-31.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-reviews-31-stars.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-reviews-31.css`
- `assets/blko-reviews-31.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | How it wears after twenty washes |
| `text` | text | Text | Linen changes as you live in it. Pick a point on the thread to read reviews from people that far in. |
| `score` | range | Average score | 4.8 |
| `n5` | number | 5-star reviews | 268 |
| `n4` | number | 4-star reviews | 52 |
| `n3` | number | 3-star reviews | 14 |
| `n2` | number | 2-star reviews | 5 |
| `n1` | number | 1-star reviews | 2 |
| `rating_label` | text | Rating filter label | Filter by rating |
| `stage_label` | text | Stage filter label | Filter by number of washes |
| `all_label` | text | All stages | All stages |
| `all_text` | textarea | All stages text | Every stage, from the first wear to forty washes and beyond. Pick a knot on the thread to see how the shirt changes. |
| `m_soft` | text | Meter 1 | Softness |
| `m_colour` | text | Meter 2 | Colour held |
| `m_shape` | text | Meter 3 | Shape held |
| `one` | text | Review, one | review |
| `many` | text | Review, many | reviews |
| `at` | text | Word before stage | at |
| `stars_word` | text | Word after star count | stars |
| `sort_label` | text | Sort label | Sort by |
| `sort_washes` | text | Sort, washes | Most washes |
| `sort_recent` | text | Sort, newest | Newest |
| `sort_helpful` | text | Sort, useful | Most useful |
| `care_label` | text | Care list label | How they care for it |
| `wash_label` | text | Wash pill prefix | Wash |
| `useful_label` | text | Useful button | Useful |
| `empty_title` | text | Empty title | No reviews at this stage with that rating |
| `empty_reset` | text | Empty reset link | Show every review |
| `more_label` | text | Show more label | Show more reviews |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `stage`: Stage
- `review`: Review

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-reviews-31.css`, `blko-reviews-31.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-reviews-31-stars.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.reviews_31.label`, `blko.reviews_31.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
