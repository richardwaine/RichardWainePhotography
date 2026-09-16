/* Count-up for the hero stat numbers (.hero-spec dt).
   Used by ServiceHero.astro and the About page. Load it with:
     <script>import '../scripts/hero-spec-counter';</script>   (from src/pages)
     <script>import '../../scripts/hero-spec-counter';</script>   (from src/components/service-pages)
   One shared copy, so the count-up never runs twice on a page. */
function initHeroSpec() {
  const cells = document.querySelectorAll<HTMLElement>('.hero-spec dt');
  if (!cells.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cells.forEach((el, i) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || '';

    if (reduce || !target) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    const duration = 1400;
    const delay = i * 120;
    const start = performance.now() + delay;

    function step(now: number) {
      if (now < start) { requestAnimationFrame(step); return; }
      const p = Math.min((now - start) / duration, 1);
      /* ease out — fast at first, settles onto the number */
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

document.addEventListener('DOMContentLoaded', initHeroSpec);
document.addEventListener('astro:page-load', initHeroSpec);
