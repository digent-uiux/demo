// contact-38: the write slip checks its two fields before posting (inline errors, focus on the first), a posted form
// takes focus on its "Received" stamp, the chat button opens Shopify Inbox if the store has it (else jumps to the
// write slip), and each call slip gets an open / closed line worked out in the studio's time zone.
(() => {
  function openLine(el) {
    const tz = el.dataset.tz; if (!tz) return null;
    let p; try { p = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short', hour: '2-digit', hourCycle: 'h23' }).formatToParts(new Date()); } catch (e) { return null; }
    const day = (p.find((x) => x.type === 'weekday') || {}).value || '', h = Number((p.find((x) => x.type === 'hour') || {}).value);
    const days = (el.dataset.days || '').split(',').map((d) => d.trim());
    return days.includes(day) && h >= +el.dataset.from && h < +el.dataset.to;
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const form = root.querySelector('form');
    if (form) form.addEventListener('submit', (e) => {
      let first = null;
      form.querySelectorAll('[data-f]').forEach((f) => {
        const v = f.value.trim();
        const bad = f.dataset.f === 'email' ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) : v.length < 4;
        const err = form.querySelector('#' + CSS.escape(f.id + '-err'));
        f.setAttribute('aria-invalid', String(bad));
        if (bad) { f.setAttribute('aria-describedby', f.id + '-err'); } else f.removeAttribute('aria-describedby');
        if (err) { err.hidden = !bad; err.textContent = bad ? f.dataset.err : ''; }
        if (bad && !first) first = f;
      });
      if (first) { e.preventDefault(); first.focus(); }
    });
    const done = root.querySelector('[data-done]');
    if (done) done.focus({ preventScroll: false });
    root.querySelectorAll('[data-chat]').forEach((chat) => chat.addEventListener('click', () => {
      const inbox = document.querySelector('inbox-online-store-chat');
      const btn = inbox && inbox.shadowRoot && inbox.shadowRoot.querySelector('button');
      if (btn) { btn.click(); return; }
      const t = root.querySelector(chat.dataset.fallback || '');
      if (t) t.focus();
    }));
    root.querySelectorAll('[data-open]').forEach((ol) => {
      const o = openLine(ol);
      if (o === null) return;
      const dot = document.createElement('span'); dot.setAttribute('aria-hidden', 'true'); dot.className = 'bcontact38__dot' + (o ? ' is-open' : '');
      const wd = (ol.dataset.days || '').split(',').map((d) => d.trim()).join(',') === 'Mon,Tue,Wed,Thu,Fri';
      ol.append(dot, document.createTextNode(o ? ol.dataset.tOpen : wd ? ol.dataset.tClosedWd : ol.dataset.tClosed));
    });
  }
  const all = () => document.querySelectorAll('.bcontact38').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
