/**
 * Accessible, bounded scroll interactions for the artifact archive.
 *
 * The page remains readable without JavaScript. We only update decorative
 * transforms and the location of the project index. No opacity reveals.
 */
const section = document.querySelector<HTMLElement>('[data-archive-section]');
const gallery = section?.querySelector<HTMLElement>('[data-archive-gallery]');

if (section && gallery) {
  const plates = [...gallery.querySelectorAll<HTMLElement>('[data-archive-plate]')];
  const railLinks = [...section.querySelectorAll<HTMLAnchorElement>('[data-rail-link]')];
  const count = section.querySelector<HTMLElement>('[data-current-number]');
  const progress = section.querySelector<HTMLElement>('[data-gallery-progress]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let currentIndex = -1;

  const resetMotion = () => {
    for (const plate of plates) {
      const glyph = plate.querySelector<HTMLElement>('[data-archive-glyph]');
      const art = plate.querySelector<HTMLElement>('[data-scroll-art]');
      glyph?.style.removeProperty('--glyph-y');
      glyph?.style.removeProperty('--glyph-rotation');
      art?.style.removeProperty('--art-y');
    }
    if (progress && reduced.matches) progress.style.removeProperty('transform');
  };

  const update = () => {
    frame = 0;
    const height = window.innerHeight;
    const bounds = gallery.getBoundingClientRect();

    // No DOM writes or geometry work when the index is far from view.
    if (bounds.bottom < -height || bounds.top > height * 2) return;

    let closest = 0;
    let minDistance = Infinity;
    const center = height * 0.48;

    for (const [index, plate] of plates.entries()) {
      const rect = plate.getBoundingClientRect();
      const middle = rect.top + Math.min(rect.height, height) / 2;
      const distance = Math.abs(middle - center);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }

      if (reduced.matches || rect.bottom < -height * .2 || rect.top > height * 1.2) continue;

      const normalized = Math.max(-1, Math.min(1, (middle - center) / height));
      const glyph = plate.querySelector<HTMLElement>('[data-archive-glyph]');
      const artwork = plate.querySelector<HTMLElement>('[data-scroll-art]');
      glyph?.style.setProperty('--glyph-y', (normalized * -18).toFixed(1) + 'px');
      glyph?.style.setProperty('--glyph-rotation', (normalized * -16).toFixed(1) + 'deg');
      artwork?.style.setProperty('--art-y', (normalized * -12).toFixed(1) + 'px');
    }

    if (closest !== currentIndex) {
      currentIndex = closest;
      const activeSlug = plates[closest]?.dataset.archivePlate;
      if (count) count.textContent = String(closest + 1).padStart(2, '0');
      for (const link of railLinks) {
        const isActive = link.dataset.railLink === activeSlug;
        link.classList.toggle('is-current', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }

    if (progress && !reduced.matches) {
      const range = Math.max(1, bounds.height + height * .25);
      const traveled = height * .6 - bounds.top;
      progress.style.transform = `scaleX(${Math.max(0, Math.min(1, traveled / range)).toFixed(3)})`;
    }
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  const preferenceChanged = () => { if (reduced.matches) resetMotion(); schedule(); };
  reduced.addEventListener('change', preferenceChanged);
  schedule();
}
