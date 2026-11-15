// Agentic AI Day Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Schedule Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const scheduleItems = document.querySelectorAll('.schedule-item');
  const searchInput = document.getElementById('schedule-search');

  function applyFilters() {
    const activeTab = document.querySelector('.filter-tab.active')?.getAttribute('data-filter') || 'all';
    const query = (searchInput?.value || '').toLowerCase().trim();

    scheduleItems.forEach(item => {
      let matchesTab = false;

      if (activeTab === 'all') {
        matchesTab = true;
      } else if (activeTab === 'plenary' && item.classList.contains('plenary')) {
        matchesTab = true;
      } else if (activeTab === 'track-a' && item.classList.contains('track-a')) {
        matchesTab = true;
      } else if (activeTab === 'track-b' && item.classList.contains('track-b')) {
        matchesTab = true;
      }

      const itemText = (item.innerText || '').toLowerCase();
      const itemTags = (item.getAttribute('data-tags') || '').toLowerCase();
      const matchesSearch = !query || itemText.includes(query) || itemTags.includes(query);

      if (matchesTab && matchesSearch) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Tab click events
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.classList.remove('bg-cyan-500');
        t.classList.remove('text-slate-950');
        t.classList.add('bg-slate-800');
        t.classList.add('text-slate-300');
      });

      tab.classList.add('active');
      tab.classList.add('bg-cyan-500');
      tab.classList.add('text-slate-950');
      tab.classList.remove('bg-slate-800');
      tab.classList.remove('text-slate-300');

      applyFilters();
    });
  });

  // Search input events
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
});

// Copy snippet to clipboard helper
function copySnippet(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    // Show toast or temporary indicator
    const btn = event?.currentTarget;
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<span class="text-emerald-400 font-bold">✓ Copied!</span>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    }
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
