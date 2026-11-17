/* Lather v3, cart add-on: the price follows window.LATHER (shop money format, real price when a product is picked). */
(function () {
  'use strict';
  function boot() {
    var L = window.LATHER; if (!L) return;
    document.querySelectorAll('[data-lv3-cart-finish] [data-lv3-price]').forEach(function (el) {
      var p = L.products[el.getAttribute('data-lv3-price')];
      if (p) el.textContent = L.fmt(p.price);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
