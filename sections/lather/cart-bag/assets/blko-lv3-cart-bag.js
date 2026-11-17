/* Lather v3, cart page: the bag (port of home-v3/pages/cart/10-bag.html).
   The section is server-rendered from the real cart inside {% form 'cart' %}; this script redraws the lines from
   window.LATHER.cart (real lines synced from /cart.js plus demo lines) and keeps them live with the bag drawer.
   Quantity, remove and undo use LATHER.cart.setQty / remove / undo when the runtime has them, and otherwise the
   drawer's own buttons (#drawerList [data-q] [data-rm] #undoBtn), which handle real lines (/cart/change.js) and demo
   lines alike. Check out: real lines submit the form (name="checkout"); demo-only bags clear, as in the HTML. */
(function () {
  'use strict';
  function boot() {
    var L = window.LATHER, root = document.querySelector('[data-lv3-cart-bag]');
    if (!root || root.__lv3) return;
    root.__lv3 = true;
    if (!L || !L.cart) return; /* no runtime: the server-rendered form keeps working */
    var C = L.cart, T = {};
    try { T = JSON.parse(root.querySelector('[data-cart-strings]').textContent); } catch (e) {}
    var $ = function (id) { return root.querySelector('#' + id); };
    var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
    var tpl = function (s, m) { return String(s || '').replace(/\[(\w+)\]/g, function (a, k) { return k in m ? m[k] : a; }); };
    var ph = (root.querySelector('[data-cart-ph]') || {}).innerHTML || '';
    var urls = T.urls || {};
    var form = $('cart-form') || root.querySelector('form');
    var note = $('cart-note');
    var threshold = +root.dataset.free || 0;
    var serverReal = +root.dataset.real || 0;
    var ready = !serverReal, lastRemoved = null, inFlight = false;
    var drawerList = function () { return document.getElementById('drawerList'); };

    root.querySelectorAll('[data-nojs]').forEach(function (el) { el.hidden = true; });

    function removed() {
      if (C.removed) return C.removed();
      var dl = drawerList();
      return dl && dl.querySelector('#undoBtn') ? (lastRemoved || { name: '' }) : null;
    }
    function act(i, change) { /* change: +1, -1 or 0 (remove) */
      var line = C.lines()[i]; if (!line) return;
      if (C.setQty && C.remove) { if (change === 0) C.remove(i); else C.setQty(i, line.qty + change); return; }
      var dl = drawerList(); if (!dl) return;
      var b = dl.querySelector(change === 0 ? '[data-rm="' + i + '"]' : '[data-q="' + i + '"][data-d="' + change + '"]');
      if (b) b.click();
    }
    function undo() {
      if (C.undo) { C.undo(); return; }
      var dl = drawerList(), b = dl && dl.querySelector('#undoBtn'); if (b) b.click();
    }
    function hrefFor(l) {
      if (l.url) return l.url;
      if (l.key && urls[l.key]) return urls[l.key];
      var p = l.id && L.products[l.id];
      return (p && p.url) || T.fallback_url || '/collections/all';
    }

    function render() {
      if (!ready) return;
      var lines = C.lines(), total = C.subtotal(), rem = removed();
      $('cart-lines').innerHTML = lines.map(function (l, i) {
        if (l.gift) return '<article class="s-cart-bag__line s-cart-bag__line--gift" data-cart-index="' + i + '"><a class="lv3-plink" href="' + esc(hrefFor(l)) + '" tabindex="-1" aria-hidden="true">' + (l.img ? '<img src="' + esc(l.img) + '" alt="' + esc(l.name) + '" loading="lazy">' : ph) + '</a><div><h2><a class="lv3-pname" href="' + esc(hrefFor(l)) + '">' + esc(l.name) + '</a></h2><p class="small">' + esc(l.note || '') + '</p></div><div><span class="price">' + esc(l.price ? L.fmt(l.price * l.qty) : 'Free') + '</span><button type="button" class="s-cart-bag__remove" data-remove aria-label="' + esc(T.remove + ' ' + l.name) + '">' + esc(T.remove) + '</button></div></article>';
        /* image + name link to the product page (a demo product without a page opens its quick view instead) */
        var p = l.id && L.products[l.id], quick = p && !p.url && !l.url && !l.real;
        var href = esc(hrefFor(l)), qa = quick ? ' data-quick="' + esc(l.id) + '"' : '';
        return '<article class="s-cart-bag__line" data-cart-index="' + i + '"><a class="lv3-plink" href="' + href + '"' + qa + ' tabindex="-1" aria-hidden="true">' +
          (l.img ? '<img src="' + esc(l.img) + '" alt="' + esc(l.name) + '" loading="lazy">' : ph) + '</a>' +
          '<div><h2><a class="lv3-pname" href="' + href + '"' + qa + '>' + esc(l.name) + '</a></h2><p class="small">' + esc(l.note || l.size || '') + '</p>' +
          '<div class="qty"><button type="button" data-change="-1" aria-label="' + esc(tpl(T.fewer, { name: l.name })) + '">−</button><span aria-label="' + esc(T.qty) + '">' + l.qty + '</span>' +
          '<button type="button" data-change="1" aria-label="' + esc(tpl(T.more, { name: l.name })) + '"' + (l.qty >= 99 ? ' disabled' : '') + '>+</button></div></div>' +
          '<div><span class="price">' + esc(L.fmt(l.price * l.qty)) + '</span><button type="button" class="s-cart-bag__remove" data-remove aria-label="' + esc(T.remove + ' ' + l.name) + '">' + esc(T.remove) + '</button></div></article>';
      }).join('');
      $('cart-empty').hidden = !!lines.length;
      $('cart-note-wrap').hidden = !lines.length;
      $('cart-subtotal').textContent = $('cart-total').textContent = L.fmt(total);
      var co = $('cart-checkout');
      co.textContent = tpl(T.checkout, { amount: L.fmt(total) }); co.disabled = !lines.length;
      var msg = !threshold ? '' : total >= threshold ? T.ship_done : total ? tpl(T.ship_left, { amount: L.fmt(threshold - total) }) : tpl(T.ship_free_over, { amount: L.fmt(threshold) });
      $('cart-shipping').textContent = msg;
      $('cart-shipping-cost').textContent = threshold && total >= threshold ? T.shipping_free : T.shipping_calc;
      var pr = $('cart-progress');
      if (pr) {
        pr.setAttribute('aria-valuemax', threshold); pr.setAttribute('aria-valuenow', Math.min(threshold, total)); pr.setAttribute('aria-valuetext', msg);
        $('cart-progress-fill').style.width = Math.min(100, threshold ? total / threshold * 100 : 0) + '%';
      }
      $('cart-undo').hidden = !rem;
      if (rem) $('cart-removed').textContent = tpl(T.removed_line, { name: rem.name });
    }
    function focusLine(i, selector) {
      var el = root.querySelector('[data-cart-index="' + i + '"] ' + selector) || (!$('cart-undo').hidden ? $('cart-undo-button') : $('cart-title'));
      if (el) el.focus({ preventScroll: true });
    }
    /* the runtime redraws asynchronously for real lines: focus after the next lather:cart */
    function afterRender(fn) {
      var once = function () { document.removeEventListener('lather:cart', once); setTimeout(fn, 0); };
      document.addEventListener('lather:cart', once);
    }

    root.addEventListener('click', function (e) {
      var row = e.target.closest('[data-cart-index]'); if (!row) return;
      var rm = e.target.closest('[data-remove]'), q = e.target.closest('[data-change]');
      if (!rm && !q) return;
      if (!ready) { /* server lines before the first sync: remove follows its link, +/- edit updates[] */
        if (rm) return;
        e.preventDefault();
        var inp = row.querySelector('input[name="updates[]"]');
        if (inp) { inp.value = Math.max(0, Math.min(99, (+inp.value || 0) + (+q.dataset.change))); root.querySelectorAll('[data-nojs]').forEach(function (el) { el.hidden = false; }); }
        return;
      }
      e.preventDefault();
      if (inFlight) return;
      var i = +row.dataset.cartIndex, line = C.lines()[i]; if (!line) return; if (line.gift && !rm) return;
      var d = rm ? 0 : +q.dataset.change, deleting = d === 0 || (d === -1 && line.qty === 1);
      if (deleting) lastRemoved = { name: line.name };
      $('cart-status').textContent = tpl(deleting ? T.st_removed : T.st_updated, { name: line.name });
      inFlight = true;
      afterRender(function () { inFlight = false; focusLine(i, deleting ? '[data-remove]' : '[data-change="' + d + '"]'); });
      act(i, d);
      setTimeout(function () { inFlight = false; }, 4000);
    });
    $('cart-undo-button').addEventListener('click', function () {
      var rem = removed(); if (!rem) return;
      afterRender(function () { focusLine(C.lines().length - 1, '[data-change="1"]'); });
      undo();
      lastRemoved = null;
      $('cart-status').textContent = tpl(T.st_restored, { name: rem.name });
    });

    /* real lines go to Shopify checkout with the note; a demo-only bag clears, as in the HTML */
    if (form) form.addEventListener('submit', function (e) {
      var sub = e.submitter, lines = C.lines();
      if (sub && sub.name !== 'checkout') return;
      if (lines.some(function (l) { return l.real; })) return;
      e.preventDefault();
      if (!lines.length) return;
      if (C.clear) C.clear();
      else { var dl = drawerList(), guard = 0, b; while (dl && (b = dl.querySelector('[data-rm="0"]')) && guard++ < 200) b.click(); }
      lastRemoved = null;
      try { localStorage.removeItem('lather-order-note'); } catch (x) {}
      if (note) note.value = '';
      ready = true; render();
      $('cart-undo').hidden = true;
      $('cart-status').textContent = T.st_thanks;
    });

    /* order note: saved to the real cart, or on this device for a demo bag */
    if (note) {
      if (!serverReal) { try { note.value = localStorage.getItem('lather-order-note') || note.value; } catch (x) {} }
      var nt = 0;
      note.addEventListener('input', function () {
        try { localStorage.setItem('lather-order-note', note.value); } catch (x) {}
        clearTimeout(nt);
        nt = setTimeout(function () {
          if (!C.lines().some(function (l) { return l.real; })) return;
          var R = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
          fetch(R + 'cart/update.js', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ note: note.value }) }).catch(function () {});
        }, 500);
      });
    }

    var onCart = function () { render(); };
    document.addEventListener('lather:cart', onCart);
    window.addEventListener('pagehide', function () { document.removeEventListener('lather:cart', onCart); }, { once: true });
    if (serverReal && C.sync) C.sync().then(function () { ready = true; render(); }).catch(function () { /* keep the server lines */ });
    else render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', function (e) { if (e.target.querySelector && e.target.querySelector('[data-lv3-cart-bag]')) boot(); });
})();
