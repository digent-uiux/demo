# Routine set

Lather home v3, 45 Routine: the after-shower routine as a set.

- Category: routine
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/routine--routine.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Routine set" (id `routine`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/routine--routine.html; Shopify bundle: sections/lather/routine/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-recent.js
   - `assets/blko-lv3-routine.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-routine.css
   - `assets/blko-lv3-routine.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-routine.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-routine.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/sections/blko-lv3-routine.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/routine/snippets/blko-lv3-product-data.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `anchor` | text | Anchor id | routine |
| `heading_1` | inline_richtext | Heading, line 1 | The after-shower |
| `heading_2` | inline_richtext | Heading, line 2 | <em>routine.</em> |
| `lead` | text | Intro | Wash, pat dry, then lotion while skin is still damp. |
| `steps_label` | text | Steps list name (screen readers) | Routine steps |
| `discount` | range | Routine discount | 20 |
| `save_text` | text | Saving badge | Save [discount]% |
| `total_label` | text | Total label | Total |
| `button_label` | text | Button label | Add all to bag |
| `fine_text` | text | Fine print | [count] items at the set price, each its own line in your ba |
| `note_text` | text | Bag line note | Routine price, [discount]% off [price] |
| `photo` | image_picker | Photo |  |
| `photo_alt` | text | Photo description | A woman in a towel turban smoothing lotion onto her shoulder |
| `countdown_mode` | select | Countdown | weekly |
| `countdown_text` | text | Countdown text | Set price ends Sunday, 11:59 pm |
| `end_weekday` | select | Weekly: ends on | 0 |
| `end_hour` | range | Weekly: hour | 23 |
| `end_minute` | range | Weekly: minute | 59 |
| `end_date` | text | Fixed date: ends at |  |
| `unit_days` | text | Days label | days |
| `unit_hours` | text | Hours label | hours |
| `unit_min` | text | Minutes label | min |
| `unit_sec` | text | Seconds label | sec |
