/**
 * One event-delegated controller per project index.
 * Pointer and keyboard focus reveal the same images; mobile images are in-flow.
 */
function initialize(): void {
  document.querySelectorAll<HTMLElement>('[data-project-index]').forEach(root => {
    if (root.dataset.bound === 'true') return;
    root.dataset.bound = 'true';
    const images = Array.from(root.querySelectorAll<HTMLImageElement>('[data-stage-image]'));
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-project]'));
    const indexEl = root.querySelector<HTMLElement>('[data-stage-index]');
    const captionEl = root.querySelector<HTMLElement>('[data-stage-caption]');

    function activate(link: HTMLAnchorElement): void {
      const slug = link.dataset.project;
      const index = links.indexOf(link);
      if (!slug || index < 0) return;
      images.forEach(image => image.classList.toggle('active', image.dataset.stageImage === slug));
      if (indexEl) indexEl.textContent = String(index + 1).padStart(2, '0');
      if (captionEl) captionEl.textContent = link.querySelector('.project-name')?.textContent?.trim() ?? '';
    }
    root.addEventListener('pointerover', event => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('[data-project]');
      if (link && root.contains(link)) activate(link);
    });
    root.addEventListener('focusin', event => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('[data-project]');
      if (link && root.contains(link)) activate(link);
    });
  });
}
document.addEventListener('astro:page-load', initialize);
initialize();