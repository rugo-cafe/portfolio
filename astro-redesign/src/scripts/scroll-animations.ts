/**
 * Advanced scroll-based animations with performance optimizations
 * Uses IntersectionObserver + requestAnimationFrame for 60fps animations
 */

interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface ParallaxElement {
  element: HTMLElement;
  speed: number;
  startY: number;
}

class ScrollAnimationController {
  private observers: Map<string, IntersectionObserver> = new Map();
  private parallaxElements: ParallaxElement[] = [];
  private rafId: number | null = null;
  private lastScrollY = 0;
  private ticking = false;

  constructor() {
    this.init();
  }

  private init() {
    this.setupRevealAnimations();
    this.setupParallaxElements();
    this.setupSmoothScrollLinks();
    this.setupScrollProgress();
    
    // Start parallax loop
    this.rafId = requestAnimationFrame(this.parallaxLoop.bind(this));
    
    // Cleanup on page unload
    document.addEventListener('astro:before-swap', () => this.cleanup());
  }

  /**
   * Enhanced reveal animations with stagger support
   */
  private setupRevealAnimations() {
    const revealConfig: AnimationConfig = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
      once: true,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      const intersecting = entries.filter(entry => entry.isIntersecting);
      if (!intersecting.length) return;

      // Sort by visual position (top to bottom)
      intersecting.sort((a, b) => {
        const aTop = (a.target as HTMLElement).getBoundingClientRect().top;
        const bTop = (b.target as HTMLElement).getBoundingClientRect().top;
        return aTop - bTop;
      });

      intersecting.forEach((entry, orderIndex) => {
        const target = entry.target as HTMLElement;

        // Get delay from data attribute or class
        const delayClass = Array.from(target.classList)
          .find(cls => cls.startsWith('reveal-delay-'));
        const delay = delayClass
          ? parseInt(delayClass.replace('reveal-delay-', ''))
          : 0;

        const orderDelay = orderIndex * 60;

        // Apply animation with delay
        setTimeout(() => {
          target.classList.add('revealed');

          // Animate children with stagger if they have the class
          const staggerChildren = target.querySelectorAll('.stagger-item');
          staggerChildren.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add('revealed');
            }, index * 100);
          });
        }, delay + orderDelay);

        if (revealConfig.once) {
          revealObserver.unobserve(target);
        }
      });
    }, revealConfig);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    this.observers.set('reveal', revealObserver);
  }

  /**
   * Parallax effect for decorative elements
   */
  private setupParallaxElements() {
    const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
    
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.5');
      const rect = el.getBoundingClientRect();
      
      this.parallaxElements.push({
        element: el,
        speed,
        startY: rect.top + window.scrollY,
      });
    });
  }

  /**
   * Parallax animation loop using RAF
   */
  private parallaxLoop() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
    
    this.rafId = requestAnimationFrame(this.parallaxLoop.bind(this));
  }

  private updateParallax() {
    const scrollY = window.scrollY;
    
    // Only update if scroll position changed
    if (scrollY === this.lastScrollY) return;
    this.lastScrollY = scrollY;

    this.parallaxElements.forEach(({ element, speed, startY }) => {
      const elementTop = startY - scrollY;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const offset = (scrollY - startY) * speed;
        element.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });
  }

  /**
   * Smooth scroll for anchor links
   */
  private setupSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (!href || href === '#') return;

        if (anchor.closest('#main-nav') || anchor.closest('#main-header')) return;

        if (href === '#home') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.pushState(null, '', href);
          return;
        }

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        
        // Get navbar height for offset
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar?.getBoundingClientRect().height || 0;
        
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 32;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Update URL without jumping
        history.pushState(null, '', href);
      });
    });
  }

  /**
   * Scroll progress indicator
   */
  private setupScrollProgress() {
    let progressBar = document.querySelector<HTMLElement>('.scroll-progress');
    
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #B066FF, #C04848);
        z-index: 9999;
        transition: width 0.1s ease-out;
      `;
      document.body.appendChild(progressBar);
    }

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      progressBar!.style.width = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /**
   * Cleanup observers and RAF
   */
  private cleanup() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
    
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    
    this.parallaxElements = [];
  }
}

// Initialize on page load and Astro navigation
function initScrollAnimations() {
  new ScrollAnimationController();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}

// Re-initialize on Astro page transitions
document.addEventListener('astro:page-load', initScrollAnimations);

export { initScrollAnimations };
