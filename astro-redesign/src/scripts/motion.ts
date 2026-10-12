/**
 * Progressive-enhancement motion controller.
 * - Elements remain visible without JS / IntersectionObserver.
 * - Only opacity and transform animate (compositor-friendly).
 * - Observers and running animations are cleaned up on Astro navigation.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
let observer: IntersectionObserver | null = null;
let running: Animation[] = [];

function destroy(): void {
  observer?.disconnect();
  observer = null;
  running.forEach(animation => animation.cancel());
  running = [];
}

function init(): void {
  destroy();
  if (reduced.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target as HTMLElement;
      observer?.unobserve(element);
      const delay = Math.min(180, Math.max(0, Number(element.dataset.delay) || 0));
      const animation = element.animate(
        [{ opacity: 0.001, transform: 'translate3d(0, 14px, 0)' }, { opacity: 1, transform: 'translate3d(0, 0, 0)' }],
        { duration: 680, delay, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'none' }
      );
      running.push(animation);
      animation.finished.catch(() => {}).finally(() => {
        const index = running.indexOf(animation);
        if (index >= 0) running.splice(index, 1);
      });
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  document.querySelectorAll<HTMLElement>('[data-animate]').forEach(element => observer?.observe(element));
}

document.addEventListener('astro:before-swap', destroy);
document.addEventListener('astro:page-load', init);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
else init();
