# Lather policy page

html), for a page with the template page.policy.

- Category: content
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather policy page" (id `policy`, theme `lather`; Shopify bundle: sections/lather/policy/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-mark.png
   - `assets/blko-lv3-policy.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-policy.css
   - `assets/blko-lv3-policy.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-policy.js
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-policy.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/sections/blko-lv3-policy.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-policy-demo.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/snippets/blko-lv3-policy-demo.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/policy/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `heading_1` | inline_richtext | Heading, line 1 | The small print, |
| `heading_2` | inline_richtext | Heading, line 2 | kept <em>plain.</em> |
| `intro` | textarea | Intro | How we ship, what happens if your skin reacts, what we do wi |
| `updated_label` | text | Updated label | Updated |
| `updated_date` | text | Updated date | 17 November 2026 |
| `contact_text` | text | Contact text | Questions? |
| `contact_label` | text | Contact link label | Ask customer care |
| `contact_link` | url | Contact link |  |
| `show_toc` | checkbox | Show "On this page" | True |
| `toc_label` | text | Label | On this page |
| `card_heading` | text | Heading | Still unsure about something? |
| `card_text` | text | Text | Customer care reads every message and replies by email. |
| `card_label` | text | Button label | Contact customer care |
| `card_link` | url | Button link |  |
