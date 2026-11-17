# Lather

A complete Shopify Online Store 2.0 theme for a body wash brand: gentle washes and lotions for dry, sensitive and
eczema-prone skin. Oat and moss palette, Urbanist with Yeseva One for single words in large headings, Antonio for prices.

Live demo: https://demo.blocko.ai/html/lather/templates/home.html

## Pages

Home, collection (filters, sort, pages), product (buy box with subscribe and save and back-in-stock, ingredients,
how to use, pairs well with, recently viewed, reviews, questions), cart, search, journal, article, about, help,
wishlist, account (sign in, register, orders, order, reset, activate), 404, password, gift card and a generic page.

Store features: bag drawer with one progress bar for free shipping and a free gift, quick view, predictive search
overlay, wishlist (saved on the device), recently viewed, sign-up popup and cookie bar.

## Turn your current theme into Lather

1. **Back up first.** In Online Store > Themes, duplicate your current theme so you can roll back.
2. **Create or replace every file at the same path.** Copy each file in this folder into your theme, keeping its folder:
   `layout/`, `templates/` (including `templates/customers/`), `sections/` (including `header-group.json` and
   `footer-group.json`), `snippets/`, `assets/`, `locales/` and `config/settings_schema.json`. Use the exact file content.
3. **Fonts and logo are in `assets/`.** The `.woff2` and `.png` files are binary. Upload them to `assets/` with the same
   names; without the fonts the theme falls back to system fonts.
4. **Replace `config/settings_data.json` last**, after every other file is in place.
5. **Demo images (optional).** The templates point at `shopify://shop_images/<file>`. To see the demo photos, upload the
   files in `demo/lather/files/` to Content > Files with the same names. Otherwise pick your own images in the Theme Editor.

With the Shopify CLI: `shopify theme push --path themes/lather --store <your-store>.myshopify.com --unpublished`.

## Set up in Shopify admin

- **Products:** pick your products in each section; blank pickers show demo products. Optional metafields
  (`custom.tagline`, `custom.short_description`, `custom.ingredients`, `custom.how_to_use`, `custom.pairs_with`,
  `custom.size`, `custom.caption`) fill the product page. Collection filters read product tags written as `group:value`.
- **Free gift:** Theme settings > Cart has the threshold and the gift product. Create an automatic discount
  (Buy X get Y, minimum purchase = the threshold, 1 gift product at 100% off) so the gift line costs $0.
- **Subscribe and save:** shows the product's selling plans, so install a subscription app first.
- **Back in stock:** requests arrive as contact form messages tagged `back-in-stock`.
- **Wishlist:** create a page with the handle `wishlist` and the template `page.wishlist`.
- **Pages:** create `about` and `help` pages with the templates `page.about` and `page.help`; the journal is the blog
  with the handle `journal`.

- **Theme settings:** Logo, Colors (five schemes, and a Color scheme picker in every section), Layout, Typography
  (bundled Urbanist + Yeseva One, or Shopify library fonts), Buttons and shapes, Social media, Products and Cart. The
  defaults are the look of the demo; change them to put your own brand on the theme.

Every file is prefixed `blko-lv3-`, so old files from your previous theme can stay.
Run `shopify theme check` if you work locally.
