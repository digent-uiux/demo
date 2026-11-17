# Lather footer

Lather footer: refund promise, newsletter ({% form 'customer' %}), menu columns (blocks, each a link_list with demo links while the menu is empty), the big logo mark, country/language ({% form 'locali

- Category: footer
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/templates/home.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather footer" (id `footer`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/templates/home.html; Shopify bundle: sections/lather/footer/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-footer.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/sections/blko-lv3-footer.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-demo-links.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/footer/snippets/blko-lv3-demo-links.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `promise` | inline_richtext | Promise (wrap one word in italics for the display type) | If your skin reacts, we <em>refund</em> it. |
| `how` | textarea | How it works | First bottle of any formula, within 30 days, used or not. Em |
| `show_newsletter` | checkbox | Show newsletter | True |
| `email_label` | text | Email label (screen readers) | Email |
| `email_placeholder` | text | Email placeholder | Email for 10% off your first order |
| `signup_label` | text | Button | Sign up |
| `show_mark` | checkbox | Show the big logo mark | True |
| `logo` | image_picker | Logo image |  |
| `logo_tint` | checkbox | Tint the logo with the text colour (needs a transparent PNG or SVG) | True |
| `brand_logo` | checkbox | No image: use the Lather mark (off = store name as text) | True |
| `show_country` | checkbox | Show country / currency | True |
| `show_language` | checkbox | Show language | True |
| `country_label` | text | Country label (screen readers) | Country |
| `language_label` | text | Language label (screen readers) | Language |
| `update_label` | text | Update button (no JavaScript) | Update |
| `payments` | text | Payment line | Visa, Mastercard, Amex, PayPal, Apple Pay |
