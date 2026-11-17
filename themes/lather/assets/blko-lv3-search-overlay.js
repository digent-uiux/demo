/* Lather v3 search overlay with predictive results (home-v3 shared/10-search.html, same code in both).
   Markup: #srch with <script type="application/json" data-srch-cfg>:
     { live, suggestUrl, searchUrl, searchParams, types, limit, fallbackUrl, pages:{key:url}, extra:{key:'keywords'},
       loved:[keys], popular:[terms], suggest:[terms], strings:{...} }
   - Opens from any [data-search-open] (the header icon; its href is the search page, so it works without JS) and "/".
     On the search page itself the icon focuses that page's field instead.
   - live + a real storefront (window.Shopify.shop): GET suggestUrl (/search/suggest.json) for products, queries, articles.
     Otherwise, or when the request fails: filters window.LATHER.products in the browser (demo / preview / HTML).
   - Enter submits the GET form to the search page; "See all" links there too.
   - Layers: LATHER.openLayer / closeAll (scrim, Esc, focus return). closeAll only knows the drawer, quick view and
     popup, so a MutationObserver on #scrim hides this overlay when the scrim closes or another layer opens. */
(function () {
  'use strict';
  function boot() {
    var el = document.getElementById('srch');
    if (!el || el.__srch) return;
    el.__srch = 1;
    var C = {};
    try { C = JSON.parse(el.querySelector('script[data-srch-cfg]').textContent) || {}; } catch (e) {}
    var S = C.strings || {};
    var q$ = function (s) { return el.querySelector(s); };
    var form = q$('[data-srch-form]'), input = q$('[data-srch-input]'), list = q$('[data-srch-list]'), head = q$('[data-srch-head]'),
      status = q$('[data-srch-status]'), side = q$('[data-srch-side]'), all = q$('[data-srch-all]'), empty = q$('[data-srch-empty]');
    if (!form || !input || !list) return;
    var scrim = document.getElementById('scrim');
    var L = function () { return window.LATHER || {}; };
    var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
    var tpl = function (s, m) { return String(s || '').replace(/\[(\w+)\]/g, function (a, k) { return k in m ? m[k] : a; }); };
    var norm = function (v) { return String(v || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); };
    var fmt = function (n) { return L().fmt ? L().fmt(n) : '$' + n; };
    var limit = Math.max(2, Math.min(8, +C.limit || 4));
    var enc = encodeURIComponent;
    function searchHref(q) {
      var u = C.searchUrl || 'search.html';
      return q ? u + (u.indexOf('?') > -1 ? '&' : '?') + 'q=' + enc(q) + (C.searchParams || '') : u;
    }
    function mark(t, q) {
      var ts = String(q || '').trim().split(/\s+/).filter(Boolean).map(function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
      if (!ts.length) return esc(t);
      var re = new RegExp('(' + ts.join('|') + ')', 'ig');
      return String(t).split(re).map(function (s, i) { return i % 2 ? '<mark>' + esc(s) + '</mark>' : esc(s); }).join('');
    }
    function ph() { var t = document.getElementById('lv3-ph'); return t ? t.innerHTML : ''; }

    /* ---------- local index (window.LATHER.products) ---------- */
    function hitOf(k, p) {
      var url = p.url || (C.pages || {})[k] || (L().url ? L().url(k) : '') || '';
      return { key: k, name: p.name, size: p.size || '', price: +p.price || 0, compare: +p.compare || 0, img: p.img || '', url: url || C.fallbackUrl || '#', quick: !url };
    }
    function index() {
      var P = L().products || {};
      return Object.keys(P).filter(function (k) { return P[k] && P[k].name; }).map(function (k) {
        var p = P[k], ff = (p.labels || []).indexOf('ff') > -1;
        return { k: k, p: p, nm: norm(p.name), words: norm([p.name, p.size, p.line, p.ing, (C.extra || {})[k], ff ? 'fragrance free unscented no scent' : 'scented'].join(' ')) };
      });
    }
    function local(q) {
      var terms = norm(q).split(' ').filter(Boolean), nq = norm(q);
      var hits = index().filter(function (x) { return terms.every(function (t) { return x.words.indexOf(t) > -1; }); })
        .map(function (x) { var s = x.nm.indexOf(nq) === 0 ? 3 : x.nm.indexOf(nq) > -1 ? 2 : terms.some(function (t) { return x.nm.indexOf(t) > -1; }) ? 1 : 0; return { x: x, s: s }; })
        .sort(function (a, b) { return b.s - a.s; })
        .map(function (o) { return hitOf(o.x.k, o.x.p); });
      var queries = (C.suggest || []).filter(function (s) { var n = norm(s); return n !== nq && n.indexOf(nq) > -1; })
        .sort(function (a, b) { return (norm(b).indexOf(nq) === 0) - (norm(a).indexOf(nq) === 0); })
        .slice(0, 4).map(function (s) { return { text: s, url: searchHref(s) }; });
      return { total: hits.length, hits: hits.slice(0, limit), queries: queries, articles: [] };
    }
    function loved() {
      var P = L().products || {};
      var keys = (C.loved || []).filter(function (k) { return P[k] && P[k].name; });
      if (!keys.length) keys = Object.keys(P).filter(function (k) { return P[k] && P[k].name; });
      return keys.slice(0, limit).map(function (k) { return hitOf(k, P[k]); });
    }

    /* ---------- live (Shopify predictive search) ---------- */
    var liveOk = !!(C.live && C.suggestUrl && window.fetch && window.Shopify && window.Shopify.shop), ctrl = null;
    function sized(src) {
      if (!src) return '';
      try { var u = new URL(src, location.href); u.searchParams.set('width', '400'); return u.toString(); } catch (e) { return src; }
    }
    function live(q) {
      if (ctrl) ctrl.abort();
      ctrl = window.AbortController ? new AbortController() : null;
      var u = C.suggestUrl + '?q=' + enc(q) + '&resources[type]=' + enc(C.types || 'product,query') + '&resources[limit]=' + limit +
        '&resources[options][unavailable_products]=last&resources[options][fields]=title,product_type,variants.title,vendor,tag,body';
      return fetch(u, { signal: ctrl ? ctrl.signal : undefined, headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('suggest ' + r.status); return r.json(); })
        .then(function (d) {
          var R = (d && d.resources && d.resources.results) || {};
          var hits = (R.products || []).map(function (p) {
            var img = p.image || (p.featured_image && p.featured_image.url) || '';
            var price = parseFloat(p.price) || 0, cmp = parseFloat(p.compare_at_price_max) || 0;
            return { key: '', name: p.title, size: '', price: price, compare: cmp > price ? cmp : 0, img: sized(img), url: p.url, quick: false };
          });
          return {
            total: hits.length, hits: hits,
            queries: (R.queries || []).filter(function (x) { return norm(x.text) !== norm(q); }).slice(0, 4).map(function (x) { return { text: x.text, url: x.url || searchHref(x.text) }; }),
            articles: (R.articles || []).slice(0, 2).map(function (a) { return { title: a.title, url: a.url }; })
          };
        });
    }

    /* ---------- render ---------- */
    function cards(hits, q) {
      return hits.map(function (h, i) {
        var img = h.img ? '<img src="' + esc(h.img) + '" alt="" loading="lazy" width="400" height="500">' : ph();
        var price = esc(fmt(h.price)) + (h.compare ? ' <s>' + esc(fmt(h.compare)) + '</s>' : '');
        return '<li class="srch__item" style="--i:' + i + '"><a class="srch__card" href="' + esc(h.url) + '" data-srch-item' + (h.quick ? ' data-quick="' + esc(h.key) + '"' : '') + '>' +
          '<span class="srch__img">' + img + '</span><span class="srch__txt"><span class="srch__name">' + mark(h.name, q) + '</span>' +
          '<span class="srch__meta"><span class="small">' + esc(h.size) + '</span><span class="price">' + price + '</span></span></span></a></li>';
      }).join('');
    }
    function chips() {
      var pop = C.popular || [];
      if (!pop.length) return '';
      return '<div class="srch__block"><h2 class="srch__h">' + esc(S.popular) + '</h2><div class="srch__chips">' +
        pop.map(function (t) { return '<button class="chip" type="button" data-srch-term="' + esc(t) + '">' + esc(t) + '</button>'; }).join('') + '</div></div>';
    }
    function sideHTML(q, r) {
      var h = '';
      if (q && r.queries.length) h += '<div class="srch__block"><h2 class="srch__h">' + esc(S.suggest) + '</h2><ul class="srch__sug">' +
        r.queries.map(function (x) { return '<li><a href="' + esc(x.url) + '" data-srch-item>' + mark(x.text, q) + '</a></li>'; }).join('') + '</ul></div>';
      if (q && r.articles.length) h += '<div class="srch__block"><h2 class="srch__h">' + esc(S.journal) + '</h2><ul class="srch__sug">' +
        r.articles.map(function (x) { return '<li><a href="' + esc(x.url) + '" data-srch-item>' + mark(x.title, q) + '</a></li>'; }).join('') + '</ul></div>';
      return h + chips();
    }
    function paint(q, r) {
      var hits = q ? r.hits : loved();
      head.textContent = q ? S.results : S.loved;
      list.innerHTML = cards(hits, q);
      list.hidden = !hits.length;
      if (empty) { empty.hidden = !(q && !hits.length); empty.textContent = tpl(S.empty, { q: q }); }
      if (status) status.textContent = q ? tpl(r.total === 1 ? S.count_one : S.count_many, { count: r.total, q: q }) : '';
      if (all) { all.hidden = !q; all.href = searchHref(q); all.textContent = tpl(S.see_all, { q: q }); }
      if (side) side.innerHTML = sideHTML(q, r);
    }
    var seq = 0, timer = 0;
    function run(raw) {
      var q = String(raw || '').trim().slice(0, 100), my = ++seq;
      if (!q) { if (ctrl) ctrl.abort(); paint('', { hits: [], total: 0, queries: [], articles: [] }); return; }
      if (!liveOk) { paint(q, local(q)); return; }
      if (status) status.textContent = S.loading || '';
      live(q).then(function (r) { if (my === seq) paint(q, r); }, function (e) {
        if (e && e.name === 'AbortError') return;
        liveOk = false;
        if (my === seq) paint(q, local(q));
      });
    }
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { run(input.value); }, 140); });
    form.addEventListener('submit', function (e) { if (!input.value.trim()) { e.preventDefault(); input.focus(); } });
    el.addEventListener('click', function (e) {
      var t = e.target.closest('[data-srch-term]');
      if (t) { input.value = t.getAttribute('data-srch-term'); clearTimeout(timer); run(input.value); input.focus(); }
    });

    /* ---------- open / close ---------- */
    var triggers = function () { return document.querySelectorAll('[data-search-open]'); };
    function setExpanded(v) { triggers().forEach(function (b) { b.setAttribute('aria-expanded', v ? 'true' : 'false'); }); }
    function hide() { if (!el.classList.contains('open')) return; el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); setExpanded(false); }
    function open() {
      var lt = L();
      if (!lt.openLayer) { location.href = searchHref(''); return; }
      var mnav = document.getElementById('mnav'); if (mnav) mnav.classList.remove('open');
      lt.openLayer(el);
      el.setAttribute('aria-hidden', 'false');
      setExpanded(true);
      run(input.value);
      setTimeout(function () { input.focus({ preventScroll: true }); if (input.value) input.select(); }, 80);
    }
    function pageField() {
      var f = document.querySelector('[data-lv3-search-input], #latherSearchQuery');
      return f && !el.contains(f) ? f : null;
    }
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-search-open]');
      if (!b || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      var f = pageField();
      if (f) { f.scrollIntoView({ block: 'center', behavior: 'smooth' }); f.focus({ preventScroll: true }); return; }
      open();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey || el.classList.contains('open')) return;
      var a = document.activeElement, tag = a && a.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (a && a.isContentEditable)) return;
      if (document.querySelector('.drawer.open,.qv.open,.pop.open')) return;
      e.preventDefault();
      var f = pageField(); if (f) { f.focus(); return; }
      open();
    });
    if (scrim && window.MutationObserver) {
      new MutationObserver(function () {
        if (!el.classList.contains('open')) return;
        if (!scrim.classList.contains('open') || document.querySelector('.drawer.open,.qv.open,.pop.open')) hide();
      }).observe(scrim, { attributes: true, attributeFilter: ['class'] });
    }
    /* keyboard: Tab stays inside, arrows move between the field and the results */
    el.addEventListener('keydown', function (e) {
      if (!el.classList.contains('open')) return;
      var vis = function (n) { return n.offsetParent !== null || n === input; };
      if (e.key === 'Tab') {
        var f = [].slice.call(el.querySelectorAll('a[href], button:not([disabled]), input:not([type="hidden"])')).filter(vis);
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        var items = [input].concat([].slice.call(list.querySelectorAll('[data-srch-item]')), [].slice.call(side ? side.querySelectorAll('[data-srch-item]') : [])).filter(vis);
        var i = items.indexOf(document.activeElement);
        if (i < 0) return;
        e.preventDefault();
        var n = items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length];
        n.focus();
      }
    });
    paint('', { hits: [], total: 0, queries: [], articles: [] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
