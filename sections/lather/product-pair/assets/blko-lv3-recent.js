/* Lather v3: recently viewed (port of home-v3 shared/40-recent.html; same code in both).
   Tracker (any page): remembers products the shopper opened in localStorage 'lather-recent' (newest first, max 12):
     - the product page: the element [data-recent-current] (a product key, or "entry" = its <script data-recent-entry> JSON)
     - quick view: any [data-quick="key"] click, and direct window.LATHER.quick(key) calls
   Entry: {k, name, size, price, img, url, t}. k = the product handle when the url has /products/<handle>, else the key,
   so one real product opened from different sections is stored once.
   Row (only where [data-recent] exists): shows up to data-max entries, never the current product, newest first.
   Nothing to show -> the section stays hidden; with data-recent-demo the static demo cards stay (HTML review);
   with data-recent-sample (Liquid theme editor) the page's own products fill the row as a sample.
   Real entries (url /products/<handle>) are refreshed from /products/<handle>.js: current title, price, image;
   a deleted product (404) is dropped from the history.
   window.LatherRecent = { list(), track(keyOrEntry), clear() }; fires 'lather:recent' on document with {items}. */
(function () {
  'use strict';
  if (window.LatherRecent) return;
  var K = 'lather-recent', MAX = 12;
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var handleOf = function (url) { var m = /\/products\/([^\/?#]+)/.exec(url || ''); return m ? decodeURIComponent(m[1]) : ''; };

  function read() {
    try { var a = JSON.parse(localStorage.getItem(K) || '[]'); return Array.isArray(a) ? a.filter(function (e) { return e && e.k && e.name; }) : []; }
    catch (e) { return []; }
  }
  function emit(a) { try { document.dispatchEvent(new CustomEvent('lather:recent', { detail: { items: a.slice() } })); } catch (e) {} }
  function write(a) { a = a.slice(0, MAX); try { localStorage.setItem(K, JSON.stringify(a)); } catch (e) {} emit(a); }

  function snap(k) {
    var L = window.LATHER, p = L && L.products && L.products[k];
    if (!p || !p.name) return null;
    return { k: k, name: p.name, size: p.size || '', price: +p.price || 0, img: p.img || '', url: p.url || '' };
  }
  function norm(e) {
    if (!e || !e.name) return null;
    var h = handleOf(e.url);
    return { k: String(h || e.k), name: String(e.name), size: e.size || '', price: +e.price || 0, img: e.img || '', url: e.url || '', t: Date.now() };
  }
  function track(x) {
    var e = norm(typeof x === 'string' ? snap(x) : x); if (!e) return;
    write([e].concat(read().filter(function (o) { return o.k !== e.k && !(e.url && o.url === e.url); })));
  }
  function clear() { try { localStorage.removeItem(K); } catch (e) {} emit([]); }
  window.LatherRecent = { list: read, track: track, clear: clear };

  /* quick view opens: capture phase, so it is recorded whatever the click handler after it does */
  document.addEventListener('click', function (e) {
    var q = e.target && e.target.closest && e.target.closest('[data-quick]');
    if (q && q.dataset.quick) track(q.dataset.quick);
  }, true);
  addEventListener('storage', function (e) { if (e.key === K) emit(read()); });

  function start() {
    var L = window.LATHER;
    if (L && L.quick && !L.quick.__recent) {
      var orig = L.quick, w = function (id) { track(id); return orig.apply(this, arguments); };
      w.__recent = true; L.quick = w;
    }
    var cur = document.querySelector('[data-recent-current]'), curKey = '';
    if (cur) {
      var raw = cur.getAttribute('data-recent-current') || '', entry = null;
      if (raw === 'entry') { try { entry = JSON.parse(cur.querySelector('script[data-recent-entry]').textContent); } catch (x) {} } else if (raw) entry = snap(raw);
      entry = norm(entry);
      if (entry) { curKey = entry.k; rows(curKey, entry.url); track(entry); }
    }
    if (!cur || !curKey) rows('', '');
  }

  function rows(curKey, curUrl) {
    document.querySelectorAll('[data-recent]').forEach(function (sec) { row(sec, curKey, curUrl); });
  }

  function row(sec, curKey, curUrl) {
    var list = sec.querySelector('[data-recent-list]'), status = sec.querySelector('[data-recent-status]');
    var S = { cleared: 'Viewing history cleared.', quick: 'Quick view' };
    try { var sj = sec.querySelector('script[data-recent-strings]'); if (sj) { var o = JSON.parse(sj.textContent); for (var k in o) if (o[k]) S[k] = o[k]; } } catch (e) {}
    var max = Math.max(1, +sec.getAttribute('data-max') || 4);
    var demo = sec.hasAttribute('data-recent-demo'), sample = sec.hasAttribute('data-recent-sample');
    var demoHTML = list ? list.innerHTML : '', cleared = false, sig = null;
    var fmt = function (n) { var L = window.LATHER; return L && L.fmt ? L.fmt(n) : '$' + (+n || 0); };
    var thumb = function (src) { if (!src || src.indexOf('/cdn/shop/') < 0 && src.indexOf('cdn.shopify.com') < 0) return src || ''; return /[?&]width=\d+/.test(src) ? src.replace(/([?&])width=\d+/, '$1width=240') : src + (src.indexOf('?') < 0 ? '?' : '&') + 'width=240'; };

    function items() {
      var a = read().filter(function (e) { return e.k !== curKey && !(curUrl && e.url === curUrl); });
      if (!a.length && sample && !cleared) {
        var P = (window.LATHER && window.LATHER.products) || {};
        a = Object.keys(P).map(snap).filter(Boolean).map(norm).filter(function (e) { return e && e.k !== curKey && !(curUrl && e.url === curUrl); });
      }
      return a.slice(0, max);
    }
    function card(e) {
      var L = window.LATHER;
      /* an entry viewed on another page: hand it to the runtime so its quick view works here */
      if (!e.url && L && L.products && !L.products[e.k]) L.products[e.k] = { name: e.name, size: e.size, price: e.price, compare: null, img: e.img, hover: '', labels: [], line: '', ing: '', variant: null, available: true, url: '' };
      var name = e.url
        ? '<a class="s-pdp-recent__name" href="' + esc(e.url) + '">' + esc(e.name) + '</a>'
        : '<button class="s-pdp-recent__name" type="button" data-quick="' + esc(e.k) + '" aria-label="' + esc(S.quick + ': ' + e.name) + '">' + esc(e.name) + '</button>';
      var img = e.img ? '<img src="' + esc(thumb(e.img)) + '" alt="" width="120" height="150" loading="lazy">' : '<span class="blko-lv3-ph" aria-hidden="true"></span>';
      return '<li class="s-pdp-recent__card">' + img + '<div class="s-pdp-recent__text">' + name + (e.size ? '<span class="small">' + esc(e.size) + '</span>' : '') + '</div><span class="price">' + esc(fmt(e.price)) + '</span></li>';
    }
    function render() {
      if (!list) return;
      var a = items();
      /* the same products already shown (e.g. one of them was just opened in quick view): keep the cards, so focus
         returns to the card when the quick view closes */
      var nsig = a.map(function (e) { return e.k + '|' + e.price + '|' + e.img + '|' + e.name; }).sort().join(',');
      if (a.length && nsig === sig) { refresh(a); return; }
      sig = a.length ? nsig : null;
      if (a.length) {
        list.innerHTML = a.map(card).join('');
        sec.hidden = false; sec.setAttribute('data-state', 'history');
      } else if (demo && !cleared) {
        list.innerHTML = demoHTML; sec.hidden = false; sec.setAttribute('data-state', 'demo');
      } else {
        sec.hidden = true; sec.setAttribute('data-state', 'empty');
      }
      refresh(a);
    }
    var asked = {};
    function refresh(a) {
      var CFG = window.LATHER_CFG || {}, root = CFG.root || '/';
      if (root.slice(-1) !== '/') root += '/';
      if (!window.fetch || location.protocol === 'file:') return;
      a.forEach(function (e) {
        var h = handleOf(e.url); if (!h || asked[h]) return; asked[h] = 1;
        fetch(root + 'products/' + encodeURIComponent(h) + '.js', { headers: { Accept: 'application/json' } }).then(function (r) {
          if (r.status === 404) return 'gone';
          return r.ok ? r.json() : null;
        }).then(function (p) {
          var all = read(), i = -1;
          all.forEach(function (o, j) { if (o.k === h) i = j; });
          if (i < 0 || !p) return;
          if (p === 'gone') { all.splice(i, 1); write(all); return; }
          var o = all[i], img = p.featured_image || '';
          if (img && img.indexOf('//') === 0) img = 'https:' + img;
          var nx = { name: p.title || o.name, price: typeof p.price === 'number' ? p.price / 100 : o.price, img: img || o.img, url: p.url || o.url };
          if (nx.name !== o.name || nx.price !== o.price || nx.img !== o.img || nx.url !== o.url) { for (var k in nx) o[k] = nx[k]; write(all); }
        }).catch(function () {});
      });
    }
    var clr = sec.querySelector('[data-recent-clear]');
    if (clr) clr.addEventListener('click', function () {
      cleared = true; clear();
      if (status) status.textContent = S.cleared;
      var next = sec.nextElementSibling && sec.nextElementSibling.querySelector('a, button, [tabindex]');
      if (next) next.focus({ preventScroll: true });
    });
    document.addEventListener('lather:recent', render);
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
