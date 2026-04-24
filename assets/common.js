/* Common helpers for static site */

/** Fetch a JSON file from /data — tolerant of GitHub Pages sub-path hosting. */
async function loadJson(name) {
  const resp = await fetch('data/' + name + '.json');
  if (!resp.ok) throw new Error('Failed to load ' + name);
  return resp.json();
}

/** Simple pagination state manager for client-side tables. */
function makePager(total, pageSize, onRender) {
  let current = 1;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  function go(n) {
    current = Math.max(1, Math.min(pages, n));
    onRender(current, pageSize, pages);
    renderPagination();
  }
  function renderPagination() {
    const el = document.getElementById('pager');
    if (!el) return;
    let html = '';
    const prev = current > 1 ? 'a' : 'span class="disabled"';
    const next = current < pages ? 'a' : 'span class="disabled"';
    html += `<${prev} data-p="${current - 1}">上一页</${prev.split(' ')[0]}>`;
    const ranges = [];
    const add = (n) => ranges.push(n);
    const push = (s, e) => { for (let i = s; i <= e; i++) add(i); };
    if (pages <= 9) push(1, pages);
    else {
      push(1, 2);
      if (current > 4) ranges.push('...');
      push(Math.max(3, current - 1), Math.min(pages - 2, current + 1));
      if (current < pages - 3) ranges.push('...');
      push(pages - 1, pages);
    }
    for (const r of ranges) {
      if (r === '...') html += '<span>…</span>';
      else if (r === current) html += `<span class="current">${r}</span>`;
      else html += `<a data-p="${r}">${r}</a>`;
    }
    html += `<${next} data-p="${current + 1}">下一页</${next.split(' ')[0]}>`;
    el.innerHTML = html;
    el.querySelectorAll('a[data-p]').forEach(a => a.onclick = () => go(+a.dataset.p));
  }
  return { go, getCurrent: () => current };
}

/** Simple text filter (case-insensitive, any field match). */
function textMatch(item, query, fields) {
  if (!query) return true;
  const q = query.toLowerCase();
  return fields.some(f => (item[f] || '').toString().toLowerCase().includes(q));
}

/** Extract unique values from an array of objects. */
function uniqueValues(arr, key) {
  return [...new Set(arr.map(i => i[key]).filter(Boolean))].sort();
}

/** Mark active nav link based on current page. */
(function highlightNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
})();
