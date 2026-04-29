/**
 * Theme Management Module
 * Handles dark/light mode toggle with localStorage persistence
 */

declare global {
  interface Window {
    toggleTheme: () => void;
    __themeControllerInitialized?: boolean;
    __themeMediaQuery?: MediaQueryList;
    __themeMediaHandler?: () => void;
  }
}

const THEME_KEY = 'theme';
const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const getStoredTheme = (): 'dark' | 'light' | null => {
  if (typeof localStorage === 'undefined') return null;

  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch {
    return null;
  }
};

const getSystemTheme = (): 'dark' | 'light' => {
  return window.matchMedia(THEME_MEDIA_QUERY).matches ? 'dark' : 'light';
};

const resolveTheme = (): 'dark' | 'light' => {
  return getStoredTheme() ?? getSystemTheme();
};

const applyTheme = (theme: 'dark' | 'light'): void => {
  const html = document.documentElement;
  html.classList.toggle('dark', theme === 'dark');
  html.dataset.theme = theme;
};

const persistTheme = (theme: 'dark' | 'light'): void => {
  if (typeof localStorage === 'undefined') return;

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // no-op: private mode or restricted storage
  }
};

const setTheme = (theme: 'dark' | 'light'): void => {
  persistTheme(theme);
  applyTheme(theme);
};

const toggleTheme = (): void => {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
};

const syncThemeFromStorageOrSystem = (): void => {
  const nextTheme = resolveTheme();
  applyTheme(nextTheme);
};

const installSystemThemeListener = (): void => {
  if (window.__themeMediaQuery && window.__themeMediaHandler) {
    return;
  }

  const media = window.matchMedia(THEME_MEDIA_QUERY);
  const handler = () => {
    if (getStoredTheme() == null) {
      applyTheme(getSystemTheme());
    }
  };

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', handler);
  } else {
    media.addListener(handler);
  }

  window.__themeMediaQuery = media;
  window.__themeMediaHandler = handler;
};

const initThemeController = (): void => {
  window.toggleTheme = toggleTheme;

  if (window.__themeControllerInitialized) {
    syncThemeFromStorageOrSystem();
    return;
  }

  window.__themeControllerInitialized = true;
  syncThemeFromStorageOrSystem();
  installSystemThemeListener();

  document.addEventListener('astro:after-swap', syncThemeFromStorageOrSystem);
  document.addEventListener('astro:page-load', syncThemeFromStorageOrSystem);
};

initThemeController();

export {
  applyTheme,
  resolveTheme,
  setTheme,
  toggleTheme,
};
