# Lather FAQ

html).

- Category: faq
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/faq--faq.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather FAQ" (id `faq`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/faq--faq.html; Shopify bundle: sections/lather/faq/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-base.css
   - `assets/blko-lv3-faq.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-faq.css
   - `assets/blko-lv3-faq.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-faq.js
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-faq.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/sections/blko-lv3-faq.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/faq/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `heading_1` | inline_richtext | Heading, line 1 | Questions, <em>answered.</em> |
| `heading_2` | inline_richtext | Heading, line 2 (optional) |  |
| `open_first` | checkbox | Open the first question | True |
| `image` | image_picker | Photo |  |
| `tip` | text | Tip on the photo | Pat dry, then moisturise within three minutes, while skin is |
| `button_label` | text | Button label | Find your match |
| `button_link` | url | Button link |  |
| `more_text` | text | Text before the email link | Still unsure? |
| `email_label` | text | Email link label | Email us |
| `email` | text | Email address | help@example.com |
| `more_after` | text | Text after the email link | , a person replies within a day. |
| `label` | text | Section label (screen readers) | Questions |
| `anchor` | text | Anchor id | faq |
