/* Lather wishlist (feature 5). Same code in the HTML (shared/50-wishlist.html) and the Liquid theme.
   Saved products live in localStorage 'lather-wish' as snapshots, so the wishlist page can show them on any page.
   window.LATHER_WISH = { list, has(key), toggle(key), add(key), remove(key), count }; event 'lather:wish' {detail:{list,count}}
   Markup it drives:
   - [data-wish="key"] heart buttons (aria-pressed). Optional [data-wish-text] child swaps data-on / data-off text.
   - [data-wish-count] badge (hidden at 0) and [data-wish-link] (aria-label from data-label / data-label-n "[count]").
     The link may carry data-saved / data-removed ("[name]") for the screen-reader announcement.
   - [data-lv3-wishlist] the wishlist page (cards, remove with undo, add to bag, empty state with suggestions).
   A key is the product id in window.LATHER.products. A real Shopify product is saved by its URL, so the same product
   shown under two keys is one entry. On the wishlist page, real entries refresh price and stock from /products/<handle>.js. */
(function () {
  'use strict';
  if (window.LATHER_WISH) return;
  var SK = 'lather-wish';
  var S = { saved: 'Saved [name] to your wishlist.', removed: 'Removed [name] from your wishlist.', label: 'Wishlist', label_n: 'Wishlist, [count] saved' };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var tpl = function (s, m) { return String(s || '').replace(/\[(\w+)\]/g, function (a, k) { return m && k in m ? m[k] : a; }); };
  var L = function () { return window.LATHER || { products: {} }; };
  var fmt = function (n) { var l = L(); return l.fmt ? l.fmt(n) : '$' + (+n || 0); };

  function load() {
    try { var a = JSON.parse(localStorage.getItem(SK) || '[]'); return Array.isArray(a) ? a.filter(function (e) { return e && e.id && e.key; }) : []; } catch (e) { return []; }
  }
  var list = load();
  function store() { try { localStorage.setItem(SK, JSON.stringify(list)); } catch (e) {} }

  function idFor(key) { var p = L().products[key]; return p && p.url ? String(p.url).split('?')[0] : String(key); }
  function indexOf(key) { var id = idFor(key); for (var i = 0; i < list.length; i++) if (list[i].id === id) return i; return -1; }
  function indexOfId(id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return i; return -1; }
  function has(key) { return indexOf(key) > -1; }
  function snap(key) {
    var p = L().products[key] || {};
    return {
      id: idFor(key), key: String(key), name: p.name || String(key), size: p.size || '', price: +p.price || 0, compare: +p.compare || 0,
      img: p.img || '', hover: p.hover || '', labels: Array.isArray(p.labels) ? p.labels.slice() : [], line: p.line || '', ing: p.ing || '',
      variant: p.variant || null, available: p.available !== false, url: p.url || '', t: Date.now()
    };
  }

  /* screen-reader announcement (one polite live region for the whole site) */
  var live = null;
  function announce(msg) {
    if (!live) { live = document.createElement('p'); live.className = 'sr'; live.setAttribute('aria-live', 'polite'); live.setAttribute('role', 'status'); document.body.appendChild(live); }
    live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 40);
  }
  function strings() {
    var a = document.querySelector('[data-wish-link]'), o = {};
    for (var k in S) o[k] = S[k];
    if (a) { if (a.dataset.saved) o.saved = a.dataset.saved; if (a.dataset.removed) o.removed = a.dataset.removed; if (a.dataset.label) o.label = a.dataset.label; if (a.dataset.labelN) o.label_n = a.dataset.labelN; }
    return o;
  }

  function commit(kind, e, quiet) {
    store(); sync();
    if (!quiet && e) announce(tpl(kind === 'add' ? strings().saved : strings().removed, { name: e.name }));
    if (kind === 'add') document.querySelectorAll('[data-wish-count]').forEach(function (c) { c.classList.add('bump'); setTimeout(function () { c.classList.remove('bump'); }, 700); });
    document.dispatchEvent(new CustomEvent('lather:wish', { detail: { list: list.slice(), count: list.length, kind: kind, entry: e } }));
  }
  function add(key) { if (has(key)) return; var e = snap(key); list.unshift(e); commit('add', e); }
  function removeAt(i, quiet) { if (i < 0) return null; var e = list.splice(i, 1)[0]; commit('remove', e, quiet); return e; }
  function remove(key) { return removeAt(indexOf(key)); }
  function toggle(key) { if (has(key)) remove(key); else add(key); return has(key); }

  /* every heart, badge and link on the page */
  function sync() {
    var n = list.length, st = strings();
    document.querySelectorAll('[data-wish]').forEach(function (b) {
      var on = has(b.getAttribute('data-wish'));
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var t = b.querySelector('[data-wish-text]');
      if (t) { var v = on ? t.getAttribute('data-on') : t.getAttribute('data-off'); if (v && t.textContent !== v) t.textContent = v; }
    });
    document.querySelectorAll('[data-wish-count]').forEach(function (c) { c.textContent = n; c.hidden = !n; });
    document.querySelectorAll('[data-wish-link]').forEach(function (a) { a.setAttribute('aria-label', n ? tpl(st.label_n, { count: n }) : st.label); });
  }

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-wish]');
    if (!b) return;
    ev.preventDefault();
    toggle(b.getAttribute('data-wish'));
  });
  window.addEventListener('storage', function (ev) { if (ev.key === SK) { list = load(); sync(); document.dispatchEvent(new CustomEvent('lather:wish', { detail: { list: list.slice(), count: list.length, kind: 'sync' } })); } });

  /* cards rendered later by section scripts (featured tabs, search, recently viewed) get their state too */
  var queued = 0;
  function later() { if (queued) return; queued = requestAnimationFrame(function () { queued = 0; sync(); }); }
  function watch() {
    if (!window.MutationObserver) return;
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) for (var j = 0; j < ms[i].addedNodes.length; j++) {
        var nd = ms[i].addedNodes[j];
        if (nd.nodeType === 1 && (nd.hasAttribute('data-wish') || nd.querySelector('[data-wish]'))) { later(); return; }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ---------- wishlist page ---------- */
  function page(root) {
    var d = root.dataset;
    var T = {
      one: d.countOne || '1 saved product.', many: d.countMany || '[count] saved products.', zero: d.countZero || '',
      add: d.addLabel || 'Add to bag', add_aria: d.addAria || 'Add [name] to bag', rm: d.removeLabel || 'Remove',
      rm_aria: d.removeAria || 'Remove [name] from wishlist', sold: d.soldLabel || 'Sold out', removed: d.removedLabel || 'Removed [name].',
      undo: d.undoLabel || 'Undo', save_aria: d.saveAria || 'Save [name]', qv_aria: d.quickAria || 'Quick view [name]'
    };
    var ul = root.querySelector('[data-wish-list]'), empty = root.querySelector('[data-wish-empty]'), status = root.querySelector('[data-wish-status]');
    var undoBox = root.querySelector('[data-wish-undo]'), sugg = root.querySelector('[data-wish-suggest]');
    var phT = root.querySelector('template[data-wish-ph]');
    var ph = phT ? phT.innerHTML : '<span class="blko-lv3-ph"></span>';
    var lastRemoved = null, lastAt = 0, undoT = 0;

    /* the bag adds by product key: use the page's own product when it is the same one, else register the snapshot */
    function bagKey(e) {
      var P = L().products;
      if (P[e.key] && idFor(e.key) === e.id) return e.key;
      var k = 'wish:' + e.id;
      P[k] = { name: e.name, size: e.size, price: e.price, compare: e.compare, img: e.img, hover: e.hover, labels: e.labels || [], line: e.line, ing: e.ing, variant: e.variant, available: e.available, url: e.url, key: k };
      return k;
    }
    function media(src, alt) { return src ? '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy">' : ph; }
    function labels(ids) { var l = L(); return l.labelsHTML ? l.labelsHTML(ids || []) : ''; }
    /* product page link: a real product's own url, else the demo page for that key (LATHER.url) */
    function urlOf(e, key) { return (e && e.url) || (L().url ? L().url(key) : '') || ''; }
    function nameHTML(e, key) {
      var u = urlOf(e, key);
      if (u) return '<a class="lv3-pname" href="' + esc(u) + '">' + esc(e.name) + '</a>';
      if (L().products[key]) return '<button type="button" data-quick="' + esc(key) + '">' + esc(e.name) + '</button>';
      return esc(e.name);
    }
    function linked(u, html) { return u ? '<a class="lv3-plink lv3-plink--fill" href="' + esc(u) + '" tabindex="-1" aria-hidden="true">' + html + '</a>' : html; }
    function qvHTML(key, name) {
      return L().products[key] ? '<button class="s-wish__qv" type="button" data-quick="' + esc(key) + '" aria-label="' + esc(T.qv_aria.replace('[name]', name)) + '">' + eyeSVG + '</button>' : '';
    }
    function priceHTML(e) { return esc(fmt(e.price)) + (e.compare > e.price ? ' <s>' + esc(fmt(e.compare)) + '</s>' : ''); }
    function card(e) {
      var alt = e.size ? e.name + ', ' + e.size : e.name;
      var buy = e.available === false
        ? '<button class="btn btn--light btn--sm s-wish__add" type="button" disabled>' + esc(T.sold) + '</button>'
        : '<button class="btn btn--primary btn--sm s-wish__add" type="button" data-wish-add="' + esc(e.id) + '" aria-label="' + esc(tpl(T.add_aria, { name: e.name })) + '">' + esc(T.add) + '</button>';
      return '<li class="s-wish__card">' +
        '<div class="s-wish__media">' + linked(urlOf(e, e.key), media(e.img, alt)) + '<div class="labels">' + labels(e.labels) + '</div>' + qvHTML(e.key, e.name) + '</div>' +
        '<div class="s-wish__info"><h2 class="s-wish__name">' + nameHTML(e, e.key) + '</h2>' +
        (e.size ? '<p class="s-wish__size">' + esc(e.size) + '</p>' : '') +
        '<p class="price s-wish__price">' + priceHTML(e) + '</p></div>' +
        '<div class="s-wish__acts">' + buy +
        '<button class="s-wish__rm" type="button" data-wish-rm="' + esc(e.id) + '" aria-label="' + esc(tpl(T.rm_aria, { name: e.name })) + '">' + esc(T.rm) + '</button></div>' +
        '</li>';
    }
    function suggestion(key) {
      var p = L().products[key]; if (!p) return '';
      var alt = p.size ? p.name + ', ' + p.size : p.name;
      return '<li class="s-wish__card s-wish__card--sugg">' +
        '<div class="s-wish__media">' + linked(urlOf(p, key), media(p.img, alt)) + '<div class="labels">' + labels(p.labels) + '</div>' + qvHTML(key, p.name) +
        '<button class="lv3-heart" type="button" data-wish="' + esc(key) + '" aria-pressed="false" aria-label="' + esc(tpl(T.save_aria, { name: p.name })) + '">' + heartSVG + '</button></div>' +
        '<div class="s-wish__info"><h3 class="s-wish__name">' + nameHTML(p, key) + '</h3>' +
        (p.size ? '<p class="s-wish__size">' + esc(p.size) + '</p>' : '') +
        '<p class="price s-wish__price">' + priceHTML({ price: +p.price || 0, compare: +p.compare || 0 }) + '</p></div>' +
        '<div class="s-wish__acts"><button class="btn btn--ghost btn--sm s-wish__add" type="button" data-add="' + esc(key) + '" aria-label="' + esc(tpl(T.add_aria, { name: p.name })) + '">' + esc(T.add) + '</button></div>' +
        '</li>';
    }
    function render() {
      var n = list.length;
      ul.innerHTML = list.map(card).join('');
      ul.hidden = !n;
      if (status) status.textContent = n === 1 ? T.one : n ? tpl(T.many, { count: n }) : T.zero;
      if (empty) empty.hidden = !!n;
      root.querySelectorAll('[data-wish-full]').forEach(function (el) { el.hidden = !n; });
      if (!n && sugg) {
        var keys = (sugg.getAttribute('data-keys') || '').split(',').map(function (k) { return k.trim(); }).filter(function (k) { return k && L().products[k]; });
        sugg.innerHTML = keys.slice(0, 4).map(suggestion).join('');
      }
      if (undoBox) {
        undoBox.hidden = !lastRemoved;
        undoBox.innerHTML = lastRemoved ? '<span>' + esc(tpl(T.removed, { name: lastRemoved.name })) + '</span><button type="button" data-wish-undo-btn>' + esc(T.undo) + '</button>' : '';
      }
      sync();
    }
    root.addEventListener('click', function (ev) {
      var a = ev.target.closest('[data-wish-add]'), r = ev.target.closest('[data-wish-rm]'), u = ev.target.closest('[data-wish-undo-btn]');
      if (a) { var i = indexOfId(a.getAttribute('data-wish-add')); if (i > -1 && L().add) L().add(bagKey(list[i]), 1); return; }
      if (r) {
        var at = indexOfId(r.getAttribute('data-wish-rm'));
        lastRemoved = removeAt(at, true); lastAt = at;
        clearTimeout(undoT); undoT = setTimeout(function () { lastRemoved = null; render(); }, 6000);
        render();
        var ub = root.querySelector('[data-wish-undo-btn]'); if (ub) ub.focus({ preventScroll: true });
        return;
      }
      if (u && lastRemoved) {
        var e = lastRemoved; lastRemoved = null; clearTimeout(undoT);
        if (indexOfId(e.id) < 0) { list.splice(Math.min(lastAt, list.length), 0, e); commit('add', e, true); }
        render();
        var btn = root.querySelector('[data-wish-rm="' + (window.CSS && CSS.escape ? CSS.escape(e.id) : e.id) + '"]'); if (btn) btn.focus({ preventScroll: true });
      }
    });
    document.addEventListener('lather:wish', function (ev) { if (!ev.detail || ev.detail.kind !== 'page') render(); });

    /* real products: fresh price, stock and variant from Shopify (fails quietly in the static demo) */
    var real = list.filter(function (e) { return e.url && /\/products\//.test(e.url); });
    if (real.length && window.fetch) {
      Promise.all(real.map(function (e) {
        return fetch(e.url.split('?')[0].replace(/\/$/, '') + '.js', { headers: { Accept: 'application/json' } })
          .then(function (r) { if (!r.ok) throw r; return r.json(); })
          .then(function (p) {
            var vs = p.variants || [], v = vs.filter(function (x) { return x.available; })[0] || vs[0];
            if (!v) return;
            e.name = p.title || e.name; e.price = v.price / 100; e.compare = v.compare_at_price > v.price ? v.compare_at_price / 100 : 0;
            e.variant = v.id; e.available = !!p.available;
            if (!e.img && p.featured_image) e.img = (String(p.featured_image).indexOf('//') === 0 ? 'https:' : '') + p.featured_image;
          })
          .catch(function () {});
      })).then(function () { store(); render(); });
    }
    render();
  }

  var eyeSVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>';
  var heartSVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20.4l-7.3-7.2a4.6 4.6 0 010-6.5 4.6 4.6 0 016.5 0l.8.8.8-.8a4.6 4.6 0 016.5 6.5z"/></svg>';

  function init() {
    sync(); watch();
    document.querySelectorAll('[data-lv3-wishlist]').forEach(page);
  }
  window.LATHER_WISH = { list: function () { return list.slice(); }, has: has, add: add, remove: remove, toggle: toggle, count: function () { return list.length; }, sync: sync, heart: heartSVG };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  /* theme editor: a reloaded section gets its hearts and page back */
  document.addEventListener('shopify:section:load', function (ev) { sync(); if (ev.target && ev.target.querySelectorAll) ev.target.querySelectorAll('[data-lv3-wishlist]').forEach(page); });
})();
