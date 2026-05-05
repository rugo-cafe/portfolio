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
  header: HTMLElement | null;
  nav: HTMLElement | null;
  navLinks: NodeListOf<HTMLAnchorElement>;
}

const SECTION_IDS = ['home', 'about', 'projects'] as const;
const PROGRAMMATIC_SCROLL_DURATION = 1400;

let lastScrollY = 0;
let elements: NavbarElements | null = null;
let isInitialized = false;
let sectionObserver: IntersectionObserver | null = null;
let cleanupFns: Array<() => void> = [];
let suppressHideUntil = 0;

function getElements(): NavbarElements {
  return {
    header: document.getElementById('main-header'),
    nav: document.getElementById('main-nav'),
    navLinks: document.querySelectorAll('#main-nav a[href^="#"]'),
  };
}

function getExtraOffset(): number {
  const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
  const base = Number.isFinite(rootSize) ? rootSize : 16;
  return base * 2;
}

function showNavbar(): void {
  if (!elements) return;

  elements.header?.classList.remove('-translate-y-full');
  elements.nav?.classList.remove('translate-y-32', '-translate-y-32');
}

function getFixedOffset(): number {
  if (!elements) return 0;

  const headerBottom = elements.header?.getBoundingClientRect().bottom ?? 0;
  let navBottom = 0;

  if (window.matchMedia('(min-width: 768px)').matches) {
    const navShell = elements.nav?.querySelector('.nav-shell') as HTMLElement | null;
    navBottom = navShell?.getBoundingClientRect().bottom ?? 0;
  }

  const baseOffset = Math.max(headerBottom, navBottom);
  const extraOffset = getExtraOffset();
  return baseOffset + extraOffset;
}

function handleScroll(): void {
  if (!elements) return;

  const { header, nav } = elements;
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > 50 && currentScrollY > lastScrollY;

  if (Date.now() < suppressHideUntil) {
    showNavbar();
    lastScrollY = currentScrollY;
    return;
  }
  
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
  if (!elements) return;

  const { navLinks } = elements;
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkSection = href.replace('#', '');
    const isActive = linkSection === sectionId;

    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function updateActiveSection(): void {
  if (!elements) return;

  const sections = SECTION_IDS;
  
  // Default to the currently active link if no section intersects the middle
  let currentSection = 'home';
  const activeLink = document.querySelector('#main-nav a.is-active');
  if (activeLink) {
    currentSection = activeLink.getAttribute('href')?.replace('#', '') || 'home';
  }

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

  const sections = SECTION_IDS
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  if (!sections.length) return;

  const visibilityBySection = new Map<string, number>();
  SECTION_IDS.forEach((id) => visibilityBySection.set(id, 0));

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityBySection.set(
          entry.target.id,
          entry.isIntersecting ? entry.intersectionRatio : 0
        );
      });

      let bestSection = 'home';
      let bestRatio = 0;

      SECTION_IDS.forEach((id) => {
        const ratio = visibilityBySection.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestSection = id;
        }
      });

      if (bestRatio > 0) {
        setActiveLink(bestSection);
      } else {
        updateActiveSection();
      }
    },
    { rootMargin: '-20% 0px -45% 0px', threshold: [0.15, 0.3, 0.45, 0.6, 0.75] }
  );

  sections.forEach(section => sectionObserver?.observe(section));
}

function attachNavLinkHandlers(): void {
  if (!elements) return;

  elements.navLinks.forEach((link) => {
    const handler = (e: MouseEvent) => {
      e.preventDefault();
      const href = link.getAttribute('href') || '';
      if (href === '#home') {
        suppressHideUntil = Date.now() + PROGRAMMATIC_SCROLL_DURATION;
        showNavbar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, '', href);
        setActiveLink('home');
        return;
      }

      const target = document.querySelector(href);

      if (!target) return;

      const scrollTarget = (target instanceof HTMLElement)
        ? (target.querySelector('[data-section-title]') as HTMLElement | null) ?? target
        : target;
      const sectionId = href.replace('#', '') || 'home';
      suppressHideUntil = Date.now() + PROGRAMMATIC_SCROLL_DURATION;
      showNavbar();

      const offset = getFixedOffset();
      const targetPosition = Math.max(
        0,
        scrollTarget.getBoundingClientRect().top + window.scrollY - offset
      );

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      history.pushState(null, '', href);
      setActiveLink(sectionId);
    };

    link.addEventListener('click', handler);
    cleanupFns.push(() => link.removeEventListener('click', handler));
  });
}

function cleanupNavbar(): void {
  cleanupFns.forEach((cleanup) => cleanup());
  cleanupFns = [];

  if (sectionObserver) {
    sectionObserver.disconnect();
    sectionObserver = null;
  }

  elements = null;
  isInitialized = false;
}

export function initNavbar(): void {
  if (isInitialized) {
    return;
  }
  
  const nextElements = getElements();
  if (!nextElements.header || !nextElements.nav || !nextElements.navLinks.length) {
    return;
  }

  elements = nextElements;
  lastScrollY = window.scrollY;
  isInitialized = true;

  const onScroll = () => {
    handleScroll();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  cleanupFns.push(() => window.removeEventListener('scroll', onScroll));

  const onResize = () => updateActiveSection();
  window.addEventListener('resize', onResize, { passive: true });
  cleanupFns.push(() => window.removeEventListener('resize', onResize));

  attachNavLinkHandlers();
  setupSectionObserver();

  const hashSection = window.location.hash.replace('#', '');
  if (SECTION_IDS.includes(hashSection as (typeof SECTION_IDS)[number])) {
    setActiveLink(hashSection);
    suppressHideUntil = Date.now() + PROGRAMMATIC_SCROLL_DURATION;
    showNavbar();

    const target = document.getElementById(hashSection);
    if (target && hashSection !== 'home') {
      const offset = getFixedOffset();
      const scrollTarget = (target.querySelector('[data-section-title]') as HTMLElement | null) ?? target;
      const targetPosition = Math.max(
        0,
        scrollTarget.getBoundingClientRect().top + window.scrollY - offset
      );
      window.scrollTo({ top: targetPosition });
    }
  } else {
    updateActiveSection();
  }
}

document.addEventListener('astro:before-swap', cleanupNavbar);
document.addEventListener('astro:page-load', () => {
  cleanupNavbar();
  initNavbar();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}
