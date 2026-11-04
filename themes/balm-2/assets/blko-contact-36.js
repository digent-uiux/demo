// contact-36: today's date on the sheet; live word count; every blank checked before the real contact form posts
// (the summary links focus each blank); "Sealing…" while it posts. After a successful post the sealed note repeats the
// name, topic and email (kept in sessionStorage for this one hop) and takes focus.
(() => {
  const KEY = 'blko-ct36-letter';
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const sealed = root.querySelector('[data-sealed]');
    if (sealed) {
      let v = null; try { v = JSON.parse(sessionStorage.getItem(KEY) || 'null'); sessionStorage.removeItem(KEY); } catch (e) {}
      if (v && v.name) root.querySelector('[data-sealed-h]').textContent = sealed.dataset.named.replace('{name}', v.name.trim().split(/\s+/)[0]);
      if (v && v.email && v.topic) root.querySelector('[data-sealed-p]').textContent = sealed.dataset.full.replace('{topic}', v.topic).replace('{email}', v.email);
      root.querySelector('[data-sealed-h]').focus({ preventScroll: true });
      return;
    }
    const form = root.querySelector('form'); if (!form) return;
    const date = root.querySelector('[data-date]');
    if (date) {
      const d = new Date();
      date.innerHTML = '';
      const t = document.createElement('time'); t.dateTime = d.toISOString().slice(0, 10);
      t.textContent = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
      date.append(t);
    }
    const msg = form.querySelector('[data-f="message"]'), wc = root.querySelector('[data-words]');
    const words = () => (msg.value.trim() ? msg.value.trim().split(/\s+/).length : 0);
    const count = () => { const n = words(); wc.textContent = n + ' ' + (n === 1 ? wc.dataset.one : wc.dataset.many); };
    msg.addEventListener('input', count); count();
    const topic = form.querySelector('[data-f="topic"]');
    if (topic) topic.addEventListener('change', () => topic.classList.toggle('is-empty', !topic.value));
    const fields = [...form.querySelectorAll('[data-f]')];
    fields.forEach((f) => f.addEventListener('input', () => { if (f.getAttribute('aria-invalid') === 'true') { f.removeAttribute('aria-invalid'); f.removeAttribute('aria-describedby'); } }));
    const live = root.querySelector('[data-live]'), tpl = root.querySelector('template[data-errtpl]');
    let busy = false;
    form.addEventListener('submit', (e) => {
      if (busy) { e.preventDefault(); return; }
      const bad = fields.filter((f) => {
        const v = f.value.trim(), k = f.dataset.f;
        if (k === 'email') return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        if (k === 'message') return words() < (+f.dataset.min || 1);
        return !v;
      });
      fields.forEach((f) => { f.removeAttribute('aria-invalid'); f.removeAttribute('aria-describedby'); });
      live.textContent = '';
      if (bad.length) {
        e.preventDefault();
        const box = tpl.content.firstElementChild.cloneNode(true);
        const head = box.querySelector('[data-errhead]');
        head.textContent = bad.length === 1 ? head.dataset.one : head.dataset.many.replace('{n}', bad.length);
        const ul = box.querySelector('[data-errlist]');
        bad.forEach((f) => {
          const li = document.createElement('li'); li.id = f.id + '-err';
          const a = document.createElement('a'); a.href = '#' + f.id; a.textContent = f.dataset.err;
          a.addEventListener('click', (ev) => { ev.preventDefault(); f.focus(); });
          li.append(a); ul.append(li);
          f.setAttribute('aria-invalid', 'true'); f.setAttribute('aria-describedby', li.id);
        });
        live.append(box);
        bad[0].focus();
        return;
      }
      busy = true;
      form.setAttribute('aria-busy', 'true');
      const lbl = form.querySelector('[data-label]'); if (lbl) lbl.textContent = lbl.dataset.busy;
      try { sessionStorage.setItem(KEY, JSON.stringify({ name: form.querySelector('[data-f="name"]').value, email: form.querySelector('[data-f="email"]').value.trim(), topic: topic ? topic.value : '' })); } catch (er) {}
    });
  }
  const all = () => document.querySelectorAll('.bcontact36').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
