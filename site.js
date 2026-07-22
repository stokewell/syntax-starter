(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('#theme-toggle');
  const media = matchMedia('(prefers-color-scheme: dark)');
  const order = ['system', 'light', 'dark'];

  function resolve(preference) {
    return preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
  }

  function apply(preference) {
    root.dataset.themePreference = preference;
    root.dataset.theme = resolve(preference);
    toggle?.setAttribute('aria-label', `Theme preference: ${preference}`);
  }

  toggle?.addEventListener('click', () => {
    const current = root.dataset.themePreference || 'system';
    const next = order[(order.indexOf(current) + 1) % order.length];
    localStorage.setItem('site-theme-preference', next);
    apply(next);
  });

  media.addEventListener('change', () => {
    if ((root.dataset.themePreference || 'system') === 'system') apply('system');
  });
})();
