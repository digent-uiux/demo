# Shoppable photo

Lather home v3, 55 Hotspots: one full-bleed photo with still pins (only the ring behind each pin pulses) and a compact product slider bottom-right.

- Category: shop-the-look
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/shop-the-look--hotspots.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Shoppable photo" (id `hotspots`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/shop-the-look--hotspots.html; Shopify bundle: sections/lather/hotspots/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-base.css
   - `assets/blko-lv3-hotspots.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-hotspots.css
   - `assets/blko-lv3-hotspots.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-hotspots.js
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-hotspots.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/sections/blko-lv3-hotspots.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/hotspots/snippets/blko-lv3-product-data.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `anchor` | text | Anchor id | after-shower |
| `label` | text | Section name (screen readers) | Shop the after-shower routine from a photo |
| `image` | image_picker | Photo |  |
| `image_alt` | text | Photo description | Sitting on the bed after a shower, pouring lotion into an op |
| `heading_1` | inline_richtext | Heading, line 1 | Shop the |
| `heading_2` | inline_richtext | Heading, line 2 | <em>after.</em> |
| `text` | text | Text | Wash, pat dry, then moisturise while skin is still damp. |
| `panel_title` | text | Slider title | In this routine |
| `panel_label` | text | Slider name (screen readers) | Products in this photo |
| `track_label` | text | Track name (screen readers) | Product slider |
| `prev_label` | text | Previous button (screen readers) | Previous product |
| `next_label` | text | Next button (screen readers) | Next product |
| `add_label` | text | Add button | Add |
| `add_aria` | text | Add button (screen readers) | Add [name] |
| `quick_aria` | text | Quick view button (screen readers) | Quick view [name] |
| `pin_aria` | text | Pin (screen readers) | [name]: show in the list |
