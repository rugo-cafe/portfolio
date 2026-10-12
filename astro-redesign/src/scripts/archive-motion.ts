/**
 * Scroll direction as an editorial instrument.
 *
 * Stable by default: no opacity changes, no hidden content, no persistent RAF loop.
 * Read positions on scroll, write a small transform to decorative marks only.
 * The side index always works as regular anchor links if JavaScript is disabled.
 */
const gallery = document.querySelector<HTMLElement>('[data-archive-gallery]');
const section = document.querySelector<HTMLElement>('[data-archive-section]');

if (gallery && section) {
  const plates = Array.from(gallery.querySelectorAll<HTMLElement>('[data-archive-plate]'));
  const railLinks = Array.from(section.querySelectorAll<HTMLAnchorElement>('[data-rail-link]'));
  const count = section.querySelector<HTMLElement>('[data-current-number]');
  const progress = section.querySelector<HTMLElement>('[data-gallery-progress]');
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let pending = 0;
  let activeIndex = -1;

  function update(): void {
    pending = 0;
    const viewportHeight = window.innerHeight;
    const galleryBounds = gallery!.getBoundingClientRect();

    // Suspend work when gallery is far outside the viewport.
    if (galleryBounds.bottom < -viewportHeight || galleryBounds.top > viewportHeight * 2) return;

    const center = viewportHeight * 0.48;
    let nearest = 0;
    let nearestDistance = Infinity;

    for (const [index, plate] of plates.entries()) {
      const rect = plate.getBoundingClientRect();
      const middle = rect.top + Math.min(rect.height, viewportHeight) / 2;
      const distance = Math.abs(middle - center);
      if (distance < nearestDistance) {
        nearest = index;
        nearestDistance = distance;
      }

      // Only a decorative glyph moves. The image and reading content stay fixed.
      const glyph = plate.querySelector<HTMLElement>('[data-archive-glyph]');
      if (!glyph || motionPreference.matches) continue;
      const relative = Math.max(-1, Math.min(1, (middle - center) / viewportHeight));
      glyph.style.setProperty('--glyph-y', (relative * -18).toFixed(1) + 'px');
      glyph.style.setProperty('--glyph-rotation', (relative * -16).toFixed(1) + 'deg');
      const artwork = plate.querySelector<HTMLElement>('[data-scroll-art]');
      artwork?.style.setProperty('--art-y', (relative * -12).toFixed(1) + 'px');
    }

    if (nearest !== activeIndex) {
      activeIndex = nearest;
      const currentSlug = plates[nearest]?.dataset.archivePlate;
      if (count) count.textContent = String(nearest + 1).padStart(2, '0');
      for (const link of railLinks) {
        const current = link.dataset.railLink === currentSlug;
        link.classList.toggle('is-current', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }

    if (progress) {
      const journey = galleryBounds.height + viewportHeight * 0.25;
      const distance = viewportHeight * 0.6 - galleryBounds.top;
      const ratio = Math.max(0, Math.min(1, distance / Math.max(1, journey)));
      progress.style.transform = 'scaleX(' + ratio.toFixed(3) + ')';
    }
  }

  function schedule(): void {
    if (pending) return;
    pending = requestAnimationFrame(update);
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  motionPreference.addEventListener?.('change', () => {
    for (const plate of plates) {
      const glyph = plate.querySelector<HTMLElement>('[data-archive-glyph]');
      const artwork = plate.querySelector<HTMLElement>('[data-scroll-art]');
      if (motionPreference.matches) {
        glyph?.style.removeProperty('--glyph-y');
        glyph?.style.removeProperty('--glyph-rotation');
        artwork?.style.removeProperty('--art-y');
      }
    }
    schedule();
  });
  schedule();
}
