/* Lather v3 skin quiz (parts/20-quiz.html). Answers and result products come from the section's [data-quiz-map]
   JSON (Liquid); names and prices from window.LATHER.products, images from <template data-quiz-img="key">. */
(() => {
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function init(root) {
    if (!root || root.dataset.lv3Ready) return;
    let MAP = null;
    try { MAP = JSON.parse(root.querySelector('[data-quiz-map]').textContent); } catch (e) { return; }
    root.dataset.lv3Ready = '1';
    const steps = [...root.querySelectorAll('.s-quiz__step')];
    const bars = [...root.querySelectorAll('.s-quiz__prog i')];
    const res = root.querySelector('.s-quiz__res');
    const motion = document.documentElement.classList.contains('motion');
    const ans = { feel: null, who: null };
    // photo settles when the section comes into view
    if (motion) new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { root.classList.add('in'); o.disconnect(); } }, { threshold: .2 }).observe(root);
    function show(name) {
      const i = steps.findIndex(s => s.dataset.step === name);
      steps.forEach((s, j) => { s.classList.toggle('is-on', j === i); s.setAttribute('aria-hidden', j === i ? 'false' : 'true'); s.inert = j !== i; });
      bars.forEach((b, j) => b.classList.toggle('on', j <= Math.min(i, 1) || i === 2));
      const f = steps[i].querySelector('.s-quiz__q, h3');
      if (f) setTimeout(() => f.focus({ preventScroll: true }), motion ? 300 : 0);
    }
    steps.forEach((s, j) => { s.inert = j !== 0; });
    const prod = (L, key, fallback) => (L && L.products && L.products[key]) || { name: fallback };
    function result() {
      const L = window.LATHER;
      const a = MAP.feel[ans.feel]; if (!a) return;
      const kid = MAP.kid, d = res.dataset;
      let pre, ids, names, line;
      if (ans.who === 'kid') { ids = [kid.key]; names = [kid.name]; pre = d.preKid; line = kid.line; }
      else if (ans.who === 'both') { ids = [a.key, kid.key]; names = [a.name, kid.name]; pre = d.preBoth; line = a.both; }
      else { ids = [a.key]; names = [a.name]; pre = d.preMe; line = a.why; }
      const ps = ids.map((id, i) => prod(L, id, names[i]));
      const name = ps.map(p => p.name).join(' + ');
      const priced = L && L.fmt && ps.every(p => typeof p.price === 'number' || (p.price !== '' && p.price != null && !isNaN(+p.price)));
      const money = priced ? L.fmt(ps.reduce((s, p) => s + +p.price, 0)) : '';
      const t = document.querySelector(`template[data-quiz-img="${CSS.escape(ids[0])}"]`);
      const add = (ids.length > 1 ? d.addBoth : d.addOne) + (money ? `, ${money}` : '');
      res.innerHTML = `${t ? t.innerHTML : ''}
        <div>
          <p class="pre">${esc(pre)}</p>
          <h3 tabindex="-1">${esc(name)}</h3>
          <p class="why">${esc(line)}</p>
          ${money ? `<p class="price">${esc(money)}</p>` : ''}
          <div class="row">
            <button class="btn btn--light" type="button" data-quiz-add>${esc(add)}</button>
            <button class="again" type="button" data-again>${esc(d.again)}</button>
          </div>
        </div>`;
      const im = res.querySelector('img'); if (im) im.alt = ps[0].name || '';
      res.querySelector('[data-quiz-add]').addEventListener('click', () => { if (L && L.add) ids.forEach(id => L.add(id)); });
      res.querySelector('[data-again]').addEventListener('click', () => {
        ans.feel = ans.who = null;
        root.querySelectorAll('.s-quiz__opts .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
        show('feel');
      });
    }
    const pick = (attr, key, nextStep) => root.querySelectorAll(`[data-${attr}]`).forEach(c => c.addEventListener('click', () => {
      root.querySelectorAll(`[data-${attr}]`).forEach(o => o.setAttribute('aria-pressed', o === c ? 'true' : 'false'));
      ans[key] = c.dataset[attr];
      if (nextStep === 'res') result();
      setTimeout(() => show(nextStep), motion ? 260 : 0);
    }));
    pick('feel', 'feel', 'who');
    pick('who', 'who', 'res');
    const back = root.querySelector('[data-back]'); if (back) back.addEventListener('click', () => show('feel'));
    root._lv3Show = show;
  }
  const all = (scope) => (scope || document).querySelectorAll('[data-lv3-quiz]').forEach(init);
  // Like the HTML: start on DOMContentLoaded (after every deferred script, the runtime included).
  if (document.readyState === 'complete') all(); else document.addEventListener('DOMContentLoaded', () => all());
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
