/* Lather v3 product page, buy box (pages/product/10-buy.html). Quantity, gallery, variant radios, subscribe & save,
   back in stock, add via window.LATHER, sticky mobile bar.
   Real product: the form posts id + quantity (+ selling_plan); JS sends it through LATHER.add. A subscription goes
   through LATHER.add(key, qty, { selling_plan }) when the runtime says it supports it (LATHER.sellingPlans), else the
   form posts natively so the plan is never dropped. Back in stock posts the Shopify contact form natively.
   Demo (no product): sizes and plans from the JSON + settings, demo cart lines, notify thanks kept in localStorage. */
(function () {
  'use strict';
  var NK = 'lather-notify';
  function json(root, sel, fb) { var el = root.querySelector(sel); if (!el) return fb; try { return JSON.parse(el.textContent); } catch (e) { return fb; } }
  function lsGet() { try { return JSON.parse(localStorage.getItem(NK) || '{}') || {}; } catch (e) { return {}; } }
  function lsSet(o) { try { localStorage.setItem(NK, JSON.stringify(o)); } catch (e) {} }
  function init(root) {
    var L = window.LATHER;
    if (!root || !L || root.__pdp) return;
    var key = root.dataset.key, p = L.products[key];
    if (!p) return;
    root.__pdp = true;
    var real = root.dataset.real === '1';
    var S = json(root, 'script[data-pdp-strings]', {}), variants = json(root, 'script[data-pdp-variants]', []);
    var max = +root.dataset.max || 20, pct = +root.dataset.pct || 0;
    var input = root.querySelector('#pdp-qty'), mobile = root.querySelector('#pdp-mobile-buy');
    var buyBtn = root.querySelector('#pdp-purchase [data-pdp-add]');
    var form = root.querySelector('form.s-pdp-buy__form');
    var notify = root.querySelector('#pdp-notify'), nForm = notify && notify.closest('form'), nAsk = notify && notify.querySelector('[data-pdp-notify-ask]');
    var nEmail = root.querySelector('#pdp-notify-email'), nMsg = root.querySelector('#pdp-notify-msg'), nDone = notify && notify.querySelector('[data-pdp-notify-done]');
    var posted = !!(notify && notify.dataset.posted === '1');
    var tpl = function (s, m) { return String(s || '').replace(/\[(\w+)\]/g, function (a, k) { return k in m ? m[k] : a; }); };
    var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
    var set = function (sel, v, html) { var el = root.querySelector(sel); if (el) el[html ? 'innerHTML' : 'textContent'] = v; };
    var round = function (n) { return Math.round(n * 100) / 100; };
    var qty = function () { return Math.max(1, Math.min(max, Math.floor(Number(input.value) || 1))); };
    var radios = root.querySelectorAll('[data-pdp-variant]');
    var current = function () {
      var r = root.querySelector('[data-pdp-variant]:checked');
      var v = r && variants.find(function (x) { return String(x.id) === r.value; });
      return v || variants[0] || { id: p.variant || key, title: p.size, short: p.size, price: p.price, available: p.available !== false, plans: {} };
    };
    var soldOut = function () { return current().available === false; };
    var plan = function () { var r = root.querySelector('input[name="selling_plan"]:checked'); return r && r.value ? r : null; };
    function planPrice(v, id) {
      if (real) { var pr = v.plans && v.plans[String(id)]; return pr != null ? +pr : null; }
      return round(v.price * (100 - pct) / 100);
    }
    var each = function () { var v = current(), pl = plan(), pp = pl ? planPrice(v, pl.value) : null; return pp != null ? pp : v.price; };
    var nkey = function () { return key + ':' + current().id; };

    function update() {
      var v = current(), q = qty(), pl = plan(), out = soldOut(), total = L.fmt(round(each() * q));
      input.value = q;
      root.querySelector('[data-pdp-qty="-1"]').disabled = q === 1;
      root.querySelector('[data-pdp-qty="1"]').disabled = q === max;
      root.classList.toggle('is-out', out);
      if (buyBtn) {
        buyBtn.textContent = out ? (notify ? S.notify_btn : S.sold_out) : tpl(S.add, { amount: total });
        if (out && notify) buyBtn.setAttribute('aria-expanded', String(!notify.hidden)); else buyBtn.removeAttribute('aria-expanded');
        buyBtn.disabled = out && !notify;
      }
      var mb = mobile && mobile.querySelector('[data-pdp-add]');
      if (mb) { mb.textContent = out ? (notify ? S.notify_btn : S.sold_out) : S.mobile_add; mb.disabled = out && !notify; }
      set('[data-pdp-mobile-price]', out ? S.sold_out : total);
      /* plan prices for this variant; a plan the variant is not sold on is disabled */
      set('[data-plan-once]', L.fmt(v.price));
      var first = root.querySelector('.s-pdp-buy__chip input');
      root.querySelectorAll('.s-pdp-buy__chip input').forEach(function (r) {
        var ok = planPrice(v, r.value) != null; r.disabled = !ok; if (!ok && r.checked) { r.checked = false; var once = root.querySelector('input[name="selling_plan"][value=""]'); if (once) once.checked = true; }
      });
      var head = root.querySelector('.s-pdp-buy__opt-head[for]'), hid = head && document.getElementById(head.htmlFor);
      var sp = planPrice(v, (pl || hid || first || {}).value);
      if (sp != null) set('[data-plan-sub]', L.fmt(sp));
      set('#pdp-quantity-note', out ? '' : q > 1 ? tpl(pl ? S.qty_note_sub : S.qty_note, { n: q, amount: total }) : '');
      if (!out && !posted) closeNotify();
    }
    function showPrice() { var v = current(); set('[data-pdp-price]', esc(L.fmt(v.price)) + (v.compare > v.price ? ' <s>' + esc(L.fmt(v.compare)) + '</s>' : ''), true); set('[data-pdp-unit]', v.unit || ''); }

    /* ---------- back in stock ---------- */
    function showDone(email) {
      if (nAsk) nAsk.hidden = true; if (!nDone) return; nDone.hidden = false;
      var t = esc(tpl(S.notify_done, { email: '\u0000', size: current().short || current().title || '' })).replace('\u0000', '<b>' + esc(email) + '</b>');
      set('[data-pdp-notify-done-text]', t, true);
    }
    function openNotify(focus) {
      if (!notify) return;
      var v = current(), saved = lsGet()[nkey()];
      notify.hidden = false; root.classList.add('is-asking'); if (buyBtn) buyBtn.setAttribute('aria-expanded', 'true');
      set('[data-pdp-notify-note]', tpl(S.notify_note, { size: v.short || v.title || S.name }));
      var line = root.querySelector('[data-pdp-notify-line]');
      if (line) line.value = (line.dataset.name || S.name || '') + (v.title && !/default title/i.test(v.title) ? ', ' + v.title : '') + (real ? ' (variant ' + v.id + ')' : '');
      if (saved) { showDone(saved); if (focus !== false) nDone.focus({ preventScroll: true }); }
      else { if (nAsk) nAsk.hidden = false; if (nDone) nDone.hidden = true; if (nMsg) nMsg.textContent = ''; if (nEmail) { nEmail.removeAttribute('aria-invalid'); if (focus !== false) nEmail.focus({ preventScroll: true }); } }
    }
    function closeNotify() { if (!notify) return; notify.hidden = true; root.classList.remove('is-asking'); }
    if (nForm) {
      nForm.addEventListener('submit', function (e) {
        var em = nEmail.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) { e.preventDefault(); nEmail.setAttribute('aria-invalid', 'true'); nMsg.textContent = S.notify_bad; nEmail.focus(); return; }
        nEmail.removeAttribute('aria-invalid');
        var o = lsGet(); o[nkey()] = em; lsSet(o);
        if (!real) { e.preventDefault(); showDone(em); nDone.focus({ preventScroll: true }); }
        /* real store: the contact form posts to Shopify and the page comes back with the thanks */
      });
      nEmail.addEventListener('input', function () { if (nEmail.getAttribute('aria-invalid')) { nEmail.removeAttribute('aria-invalid'); nMsg.textContent = ''; } });
      var again = notify.querySelector('[data-pdp-notify-again]');
      if (again) again.addEventListener('click', function () { var o = lsGet(); delete o[nkey()]; lsSet(o); posted = false; if (nAsk) nAsk.hidden = false; nDone.hidden = true; nEmail.value = ''; nEmail.focus(); });
    }

    /* ---------- buy ---------- */
    function add(e, from) {
      update();
      if (soldOut()) {
        if (e) e.preventDefault();
        if (from && mobile && mobile.contains(from)) root.querySelector('#pdp-purchase').scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        openNotify(); return;
      }
      var pl = plan(), q = qty(), v = current();
      if (pl && real) {
        if (L.sellingPlans) { if (e) e.preventDefault(); L.add(key, q, { selling_plan: +pl.value }); }
        else if (form) { if (e && e.type === 'submit') return; form.submit(); }
        return;
      }
      if (e) e.preventDefault();
      if (pl) L.add(key, q, { key: key + '-' + v.id + '-' + pl.value, price: each(), note: tpl(S.sub_note, { size: v.short || v.title, plan: (pl.dataset.planName || '').toLowerCase(), percent: pct + '%' }) });
      else if (!real && v.id !== 'd1' && variants.length > 1) L.add(key, q, { key: key + '-' + v.id, price: v.price, note: v.short || v.title });
      else L.add(key, q);
    }
    root.querySelectorAll('[data-pdp-qty]').forEach(function (b) { b.addEventListener('click', function () { input.value = qty() + Number(b.dataset.pdpQty); update(); }); });
    input.addEventListener('change', update);
    root.querySelectorAll('[data-pdp-add]').forEach(function (b) { if (b.type !== 'submit') b.addEventListener('click', function (e) { add(e, b); }); });
    if (form) form.addEventListener('submit', function (e) { add(e, buyBtn); });
    root.querySelectorAll('input[name="selling_plan"]').forEach(function (r) { r.addEventListener('change', update); });

    /* gallery */
    var thumbs = root.querySelectorAll('.s-pdp-buy__thumb');
    function pick(b) {
      thumbs.forEach(function (t) { t.setAttribute('aria-pressed', String(t === b)); });
      var im = root.querySelector('#pdp-main-image');
      if (im && b.dataset.pdpImage) { if (b.dataset.srcset) im.srcset = b.dataset.srcset; im.src = b.dataset.pdpImage; im.alt = b.dataset.alt || ''; }
      set('#pdp-image-caption', b.dataset.caption || '');
    }
    thumbs.forEach(function (b) { b.addEventListener('click', function () { pick(b); }); });

    /* variants: real radios named "id", demo radios named "pdp-size" */
    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        var v = current();
        posted = false; closeNotify();
        if (real) { p.variant = v.id; p.price = +v.price || 0; p.compare = +v.compare || 0; p.available = v.available; p.size = v.title; }
        showPrice();
        set('[data-pdp-mobile-name]', (S.name || p.name) + ', ' + (v.short || v.title));
        if (real && v.media) { var t = root.querySelector('.s-pdp-buy__thumb[data-media-id="' + v.media + '"]'); if (t) pick(t); }
        if (real) { try { var u = new URL(location.href); u.searchParams.set('variant', v.id); history.replaceState(history.state, '', u.toString()); } catch (e) {} }
        update();
        document.dispatchEvent(new CustomEvent('lather:pdp-variant', { detail: { key: key } }));
      });
    });

    showPrice();
    set('#pdp-labels', L.labelsHTML(p.labels), true);
    update();
    if (soldOut() && notify && !posted) openNotify(false);

    /* sticky bar on phones while the buy row (or the notify form) is out of view */
    if (mobile && 'IntersectionObserver' in window) {
      var mq = matchMedia('(max-width:760px)'), seen = new Map(), visible = true;
      var refresh = function () { mobile.hidden = !mq.matches || visible; };
      var io = new IntersectionObserver(function (es) { es.forEach(function (en) { seen.set(en.target, en.isIntersecting); }); visible = Array.from(seen.values()).some(Boolean); refresh(); }, { threshold: 0 });
      [root.querySelector('#pdp-purchase'), notify].forEach(function (el) { if (el) io.observe(el); });
      if (mq.addEventListener) mq.addEventListener('change', refresh);
      window.addEventListener('pagehide', function () { io.disconnect(); }, { once: true });
    }
  }
  document.addEventListener('DOMContentLoaded', function () { document.querySelectorAll('.s-pdp-buy').forEach(init); });
  document.addEventListener('shopify:section:load', function (e) { var r = e.target.querySelector && e.target.querySelector('.s-pdp-buy'); if (r) setTimeout(function () { init(r); }, 0); });
})();
