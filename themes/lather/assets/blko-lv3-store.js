/* Lather store runtime (port of home-v3 parts/99-tail.html). Loaded with defer from blko-lv3-theme, so it runs after
   the document is parsed and before DOMContentLoaded: section scripts that read window.LATHER inside DOMContentLoaded
   handlers find it ready.
   window.LATHER = { products, add, quick, url, fmt, labelsHTML, U, openLayer, closeAll, reveal, refresh, cart }
   - products: collected from <script type="application/json" data-lv3-product="key"> (first per key wins; later ones fill its blank fields)
   - add(id, qty = 1, o = {}): real product (has variant) -> /cart/add.js, then the drawer renders /cart.js.
       o.items = [{id, qty}] adds several real products at once (bundles); o.properties = line item properties.
       o.selling_plan = selling plan id: a numeric id is sent with every real /cart/add.js item (subscriptions);
       on a demo line it only keeps the line separate (key id@plan).
       o.price / o.discount (percent off) / o.name / o.note / o.img / o.key only shape demo lines (real lines always use
       Shopify prices; a real subscription line shows the selling plan name).
       Anything without a variant id stays in the in-memory demo cart, as in the HTML.
   Free gift (Theme settings > Cart): one combined progress block with free shipping, painted into every [data-progress]
   (drawer, cart page). When the bag, gift excluded, reaches the threshold:
     - real store (gift product picked, real lines in the cart): the gift variant is added through /cart/add.js with the
       property _gift = 1, kept at quantity 1, and removed through /cart/change.js when the bag drops below. Its price
       becomes 0 only through an automatic discount in admin (Buy X get Y: minimum purchase amount = the threshold,
       customer gets the gift product at 100% off, once per order). Without it the line shows its real price.
     - demo (no real lines): a price-0 demo line, as in the HTML.
   Removing the gift is remembered (localStorage lather-gift-off) until the bag drops below the threshold again;
   [data-gift-add] brings it back.
*/
(function () {
  'use strict';
  if (window.LATHER && window.LATHER.__lv3) return;
  var CFG = window.LATHER_CFG || {};
  var ROOT = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || CFG.root || '/';
  if (ROOT.slice(-1) !== '/') ROOT += '/';
  var URL_ADD = (CFG.cartAdd || ROOT + 'cart/add') + '.js';
  var URL_CHANGE = (CFG.cartChange || ROOT + 'cart/change') + '.js';
  var URL_CART = (CFG.cartUrl || ROOT + 'cart') + '.js';
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---------- strings (overlays section settings, HTML copy as fallback) ---------- */
  var S = {
    bag: 'Your bag', bag_n: 'Your bag ([count])', ship_free_over: 'Free shipping over [amount].',
    ship_left: '[amount] away from free shipping.', ship_done: 'Free shipping unlocked.', free_ship: 40,
    empty: 'Nothing here yet. Most people start with the Oat bar, [price].', upsell: 'Add the Oat bar for face and hands, [price].',
    upsell_add: 'Add', upsell_key: 'bar', removed: 'Removed [name].', undo: 'Undo', remove: 'Remove', less: 'Less', more: 'More',
    checkout: 'Check out', checkout_total: 'Check out, [amount]',
    ftr_ok: 'Thanks. Your 10% code is on its way.', ftr_bad: 'Please enter a valid email.',
    pop_delay: 12, cookie_delay: 1800, ann_every: 6,
    lbl_best: 'Best seller', lbl_ff: 'Fragrance-free', lbl_new: 'New', lbl_sale: 'Sale',
    prog_empty: 'Free shipping over [ship], and a free [name] over [amount].', gift_left: '[amount] more for a free [name].',
    gift_done: 'Your free [name] ([value] value) is in your bag.', gift_off: 'Your free [name] is still yours to take.',
    gift_add: 'Add my free [name]', gift_note: 'Free gift, [value] value', gift_free: 'Free', gift_remove: 'Remove free [name]',
    step_ship: 'Free shipping, [amount]', step_gift: '[name], [amount]', prog_label: 'Progress toward free shipping and a free gift'
  };
  ['script[data-lv3-strings]', 'script[data-lv3-strings-pop]'].forEach(function (sel) {
    try { var sj = $(sel); if (sj) { var o = JSON.parse(sj.textContent); for (var k in o) if (o[k] !== '' && o[k] != null) S[k] = o[k]; } } catch (e) {}
  });
  var tpl = function (s, m) { return String(s).replace(/\[(\w+)\]/g, function (a, k) { return m && k in m ? m[k] : a; }); };

  /* ---------- products ---------- */
  var products = {};
  function collect(root, force) {
    var seen = {};
    (root || document).querySelectorAll('script[data-lv3-product]').forEach(function (el) {
      var key = el.getAttribute('data-lv3-product');
      if (!key) return;
      var prev = products[key];
      try {
        var p = JSON.parse(el.textContent);
        /* same key again (a later section showing the same product): only fill the blanks of the first one */
        if (seen[key] || (prev && !force)) {
          if (prev) ['img', 'hover', 'line', 'ing', 'size', 'url'].forEach(function (f) { if (!prev[f] && p[f]) prev[f] = p[f]; });
          if (prev && !prev.labels.length && Array.isArray(p.labels)) prev.labels = p.labels;
          if (prev && !prev.variant && p.variant) prev.variant = p.variant;
          return;
        }
        seen[key] = 1;
        p.price = +p.price || 0; p.compare = +p.compare || 0;
        p.variant = (typeof p.variant === 'number' || typeof p.variant === 'string') && p.variant ? p.variant : null;
        p.labels = Array.isArray(p.labels) ? p.labels : [];
        p.img = p.img || ''; p.hover = p.hover || ''; p.line = p.line || ''; p.ing = p.ing || '';
        p.key = key;
        products[key] = p;
      } catch (e) {}
    });
    /* demo ingredients from the overlays section fill blanks */
    var ij = $('script[data-lv3-ing]');
    if (ij) { try { var m = JSON.parse(ij.textContent); for (var id in m) if (products[id] && !products[id].ing && !products[id].variant) products[id].ing = m[id]; } catch (e) {} }
  }
  collect();
  /* free gift: script[data-lv3-gift] from the overlays section {at, variant, name, value, img, size, key} */
  var GIFT = { at: 0, variant: null, name: '', value: 0, img: '', size: '', key: 'bar' };
  try { var gj = $('script[data-lv3-gift]'); if (gj) { var go = JSON.parse(gj.textContent); for (var gk in go) if (go[gk] !== '' && go[gk] != null) GIFT[gk] = go[gk]; } } catch (e) {}
  GIFT.at = +GIFT.at || 0; GIFT.value = +GIFT.value || 0; GIFT.variant = GIFT.variant ? +GIFT.variant : null;
  function keyOfVariant(vid) { for (var k in products) if (products[k].variant && +products[k].variant === +vid) return k; return null; }

  var LBL = { best: ['label--best', 'lbl_best'], ff: ['label--ff', 'lbl_ff'], 'new': ['label--new', 'lbl_new'], sale: ['label--sale', 'lbl_sale'] };
  /* money: the shop's money format, whole amounts without decimals (HTML: $18, $9.50) */
  function fmt(n) {
    n = Math.round((+n || 0) * 100) / 100;
    var f = CFG.money || '${{amount}}';
    var whole = n % 1 === 0;
    var two = n.toFixed(2), sh = whole ? n.toFixed(0) : two;
    var thou = function (s, t, d) { var p = s.split('.'); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, t); return p.join(d); };
    return f.replace(/\{\{\s*(\w+)\s*\}\}/, function (a, k) {
      switch (k) {
        case 'amount_no_decimals': return thou(n.toFixed(0), ',', '.');
        case 'amount_with_comma_separator': return thou(sh, '.', ',');
        case 'amount_no_decimals_with_comma_separator': return thou(n.toFixed(0), '.', ',');
        case 'amount_with_apostrophe_separator': return thou(sh, "'", '.');
        case 'amount_with_space_separator': return thou(sh, ' ', ',');
        default: return thou(sh, ',', '.');
      }
    });
  }
  function labelsHTML(ids) { return (ids || []).filter(function (k) { return LBL[k]; }).map(function (k) { return '<span class="label ' + LBL[k][0] + '">' + esc(S[LBL[k][1]]) + '</span>'; }).join(''); }
  /* the HTML hot-linked photos through U(); the Liquid port never does: callers get '' and show a placeholder */
  function U() { return ''; }
  /* product page URL for a key ('' when the product has none, e.g. a demo product) */
  function url(id) { var p = products[id]; return (p && p.url) || ''; }
  /* line image + name link to the product page; lines without a URL stay plain */
  function lnk(l, h, img) {
    var u = l.url || url(l.id);
    return u ? '<a class="' + (img ? 'lv3-plink' : 'lv3-pname') + '" href="' + esc(u) + '"' + (img ? ' tabindex="-1" aria-hidden="true"' : '') + '>' + h + '</a>' : h;
  }

  /* ---------- placeholders ---------- */
  function phHTML() { var t = $('#lv3-ph'); return t ? t.innerHTML : '<span class="blko-lv3-ph"></span>'; }
  function imgHTML(src, alt) { return src ? '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '" loading="lazy">' : phHTML(); }

  /* ---------- layers ---------- */
  /* Fixed layers live directly under <body> (18/11): a section wrapper with a transform, filter, opacity or z-index
     (motion, an app, a merchant section) can no longer trap the drawer under later sections or under its scrim.
     A section reloaded in the theme editor brings fresh copies: the old ones are dropped first. */
  var LAYERS = ['mnav', 'scrim', 'drawer', 'qv', 'pop', 'srch', 'cookie'];
  function portal(root) {
    LAYERS.forEach(function (id) {
      var el = (root || document).querySelector('#' + id);
      if (!el || el.parentNode === document.body) return;
      if (root) [].slice.call(document.body.children).forEach(function (c) { if (c.id === id && c !== el) c.remove(); });
      document.body.appendChild(el);
    });
  }
  portal();
  document.addEventListener('shopify:section:load', function (e) { portal(e.target); });
  var scrim = $('#scrim'), drawer = $('#drawer'), qv = $('#qv'), pop = $('#pop');
  var lastFocus = null;
  function openLayer(el) {
    if (!el) return;
    lastFocus = document.activeElement; closeAll(true);
    el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
    if (scrim) scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { var f = el.querySelector('[data-close], button, input'); if (f) f.focus({ preventScroll: true }); }, 60);
  }
  function closeAll(keepFocus) {
    [drawer, qv, pop].forEach(function (e) { if (e) { e.classList.remove('open'); e.setAttribute('aria-hidden', 'true'); } });
    if (scrim) scrim.classList.remove('open');
    document.body.style.overflow = '';
    if (keepFocus !== true && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  if (scrim) scrim.addEventListener('click', function () { closeAll(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
  document.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) { e.preventDefault(); closeAll(); } });

  /* ---------- cart: real lines (from /cart.js) + demo lines (memory) ---------- */
  var demo = [], real = [], removed = null, undoT = 0, busy = false;
  /* demo lines (no real product) persist across pages and tabs, like a real cart */
  var DK = 'lather-cart-demo';
  function loadDemo() { try { var d = JSON.parse(localStorage.getItem(DK) || '[]'); demo = Array.isArray(d) ? d.filter(function (l) { return l && l.qty > 0; }) : []; } catch (e) { demo = []; } }
  function saveDemo() { try { localStorage.setItem(DK, JSON.stringify(demo)); } catch (e) {} }
  loadDemo();
  window.addEventListener('storage', function (e) { if (e.key === DK) { loadDemo(); render(); } });
  function lines() { return real.concat(demo); }
  function count() { return lines().reduce(function (a, l) { return a + l.qty; }, 0); }
  function subtotal() { return lines().reduce(function (a, l) { return a + l.qty * l.price; }, 0); }

  function fromCart(c) {
    synced = true;
    real = (c.items || []).map(function (it) {
      var props = it.properties || {}, note = '';
      for (var k in props) if (k.charAt(0) !== '_' && props[k]) note += (note ? ', ' : '') + k + ': ' + props[k];
      var sp = it.selling_plan_allocation && it.selling_plan_allocation.selling_plan;
      if (sp && sp.name) note = sp.name + (note ? ', ' + note : '');
      var gift = !!props._gift;
      if (gift) note = tpl(S.gift_note, { value: fmt(GIFT.value || it.original_price / 100 || it.price / 100) });
      var img = it.image || (it.featured_image && it.featured_image.url) || '';
      if (img) img += (img.indexOf('?') > -1 ? '&' : '?') + 'width=200';
      return {
        real: true, key: it.key, id: keyOfVariant(it.variant_id), variant: it.variant_id, qty: it.quantity, url: it.url || '',
        name: it.product_title, size: it.variant_title && !/default title/i.test(it.variant_title) ? it.variant_title : '',
        price: (it.final_price != null ? it.final_price : it.price) / 100, img: img, note: note, properties: it.properties || {},
        selling_plan: sp ? sp.id : null, gift: gift
      };
    });
  }
  function req(url, body) {
    return fetch(url, {
      method: body ? 'POST' : 'GET', credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json', Accept: 'application/json' } : { Accept: 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw j; return j; }); });
  }
  function sync() { return req(URL_CART).then(function (c) { fromCart(c); render(); return c; }, function (e) { /* no /cart.js (preview, offline): treat the cart as read so demo features still decide */ if (!synced) { synced = true; render(); } throw e; }); }
  function notify(giftAdded) { saveDemo(); document.dispatchEvent(new CustomEvent('lather:cart', { detail: { count: count(), subtotal: subtotal(), lines: lines(), giftNew: !!giftAdded } })); }

  /* ---------- free gift + combined progress ---------- */
  var GK = 'lather-gift-off', giftOff = false, giftNew = false, giftBusy = false, giftFail = false;
  try { giftOff = localStorage.getItem(GK) === '1'; } catch (e) {}
  function setGiftOff(v) { giftOff = !!v; try { if (v) localStorage.setItem(GK, '1'); else localStorage.removeItem(GK); } catch (e) {} }
  function base() { return lines().reduce(function (a, l) { return a + (l.gift ? 0 : l.qty * l.price); }, 0); }
  var synced = false;
  function known() { return synced || !(CFG.cartCount > 0); }
  function hasRealPaid() { return real.some(function (l) { return !l.gift; }); }
  /* the gift is offered when a threshold is set and either a gift product exists or the bag is demo-only */
  function giftOn() { return GIFT.at > 0 && (GIFT.variant ? true : !hasRealPaid()); }
  function giftName() { var p = products[GIFT.key]; return GIFT.name || (p && p.name) || ''; }
  function giftReq(body, url) {
    giftBusy = true;
    return req(url || URL_CHANGE, body).then(function () { return sync(); }).catch(function () { giftFail = true; })
      .then(function () { giftBusy = false; render(); });
  }
  function syncGift() {
    var b = base(), rg = real.filter(function (l) { return l.gift; }), dg = demo.filter(function (l) { return l.gift; });
    var useReal = !!GIFT.variant && hasRealPaid(), want = GIFT.at > 0 && b >= GIFT.at;
    if (!known()) return; /* real cart not read yet: decide after the first /cart.js */
    if (!want && giftOff && GIFT.at > 0) setGiftOff(false);
    /* demo gift: only in a demo-only bag */
    if (dg.length && (!want || hasRealPaid() || giftOff)) demo = demo.filter(function (l) { return !l.gift; });
    else if (dg.length) { dg[0].qty = 1; if (demo[demo.length - 1] !== dg[0]) { demo.splice(demo.indexOf(dg[0]), 1); demo.push(dg[0]); } }
    if (want && !useReal && !dg.length && !giftOff && giftOn() && !real.length) {
      var p = products[GIFT.key] || {};
      demo.push({ key: 'gift', id: GIFT.key, qty: 1, name: giftName(), size: GIFT.size || p.size, price: 0, img: GIFT.img || p.img, note: tpl(S.gift_note, { value: fmt(GIFT.value || p.price) }), gift: true });
      giftNew = true;
    }
    /* real gift: /cart/add.js with _gift, kept at 1, removed below the threshold */
    if (giftBusy || giftFail) return;
    if (rg.length && (!want || !useReal)) { giftReq({ id: rg[0].key, quantity: 0 }); return; }
    if (rg.length && rg[0].qty !== 1) { giftReq({ id: rg[0].key, quantity: 1 }); return; }
    if (want && useReal && !rg.length && !giftOff) { giftNew = true; giftReq({ items: [{ id: GIFT.variant, quantity: 1, properties: { _gift: '1' } }] }, URL_ADD); }
  }
  var CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>';
  function progress() {
    var st = base(), free = +S.free_ship || 0, gat = giftOn() ? GIFT.at : 0, name = giftName();
    var steps = [];
    if (free > 0) steps.push({ k: 'ship', at: free, label: tpl(S.step_ship, { amount: fmt(free) }) });
    if (gat > 0) steps.push({ k: 'gift', at: gat, label: tpl(S.step_gift, { name: name, amount: fmt(gat) }) });
    steps.sort(function (a, b) { return a.at - b.at; });
    var max = steps.length ? steps[steps.length - 1].at : 0, shipDone = free > 0 && st >= free;
    var inBag = lines().some(function (l) { return l.gift; }), next = null;
    steps.forEach(function (s) { s.done = st >= s.at; if (!next && !s.done) next = s; });
    var pre = shipDone ? S.ship_done + ' ' : '', msg;
    if (!steps.length) msg = '';
    else if (!st) msg = free && gat ? tpl(S.prog_empty, { ship: fmt(free), name: name, amount: fmt(gat) }) : free ? tpl(S.ship_free_over, { amount: fmt(free) }) : tpl(S.gift_left, { amount: fmt(gat), name: name });
    else if (next && next.k === 'ship') msg = tpl(S.ship_left, { amount: fmt(free - st) });
    else if (next) msg = pre + tpl(S.gift_left, { amount: fmt(gat - st), name: name });
    else if (!gat) msg = S.ship_done;
    else msg = pre + tpl(inBag ? S.gift_done : S.gift_off, { name: name, value: fmt(GIFT.value) });
    return { st: st, max: max, steps: steps, msg: msg, offer: !!gat && !next && !inBag, name: name };
  }
  /* paints every [data-progress] box: builds the structure when the steps change (the snippet
     blko-lv3-free-gift-progress server-renders the same one), then updates only what changed */
  function paintProgress() {
    var P = progress(), sig = P.steps.map(function (s) { return s.k + s.at; }).join('|');
    document.querySelectorAll('[data-progress]').forEach(function (el) {
      el.hidden = !P.steps.length;
      if (!P.steps.length) return;
      if (el.getAttribute('data-sig') !== sig || !el.querySelector('.ship__bar')) {
        var prev = 0, marks = P.steps.slice(0, -1).map(function (s) { return '<b style="left:' + (s.at / P.max * 100) + '%"></b>'; }).join('');
        var lbl = P.steps.map(function (s) { var w = (s.at - prev) / P.max * 100; prev = s.at; return '<span data-step="' + s.k + '" style="width:' + w + '%">' + CHECK + esc(s.label) + '</span>'; }).join('');
        el.innerHTML = '<p class="ship__msg" aria-live="polite"></p><div class="ship__bar" role="progressbar" aria-label="' + esc(S.prog_label) + '" aria-valuemin="0" aria-valuemax="' + P.max + '"><i></i>' + marks + '</div>' +
          '<div class="ship__steps" aria-hidden="true">' + lbl + '</div><p class="ship__add" hidden><button class="link" type="button" data-gift-add>' + esc(tpl(S.gift_add, { name: P.name })) + '</button></p>';
        el.setAttribute('data-sig', sig);
      }
      var m = el.querySelector('.ship__msg'); if (m && m.textContent !== P.msg) m.textContent = P.msg;
      var bar = el.querySelector('.ship__bar');
      if (bar) { bar.setAttribute('aria-valuemax', P.max); bar.setAttribute('aria-valuenow', Math.min(P.max, Math.round(P.st))); bar.setAttribute('aria-valuetext', P.msg); var fi = bar.querySelector('i'); if (fi) fi.style.transform = 'scaleX(' + (P.max ? Math.min(1, P.st / P.max) : 0) + ')'; }
      P.steps.forEach(function (s) { var x = el.querySelector('[data-step="' + s.k + '"]'); if (x) x.classList.toggle('is-done', s.done); });
      var ad = el.querySelector('.ship__add'); if (ad) ad.hidden = !P.offer;
    });
  }

  function render() {
    syncGift();
    var n = count(), st = subtotal();
    var bc = $('#bagCount'); if (bc) bc.textContent = n;
    var dt = $('#drawerTitle'); if (dt) dt.textContent = n ? tpl(S.bag_n, { count: n }) : S.bag;
    paintProgress();
    var fresh = giftNew; giftNew = false;
    var list = $('#drawerList');
    if (list) {
      var up = products[S.upsell_key], upPrice = up ? fmt(up.price) : '';
      var h = '';
      if (removed) h += '<div class="undo"><span>' + esc(tpl(S.removed, { name: removed.name })) + '</span><button type="button" id="undoBtn">' + esc(S.undo) + '</button></div>';
      var all = lines();
      if (!all.length && !removed) h += '<p class="drawer__empty">' + esc(tpl(S.empty, { price: upPrice })) + '</p>';
      all.forEach(function (l, i) {
        if (l.gift) {
          h += '<div class="line line--gift' + (fresh ? ' is-new' : '') + '">' + lnk(l, imgHTML(l.img, ''), 1) + '<div><h3>' + lnk(l, esc(l.name)) + '</h3><p class="small">' + esc(l.note || '') + '</p></div>' +
            '<div style="text-align:right"><p class="price" style="font-size:18px">' + esc(l.price ? fmt(l.qty * l.price) : S.gift_free) + '</p><button class="rm" type="button" data-rm="' + i + '" aria-label="' + esc(tpl(S.gift_remove, { name: l.name })) + '">' + esc(S.remove) + '</button></div></div>';
          return;
        }
        h += '<div class="line">' + lnk(l, imgHTML(l.img, ''), 1) + '<div><h3>' + lnk(l, esc(l.name)) + '</h3><p class="small">' + esc(l.note || l.size || '') + '</p>' +
          '<div class="qty"><button type="button" aria-label="' + esc(S.less) + '" data-q="' + i + '" data-d="-1">−</button><span>' + l.qty + '</span><button type="button" aria-label="' + esc(S.more) + '" data-q="' + i + '" data-d="1">+</button></div></div>' +
          '<div style="text-align:right"><p class="price" style="font-size:18px">' + esc(fmt(l.qty * l.price)) + '</p><button class="rm" type="button" data-rm="' + i + '">' + esc(S.remove) + '</button></div></div>';
      });
      if (up && all.length && !all.some(function (l) { return l.id === S.upsell_key; }))
        h += '<div class="drawer__up">' + imgHTML(up.img, '') + '<span style="flex:1">' + esc(tpl(S.upsell, { price: upPrice })) + '</span><button class="btn btn--light btn--sm" type="button" data-add="' + esc(S.upsell_key) + '">' + esc(S.upsell_add) + '</button></div>';
      list.innerHTML = h;
    }
    var cb = $('#checkoutBtn');
    if (cb) { cb.textContent = st ? tpl(S.checkout_total, { amount: fmt(st) }) : S.checkout; cb.disabled = !st; }
    notify(fresh);
  }

  function setQty(l, q) {
    if (l.gift) { /* the gift stays at 1; removing it is remembered as declined, without an undo row */
      if (q >= 1) { render(); return Promise.resolve(); }
      setGiftOff(true);
      if (!l.real) { demo.splice(demo.indexOf(l), 1); render(); return Promise.resolve(); }
      busy = true; giftBusy = true;
      return req(URL_CHANGE, { id: l.key, quantity: 0 }).then(function (c) { fromCart(c); }).catch(function () {})
        .then(function () { busy = false; giftBusy = false; render(); });
    }
    if (!l.real) { l.qty = q; if (q < 1) { removed = l; demo.splice(demo.indexOf(l), 1); armUndo(); } render(); return Promise.resolve(); }
    if (q < 1) { removed = l; armUndo(); }
    busy = true; if (drawer) drawer.classList.add('checkout-busy');
    return req(URL_CHANGE, { id: l.key, quantity: Math.max(0, q) }).then(function (c) { fromCart(c); })
      .catch(function () {}).then(function () { busy = false; if (drawer) drawer.classList.remove('checkout-busy'); render(); });
  }
  var list0 = $('#drawerList');
  if (list0) list0.addEventListener('click', function (e) {
    if (busy) return;
    var q = e.target.closest('[data-q]'), rm = e.target.closest('[data-rm]'), u = e.target.closest('#undoBtn');
    var all = lines();
    if (q) { var l = all[+q.dataset.q]; if (l) setQty(l, l.qty + (+q.dataset.d)); }
    if (rm) { var r = all[+rm.dataset.rm]; if (r) setQty(r, 0); }
    if (u && removed) undo();
  });
  function undo() {
    if (!removed) return Promise.resolve();
    var back = removed; removed = null; clearTimeout(undoT);
    if (back.real) { busy = true; var bi = { id: back.variant, quantity: back.qty || 1, properties: back.properties }; if (back.selling_plan) bi.selling_plan = back.selling_plan; return req(URL_ADD, { items: [bi] }).then(sync).catch(function () {}).then(function () { busy = false; render(); }); }
    if (!back.qty) back.qty = 1; demo.push(back); render(); return Promise.resolve();
  }
  function clearCart() {
    demo = []; removed = null; clearTimeout(undoT); setGiftOff(false);
    if (!real.length) { render(); return Promise.resolve(); }
    return req(URL_CHANGE.replace(/change(\.js)?$/, 'clear.js'), {}).then(fromCart).catch(function () {}).then(render);
  }
  function armUndo() { clearTimeout(undoT); undoT = setTimeout(function () { removed = null; render(); }, 6000); }

  function bump() { var bc = $('#bagCount'); if (!bc) return; bc.classList.add('bump'); setTimeout(function () { bc.classList.remove('bump'); }, 700); }
  function demoAdd(id, qty, o) {
    var p = products[id] || {}, key = o.key || (o.selling_plan ? id + '@' + o.selling_plan : id);
    var price = o.price != null ? o.price : o.discount ? Math.round((p.price || 0) * (100 - o.discount)) / 100 : p.price;
    var ex = demo.find(function (l) { return l.key === key && !l.gift; });
    if (ex) ex.qty += qty;
    else demo.push({ key: key, id: id, qty: qty, name: o.name || p.name, size: p.size, price: price, img: o.img || p.img, note: o.note, selling_plan: o.selling_plan || null, properties: o.properties || null });
  }
  /* add(id, qty, {price, discount, name, note, img, key, items, properties, selling_plan}) */
  function add(id, qty, o) {
    qty = qty || 1; o = o || {};
    var items = null, plan = /^\d+$/.test(String(o.selling_plan || '')) ? +o.selling_plan : null;
    var item = function (variant, q) { var it = { id: variant, quantity: q }; if (o.properties) it.properties = o.properties; if (plan) it.selling_plan = plan; return it; };
    if (Array.isArray(o.items) && o.items.length) {
      var ok = o.items.every(function (it) { return products[it.id] && products[it.id].variant; });
      if (ok) items = o.items.map(function (it) { return item(products[it.id].variant, (it.qty || 1) * qty); });
    } else if (products[id] && products[id].variant) {
      items = [item(products[id].variant, qty)];
    }
    removed = null;
    if (!items) { demoAdd(id, qty, o); render(); bump(); openLayer(drawer); return Promise.resolve(); }
    busy = true;
    return req(URL_ADD, { items: items }).then(sync).catch(function (err) {
      /* sold out or not addable: keep the shopper informed in the drawer */
      removed = null; render();
      var dl = $('#drawerList'); if (dl && err && (err.description || err.message)) dl.insertAdjacentHTML('afterbegin', '<p class="undo" role="alert">' + esc(err.description || err.message) + '</p>');
    }).then(function () { busy = false; bump(); openLayer(drawer); });
  }

  /* ---------- quick view ---------- */
  var qvId = null, qvQty = 1;
  function quick(id) {
    var p = products[id]; if (!p || !qv) return;
    qvId = id; qvQty = 1;
    var set = function (s, v, html) { var el = $(s); if (el) el[html ? 'innerHTML' : 'textContent'] = v; };
    set('#qvQty', 1);
    var box = qv.querySelector('.qv__img');
    if (box) box.innerHTML = p.img ? '<img id="qvImg" src="' + esc(p.img) + '" alt="' + esc(p.name) + '">' : phHTML();
    set('#qvName', p.name);
    set('#qvPrice', esc(fmt(p.price)) + (p.compare ? ' <s>' + esc(fmt(p.compare)) + '</s>' : '') + (p.size ? ' <span class="small" style="font-family:var(--f-body)">' + esc(p.size) + '</span>' : ''), true);
    set('#qvLine', p.line); set('#qvIng', p.ing);
    set('#qvLabels', labelsHTML(p.labels), true);
    var link = $('#qvLink'); if (link) { if (p.url) { link.href = p.url; link.hidden = false; } else link.hidden = true; }
    openLayer(qv);
  }
  var qm = $('#qvMinus'), qp = $('#qvPlus'), qa = $('#qvAdd');
  if (qm) qm.onclick = function () { qvQty = Math.max(1, qvQty - 1); $('#qvQty').textContent = qvQty; };
  if (qp) qp.onclick = function () { qvQty++; $('#qvQty').textContent = qvQty; };
  if (qa) qa.onclick = function () { if (qvId) add(qvId, qvQty); };
  var bagBtn = $('#bagBtn');
  if (bagBtn) bagBtn.addEventListener('click', function (e) { if (!drawer) return; e.preventDefault(); render(); openLayer(drawer); });
  var cbtn = $('#checkoutBtn');
  if (cbtn) cbtn.addEventListener('click', function () { if (real.length) location.href = ROOT + 'checkout'; });

  /* global delegation: [data-add="id"], [data-quick="id"] */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-add]'); if (a) { e.preventDefault(); add(a.dataset.add, +(a.dataset.qty || 1)); return; }
    var q = e.target.closest('[data-quick]'); if (q) { e.preventDefault(); quick(q.dataset.quick); return; }
    var g = e.target.closest('[data-gift-add]'); if (g) { e.preventDefault(); setGiftOff(false); giftFail = false; render(); return; }
    /* server-rendered remove link of the gift (cart page before the first sync): remember it as declined */
    if (e.target.closest('[data-gift-off]')) setGiftOff(true);
  });

  /* ---------- reveal: [data-rv] gets .in when it enters ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }) : null;
  function reveal(root) { (root || document).querySelectorAll('[data-rv]').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); }); }

  function refresh(root) { collect(root, !!root); render(); }
  window.LATHER = { products: products, add: add, quick: quick, url: url, fmt: fmt, labelsHTML: labelsHTML, U: U, openLayer: openLayer, closeAll: closeAll, reveal: reveal, refresh: refresh, sellingPlans: true, cart: { sync: sync, lines: lines, count: count, subtotal: subtotal, freeShip: +S.free_ship || 0, setQty: function (i, q) { var l = lines()[i]; return l ? setQty(l, q) : Promise.resolve(); }, remove: function (i) { var l = lines()[i]; return l ? setQty(l, 0) : Promise.resolve(); }, removed: function () { return removed; }, undo: undo, clear: clearCart, gift: { at: GIFT.at, variant: GIFT.variant, value: GIFT.value, name: giftName, state: progress }, addGift: function () { setGiftOff(false); giftFail = false; render(); } }, __lv3: true };
  render();
  if (CFG.cartCount > 0 || Object.keys(products).some(function (k) { return products[k].variant; })) sync().catch(function () {});

  /* ---------- header: over the hero until scrolled ---------- */
  var hdr = $('#hdr');
  if (hdr) { var onS = function () { hdr.classList.toggle('is-solid', scrollY > 40 || hdr.classList.contains('is-inner')); }; onS(); addEventListener('scroll', onS, { passive: true }); }
  var mnav = $('#mnav'), mb = $('#menuBtn'), mc = $('#menuClose');
  if (mnav) {
    if (mb) mb.onclick = function () { mnav.classList.add('open'); mb.setAttribute('aria-expanded', 'true'); };
    if (mc) mc.onclick = function () { mnav.classList.remove('open'); if (mb) mb.setAttribute('aria-expanded', 'false'); };
    mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { mnav.classList.remove('open'); }); });
  }

  /* ---------- announcement rotator (messages are [data-ann-msg] in the section) ---------- */
  var msgs = Array.prototype.slice.call(document.querySelectorAll('[data-ann-msg]'));
  var am = $('#annMsg');
  if (am && msgs.length) {
    var ai = 0;
    var showAnn = function (d) { ai = (ai + d + msgs.length) % msgs.length; am.style.opacity = 0; setTimeout(function () { am.innerHTML = msgs[ai].innerHTML; am.style.opacity = 1; }, 250); };
    document.querySelectorAll('[data-ann]').forEach(function (b) { b.onclick = function () { showAnn(+b.dataset.ann); }; });
    if (msgs.length > 1 && +S.ann_every > 0) setInterval(function () { if (!document.hidden) showAnn(1); }, +S.ann_every * 1000);
  }

  /* ---------- storage ---------- */
  var ss = { get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} } };
  var ls = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var EMAIL = /\S+@\S+\.\S+/;

  /* ---------- footer + popup forms: real {% form 'customer' %}, checked here, posted to Shopify ---------- */
  var ff = $('#ftrForm');
  if (ff) {
    ff.addEventListener('submit', function (e) {
      var v = ($('#ftrEmail') || {}).value || '';
      if (!EMAIL.test(v)) { e.preventDefault(); var okEl = $('#ftrOk'); if (okEl) okEl.textContent = S.ftr_bad; return; }
      ss.set('lather-sent', 'ftr');
    });
  }
  var pf = $('#popForm');
  if (pf) {
    pf.addEventListener('submit', function (e) {
      var pe = $('#popEmail'), v = pe ? pe.value : '';
      if (!EMAIL.test(v)) { e.preventDefault(); if (pe) pe.focus(); return; }
      ss.set('lather-sent', 'pop'); ss.set('lather-pop', '1');
    });
  }
  /* after Shopify posts the form back: show the thanks state where the shopper signed up */
  var sent = ss.get('lather-sent');
  if (sent) ss.set('lather-sent', '');
  if (sent && document.querySelector('[data-lv3-posted]')) {
    if (sent === 'pop' && pop) { var done = pop.querySelector('[data-pop-done]'), body = pop.querySelector('#popForm'); if (done && body) { body.hidden = true; done.hidden = false; } openLayer(pop); }
    else { var okEl2 = $('#ftrOk'); if (okEl2) okEl2.textContent = S.ftr_ok; }
  }

  /* ---------- popup + cookie ---------- */
  var noPop = /[?&]nopop/.test(location.search) || (window.Shopify && window.Shopify.designMode);
  if (pop && !noPop && pop.hasAttribute('data-enabled') && !ss.get('lather-pop')) {
    setTimeout(function () { if (!document.querySelector('.drawer.open,.qv.open,.pop.open')) { ss.set('lather-pop', '1'); openLayer(pop); } }, (+S.pop_delay || 12) * 1000);
  }
  var ck = $('#cookie');
  if (ck && !noPop && !ls.get('lather-cookie')) setTimeout(function () { ck.classList.add('open'); }, +S.cookie_delay || 0);
  document.querySelectorAll('[data-cookie]').forEach(function (b) {
    b.onclick = function () {
      var yes = b.dataset.cookie === 'yes';
      ls.set('lather-cookie', b.dataset.cookie); if (ck) ck.classList.remove('open');
      try { var cp = window.Shopify && window.Shopify.customerPrivacy; if (cp && cp.setTrackingConsent) cp.setTrackingConsent({ analytics: yes, marketing: yes, preferences: yes, sale_of_data: yes }, function () {}); } catch (e) {}
    };
  });

  reveal(document);

  /* header menu: links that do not fit beside the logo go into "More"; if even one link + More does not fit, the
     header switches to the menu button (the mobile sheet lists every link). Never wraps, never covers the logo. */
  function fitNav() {
    document.querySelectorAll('.hdr__nav').forEach(function (nav) {
      var hdr = nav.closest('.hdr'), more = nav.querySelector('.hdr__more'), list = more && more.querySelector('.hdr__more-list');
      if (list) while (list.firstChild) nav.insertBefore(list.firstChild, more);
      if (hdr) hdr.classList.remove('is-compact');
      if (more) { more.hidden = true; more.open = false; }
      nav.classList.add('is-fit');
      if (getComputedStyle(nav).display === 'none') return;
      nav.querySelectorAll('a').forEach(function (a) { if (a.scrollWidth > a.clientWidth + 1) a.title = a.textContent.trim(); else a.removeAttribute('title'); });
      var over = function () { return nav.scrollWidth > nav.clientWidth + 1; };
      if (!over()) return;
      var links = [].slice.call(nav.children).filter(function (el) { return el.tagName === 'A'; });
      if (more && list) {
        more.hidden = false;
        while (links.length && over()) list.insertBefore(links.pop(), list.firstChild);
      }
      if ((!more || !links.length || over()) && hdr) {
        if (list) while (list.firstChild) nav.insertBefore(list.firstChild, more);
        if (more) more.hidden = true;
        hdr.classList.add('is-compact');
      }
    });
  }
  var fitT;
  function fitSoon() { cancelAnimationFrame(fitT); fitT = requestAnimationFrame(fitNav); }
  fitNav();
  window.addEventListener('resize', fitSoon);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav);
  document.addEventListener('shopify:section:load', fitSoon);
  document.addEventListener('click', function (e) { document.querySelectorAll('.hdr__more[open]').forEach(function (d) { if (!d.contains(e.target)) d.open = false; }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') document.querySelectorAll('.hdr__more[open]').forEach(function (d) { d.open = false; d.querySelector('summary').focus(); }); });

  /* theme editor: re-collect products and arm reveals in reloaded sections */
  document.addEventListener('shopify:section:load', function (e) { refresh(e.target); reveal(e.target); if (e.target.querySelectorAll) e.target.querySelectorAll('[data-rv]').forEach(function (el) { el.classList.add('in'); }); });
})();
