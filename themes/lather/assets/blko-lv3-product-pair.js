/* Lather v3 product page, pairs with (pages/product/40-pair.html). Prices from window.LATHER, set price = both minus
   the set %, "Add the routine": two real variants -> both to the cart (line property Set), else one demo line. */
(function () {
  'use strict';
  function init(root) {
    var L = window.LATHER;
    if (!root || !L || root.__pair) return;
    var mk = root.dataset.main, pk = root.dataset.pair, pct = +root.dataset.pct || 0;
    var a = L.products[mk], b = L.products[pk];
    if (!a || !b) return;
    root.__pair = true;
    var S = {}; try { S = JSON.parse(root.querySelector('script[data-pdp-pair-strings]').textContent); } catch (e) {}
    var btn = root.querySelector('[data-pdp-add-set]'), price = 0;
    function update() {
      var total = a.price + b.price;
      price = Math.round(total * (100 - pct)) / 100;
      root.querySelector('[data-pdp-pair-wash]').textContent = L.fmt(a.price);
      root.querySelector('[data-pdp-pair-lotion]').textContent = L.fmt(b.price);
      root.querySelector('[data-pdp-set-price]').innerHTML = L.fmt(price) + (pct > 0 ? ' <s>' + L.fmt(total) + '</s>' : '');
      if (btn) btn.textContent = String(S.button || '').replace('[amount]', L.fmt(price));
    }
    update();
    if (btn) btn.addEventListener('click', function () {
      L.add('set', 1, { items: [{ id: mk }, { id: pk }], properties: S.set_name ? { Set: S.set_name } : undefined, key: 'pdp-' + mk + '-' + pk, name: S.set_name, price: price, img: S.set_img || a.img, note: S.set_note });
    });
    document.addEventListener('lather:pdp-variant', function (e) { if (e.detail && (e.detail.key === mk || e.detail.key === pk)) update(); });
  }
  document.addEventListener('DOMContentLoaded', function () { document.querySelectorAll('.s-pdp-pair').forEach(init); });
  document.addEventListener('shopify:section:load', function (e) { var r = e.target.querySelector && e.target.querySelector('.s-pdp-pair'); if (r) setTimeout(function () { init(r); }, 0); });
})();
