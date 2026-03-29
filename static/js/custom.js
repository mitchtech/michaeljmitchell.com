// Theme toggle
(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  var icon = toggle.querySelector('i');

  function setIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  // Set icon for current theme
  setIcon(document.documentElement.getAttribute('data-bs-theme') || 'dark');

  toggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-bs-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
    setIcon(next);
  });
})();
