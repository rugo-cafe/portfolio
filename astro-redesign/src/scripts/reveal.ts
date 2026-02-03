/**
 * Reveal Animation Observer
 * Handles scroll-triggered reveal animations
 */

const observerOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

let observer: IntersectionObserver | null = null;

function handleIntersection(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer?.unobserve(entry.target);
    }
  });
}

export function setupRevealObserver(): void {
  // Cleanup previous observer
  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  document.querySelectorAll('.reveal').forEach((el) => {
    observer?.observe(el);
  });
}

// Auto-init
document.addEventListener('astro:page-load', setupRevealObserver);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupRevealObserver);
} else {
  setupRevealObserver();
}
