// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Theme toggle with localStorage (dark <-> light)
(function () {
  const html = document.documentElement;
  const btn = document.getElementById('themeToggle');

  // Initialize from storage or prefers-color-scheme
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    html.setAttribute('data-theme', 'dark');
  }

  btn?.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
})();
