# Lather skin quiz

html).

- Category: quiz
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/quiz--quiz.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather skin quiz" (id `quiz`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/quiz--quiz.html; Shopify bundle: sections/lather/quiz/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-mark.png
   - `assets/blko-lv3-quiz.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-quiz.css
   - `assets/blko-lv3-quiz.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-quiz.js
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-quiz.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/sections/blko-lv3-quiz.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/quiz/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-5 |
| `image` | image_picker | Photo |  |
| `heading` | inline_richtext | Heading | Find <em>your</em> match. |
| `sub` | text | Text | Two questions, one straight answer. |
| `q1` | text | Question 1 | How does your skin feel ten minutes after a shower? |
| `q2` | text | Question 2 | Who is it for? |
| `who_me` | text | Answer: me | Me |
| `who_kid` | text | Answer: my kid | My kid |
| `who_both` | text | Answer: both | Both |
| `back_label` | text | Back link | Back |
| `anchor` | text | Anchor id | quiz |
| `pre_me` | text | Line above, for me | For you |
| `pre_kid` | text | Line above, for my kid | For your kid |
| `pre_both` | text | Line above, for both | For you both |
| `add_label` | text | Add button | Add |
| `add_both_label` | text | Add button, two products | Add both |
| `again_label` | text | Start over link | Start over |
| `k_product` | product | Product |  |
| `kid_line` | textarea | Why, for my kid | Soft, light oat lotion for ages 1 and up, after the bath. Fr |
| `k_key` | text | Demo key | little |
| `k_name` | text | Demo name | Little lotion |
| `k_size` | text | Size | 150 ml |
| `k_price` | text | Demo price in cents | 1400 |
| `k_pline` | text | Short line | Soft, light oat lotion for ages 1 and up. Fragrance-free. |
| `k_labels` | text | Labels | new,ff |
| `k_ing` | textarea | Ingredients | Water, glycerin, colloidal oat, calendula oil, shea butter,  |
| `k_image` | image_picker | Demo image |  |
| `foot_note` | text | Note | Not medical advice. Patch test on your inner arm for 48 hour |
| `foot_link` | text | Link | Take the full skin quiz |
| `foot_url` | url | Link target |  |
