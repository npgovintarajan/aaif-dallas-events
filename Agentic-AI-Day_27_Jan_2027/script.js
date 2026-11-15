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
    let visibleCount = 0;

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
      
      // Multi-word search matching: each word in the query must match either text or tags
      const queryWords = query.split(/\s+/).filter(Boolean);
      const matchesSearch = queryWords.length === 0 || queryWords.every(word => 
        itemText.includes(word) || itemTags.includes(word)
      );

      if (matchesTab && matchesSearch) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Handle "No matching sessions" state
    let emptyState = document.getElementById('schedule-empty-state');
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.id = 'schedule-empty-state';
        emptyState.className = 'p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-slate-400 text-sm font-mono';
        emptyState.innerHTML = '<p class="text-white font-bold mb-1">No sessions match your search</p><p class="text-xs text-slate-500">Try searching for a speaker (e.g. "Keynote", "Systems Lead"), topic (e.g. "MCP", "Firecracker"), or reset the track filter.</p>';
        document.getElementById('schedule-list')?.appendChild(emptyState);
      }
      emptyState.style.display = '';
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }
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

