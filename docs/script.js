// Agentic AI Summit Interactive Features with WCAG 2.2 Accessibility

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons & add aria-hidden to decorative icons
  if (window.lucide) {
    lucide.createIcons();
    document.querySelectorAll('svg.lucide').forEach(svg => {
      if (!svg.hasAttribute('aria-label') && !svg.hasAttribute('aria-labelledby')) {
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
      }
    });
  }

  // Schedule Filter Tabs & Live Status
  const filterTabs = Array.from(document.querySelectorAll('.filter-tab'));
  const scheduleItems = document.querySelectorAll('.schedule-item');
  const searchInput = document.getElementById('schedule-search');
  const liveStatus = document.getElementById('schedule-live-status');

  function updateAriaTabs(activeTabEl) {
    filterTabs.forEach(tab => {
      const isActive = tab === activeTabEl;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.setAttribute('tabindex', isActive ? '0' : '-1');

      if (isActive) {
        tab.classList.add('bg-[#FF702D]', 'text-black', 'font-bold', 'border-[#FF702D]');
        tab.classList.remove('bg-slate-100', 'text-slate-800', 'bg-zinc-900', 'text-zinc-300', 'bg-slate-800', 'text-slate-300');
      } else {
        tab.classList.remove('bg-[#FF702D]', 'text-black', 'border-[#FF702D]', 'bg-cyan-500', 'text-slate-950');
        tab.classList.add('bg-slate-100', 'text-slate-800', 'border', 'border-slate-300');
      }
    });
  }

  function applyFilters() {
    const activeTabEl = document.querySelector('.filter-tab.active') || filterTabs[0];
    const activeTab = activeTabEl?.getAttribute('data-filter') || 'all';
    const query = (searchInput?.value || '').toLowerCase().trim();
    let visibleCount = 0;
    const totalCount = scheduleItems.length;

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
      
      const queryWords = query.split(/\s+/).filter(Boolean);
      const matchesSearch = queryWords.length === 0 || queryWords.every(word => 
        itemText.includes(word) || itemTags.includes(word)
      );

      if (matchesTab && matchesSearch) {
        item.style.display = '';
        item.removeAttribute('aria-hidden');
        visibleCount++;
      } else {
        item.style.display = 'none';
        item.setAttribute('aria-hidden', 'true');
      }
    });

    // Handle "No matching sessions" state
    let emptyState = document.getElementById('schedule-empty-state');
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.id = 'schedule-empty-state';
        emptyState.className = 'p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-slate-300 text-sm font-mono';
        emptyState.innerHTML = '<p class="text-white font-bold mb-1">No sessions match your search</p><p class="text-xs text-slate-400">Try searching for a speaker, topic (e.g. "MCP", "Firecracker"), or reset the track filter.</p>';
        document.getElementById('schedule-list')?.appendChild(emptyState);
      }
      emptyState.style.display = '';
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }

    // Announce to screen readers via live region (WCAG 4.1.3)
    if (liveStatus) {
      if (visibleCount === 0) {
        liveStatus.textContent = 'No sessions found matching current filter and search criteria.';
      } else {
        liveStatus.textContent = `Showing ${visibleCount} of ${totalCount} sessions.`;
      }
    }
  }

  // Keyboard Navigation for Tabs (WCAG 2.1.1, WAI-ARIA Tablist Pattern)
  filterTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      updateAriaTabs(tab);
      applyFilters();
    });

    tab.addEventListener('keydown', (e) => {
      let nextIndex = null;
      if (e.key === 'ArrowRight') {
        nextIndex = (index + 1) % filterTabs.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (index - 1 + filterTabs.length) % filterTabs.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = filterTabs.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        const nextTab = filterTabs[nextIndex];
        nextTab.focus();
        updateAriaTabs(nextTab);
        applyFilters();
      }
    });
  });

  // Search input events with debounced live status update
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(applyFilters, 150);
    });
  }

  // Run initial state setup
  const initialActive = document.querySelector('.filter-tab.active') || filterTabs[0];
  if (initialActive) {
    updateAriaTabs(initialActive);
  }
  // Restore saved high contrast preference
  try {
    if (localStorage.getItem('aaif-high-contrast') === 'true') {
      document.documentElement.classList.add('high-contrast');
      document.querySelectorAll('.contrast-toggle-btn, #toggle-contrast-btn, #toggle-contrast-btn-mobile, #floating-contrast-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', 'true');
        btn.classList.add('border-[#FF702D]');
      });
    }
  } catch (e) {}
});

// Toggle High Contrast Mode for Visually Impaired Users (WCAG 1.4.3 / 1.4.6 Enhanced Contrast)
function toggleHighContrast() {
  const isHighContrast = document.documentElement.classList.toggle('high-contrast');
  const liveStatus = document.getElementById('schedule-live-status');
  
  document.querySelectorAll('.contrast-toggle-btn, #toggle-contrast-btn, #toggle-contrast-btn-mobile, #floating-contrast-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', isHighContrast ? 'true' : 'false');
    btn.classList.toggle('border-[#FF702D]', isHighContrast);
  });
  
  try {
    localStorage.setItem('aaif-high-contrast', isHighContrast ? 'true' : 'false');
  } catch (e) {}

  if (liveStatus) {
    liveStatus.textContent = isHighContrast 
      ? 'High Contrast Mode enabled. Borders and contrast have been enhanced.' 
      : 'High Contrast Mode disabled. Standard contrast restored.';
  }
}

// Responsive Mobile Navigation Drawer
function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('mobile-menu-btn');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  if (!nav) return;
  const isHidden = nav.classList.toggle('hidden');
  const isOpen = !isHidden;
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  if (openIcon) openIcon.classList.toggle('hidden', isOpen);
  if (closeIcon) closeIcon.classList.toggle('hidden', !isOpen);
  if (window.lucide) lucide.createIcons();
}

function closeMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('mobile-menu-btn');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  if (nav) nav.classList.add('hidden');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  if (openIcon) openIcon.classList.remove('hidden');
  if (closeIcon) closeIcon.classList.add('hidden');
}

// Accessible copy snippet helper with screen reader announcement
function copySnippet(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = event?.currentTarget;
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<span class="text-[#FF702D] font-bold" aria-live="polite">✓ Copied!</span>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    }
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
