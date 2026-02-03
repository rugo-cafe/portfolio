/**
 * Navbar Interactive Logic Module
 * Handles language dropdown, scroll behavior, and theme toggle
 */

declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

interface NavbarElements {
  themeBtn: HTMLElement | null;
  header: HTMLElement | null;
  nav: HTMLElement | null;
  navLinks: NodeListOf<HTMLAnchorElement>;
}

let lastScrollY = 0;
let elements: NavbarElements;
let isInitialized = false;
let sectionObserver: IntersectionObserver | null = null;

function getElements(): NavbarElements {
  return {
    themeBtn: document.getElementById('theme-toggle'),
    header: document.getElementById('main-header'),
    nav: document.getElementById('main-nav'),
    navLinks: document.querySelectorAll('#main-nav a[href^="#"]'),
  };
}

function handleScroll(): void {
  const { header, nav } = elements;
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > 50 && currentScrollY > lastScrollY;
  
  if (isScrollingDown) {
    header?.classList.add('-translate-y-full');
    nav?.classList.add(window.innerWidth >= 768 ? '-translate-y-32' : 'translate-y-32');
  } else {
    header?.classList.remove('-translate-y-full');
    nav?.classList.remove('translate-y-32', '-translate-y-32');
  }
  lastScrollY = currentScrollY;
}

function setActiveLink(sectionId: string): void {
  const { navLinks } = elements;
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkSection = href.replace('#', '');
    const isActive = linkSection === sectionId;

    const glow = link.querySelector('.nav-glow') as HTMLElement;
    const span = link.querySelector('span');

    if (glow && span) {
      if (isActive) {
        glow.classList.remove('opacity-0', 'scale-0');
        glow.classList.add('opacity-20', 'md:opacity-60', 'dark:opacity-80', 'scale-100');
        span.classList.add('font-bold', 'text-brand-dark', 'dark:text-brand-light');
        span.classList.remove('text-brand-dark/60', 'dark:text-brand-light/60');
      } else {
        glow.classList.add('opacity-0', 'scale-0');
        glow.classList.remove('opacity-20', 'md:opacity-60', 'dark:opacity-80', 'scale-100');
        span.classList.remove('font-bold', 'text-brand-dark', 'dark:text-brand-light');
        span.classList.add('text-brand-dark/60', 'dark:text-brand-light/60');
      }
    }
  });
}

function updateActiveSection(): void {
  const sections = ['home', 'about', 'projects'];
  let currentSection = 'home';

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const offset = window.innerHeight / 2;

      if (rect.top <= offset && rect.bottom >= offset) {
        currentSection = sectionId;
        break;
      }
    }
  }

  setActiveLink(currentSection);
}

function setupSectionObserver(): void {
  if (sectionObserver) sectionObserver.disconnect();

  const sections = ['home', 'about', 'projects']
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  if (!sections.length) return;

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActiveLink(visible[0].target.id);
      }
    },
    { rootMargin: '-20% 0px -50% 0px', threshold: [0.2, 0.4, 0.6] }
  );

  sections.forEach(section => sectionObserver?.observe(section));
}

export function initNavbar(): void {
  // Prevent multiple initializations
  if (isInitialized) {
    return;
  }
  
  elements = getElements();
  const { themeBtn, navLinks } = elements;
  isInitialized = true;

  // Theme toggle
  themeBtn?.addEventListener('click', () => {
    if (window.toggleTheme) window.toggleTheme();
  });

  // Scroll hide/show and active section tracking
  window.addEventListener('scroll', () => {
    handleScroll();
    updateActiveSection();
  }, { passive: true });

  window.addEventListener('resize', updateActiveSection, { passive: true });
  
  // Initial active section check
  updateActiveSection();
  setupSectionObserver();
  
  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href') || '';
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, '', href);
        setTimeout(() => updateActiveSection(), 100);
        return;
      }

      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = elements.header?.getBoundingClientRect().height || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 32;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        
        // Update URL
        history.pushState(null, '', href);
        
        // Immediate update of active state
        setTimeout(() => updateActiveSection(), 100);
      }
    });
  });
}

// Auto-init on page load
document.addEventListener('astro:page-load', () => {
  isInitialized = false; // Reset for new page
  initNavbar();
});

// Initial load (non-Astro navigation)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}
