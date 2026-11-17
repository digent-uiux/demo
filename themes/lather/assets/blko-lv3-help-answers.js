/* Lather v3, help answers: topic buttons + text search (#help-query from the help support section), hash opens a question. */
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[data-lv3-help-answers]');
  if (!root) return;
  var input = document.getElementById('help-query'),
    form = document.getElementById('help-search-form'),
    status = document.getElementById('help-results'),
    empty = document.getElementById('help-empty');
  var items = [].slice.call(root.querySelectorAll('[data-help-topic]')),
    buttons = [].slice.call(root.querySelectorAll('[data-topic]'));
  var topic = 'all';
  function filter() {
    var q = input ? input.value.toLowerCase().trim() : '', n = 0;
    items.forEach(function (it) {
      var show = (topic === 'all' || it.dataset.helpTopic === topic) && (!q || it.textContent.toLowerCase().indexOf(q) > -1);
      it.hidden = !show;
      if (show) n++;
    });
    if (empty) empty.hidden = !!n;
    if (status) {
      var t = (n === 1 ? status.dataset.one : status.dataset.many) || '[n]';
      status.textContent = t.replace('[n]', n);
    }
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.topic === topic); });
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { topic = b.dataset.topic; filter(); }); });
  if (input) input.addEventListener('input', filter);
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); filter(); });
  function openHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var target = document.getElementById(id), el = target && target.closest('[data-help-topic]');
    if (el && root.contains(el)) {
      topic = 'all';
      if (input) input.value = '';
      filter();
      el.open = true;
    }
  }
  openHash();
  window.addEventListener('hashchange', openHash);
});
