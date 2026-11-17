# Lather v3 bundle

html).

- Category: bundle
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/bundle--bundle.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather v3 bundle" (id `bundle`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/bundle--bundle.html; Shopify bundle: sections/lather/bundle/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-base.css
   - `assets/blko-lv3-bundle.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-bundle.css
   - `assets/blko-lv3-bundle.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-bundle.js
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-bundle.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/sections/blko-lv3-bundle.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/bundle/snippets/blko-lv3-product-data.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `heading_1` | inline_richtext | Heading, line 1 | Build your <em>shower</em> |
| `heading_2` | inline_richtext | Heading, line 2 | set. |
| `tiers_text` | text | Intro | Take a full set for 15% off, or mix any two or more. The mor |
| `anchor` | text | Anchor id | bundle |
| `tier_2` | range | 2 items, % off | 5 |
| `tier_3` | range | 3 items, % off | 10 |
| `tier_4` | range | 4 or more items, % off | 15 |
| `set_pct` | range | Complete set, % off | 15 |
| `panel_title` | text | Panel title | Your set |
| `slots_label` | text | Slots label (screen readers) | Items in your set |
| `stops_label` | text | Tiers label (screen readers) | Discount tiers |
| `stop_label` | text | Tier stop | [pct]% off |
| `item_one` | text | Count, one | [n] item |
| `item_many` | text | Count, many | [n] items |
| `total_label` | text | Total label | Total |
| `save` | text | Saving | You save [amount] |
| `no_discount` | text | No discount | No discount yet |
| `cta_pick` | text | Button, fewer than 2 items | Pick 2 to make a set |
| `cta_add` | text | Button | Add set, [amount] |
| `msg_set` | text | Set complete | [set] complete: [pct]% off. |
| `msg_empty` | text | Nothing picked | Pick a set, or any 2 items to get [next]% off. |
| `msg_one` | text | One item | Add 1 more to get [next]% off. |
| `msg_mid` | text | Two or three items | [pct]% off. Add 1 more to get [next]% off. |
| `msg_max` | text | Four or more | [pct]% off, the best price on any set. |
| `set_name` | text | Name, one complete set | [set] set |
| `mix_name` | text | Name, mixed set | Your shower set |
| `note` | text | Demo bag note | [n] items, [pct]% off: [list] |
| `less_aria` | text | Minus button (screen readers) | One less [name] |
| `more_aria` | text | Plus button (screen readers) | One more [name] |
