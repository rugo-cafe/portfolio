/**
 * Theme Management Module
 * Handles dark/light mode toggle with localStorage persistence
 */

declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

const getTheme = (): string => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme')!;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const applyTheme = (): void => {
  const theme = getTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const toggleTheme = (): void => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Expose globally
window.toggleTheme = toggleTheme;

// Apply on load
applyTheme();

// Re-apply after Astro page transitions
document.addEventListener('astro:after-swap', applyTheme);

export { getTheme, applyTheme, toggleTheme };
