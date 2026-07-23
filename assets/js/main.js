// Three-second vacuum-diode preloader.
(() => {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) return;

  const duration = 2500;
  const startedAt = Number(window.__preloaderStartedAt) || performance.now();
  const elapsed = Math.max(0, performance.now() - startedAt);
  const remaining = Math.max(0, duration - elapsed);

  const revealWebsite = () => {
    preloader.classList.add('is-hiding');
    document.body.classList.remove('is-loading');
    document.body.setAttribute('aria-busy', 'false');

    window.setTimeout(() => {
      preloader.hidden = true;
      preloader.remove();
    }, 650);
  };

  window.setTimeout(revealWebsite, remaining);
})();

(() => {
  const body = document.body;
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const scrollProgress = document.getElementById('scrollProgress');
  const currentYear = document.getElementById('currentYear');
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  function openMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute('aria-expanded', 'true');
    siteNav.classList.add('open');
    menuBackdrop?.classList.add('open');
    menuBackdrop?.setAttribute('aria-hidden', 'false');
    body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
    menuBackdrop?.classList.remove('open');
    menuBackdrop?.setAttribute('aria-hidden', 'true');
    body.classList.remove('menu-open');
  }

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  menuBackdrop?.addEventListener('click', closeMenu);
  siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const handleBreakpoint = () => {
    if (!mobileQuery.matches) closeMenu();
  };

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener('change', handleBreakpoint);
  } else {
    mobileQuery.addListener(handleBreakpoint);
  }

  const sectionLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    header?.classList.toggle('scrolled', scrollTop > 10);

    let currentId = '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 130) currentId = section.id;
    }

    sectionLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState);
  updateScrollState();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px' }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const lightbox = document.getElementById('certificateLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');
  let lastFocusedElement = null;

  function openLightbox(button) {
    if (!lightbox || !lightboxImage || !lightboxTitle) return;
    const src = button.dataset.lightboxSrc;
    const title = button.dataset.lightboxTitle || 'Certificate';
    if (!src) return;

    lastFocusedElement = document.activeElement;
    lightboxImage.src = src;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightbox.showModal();
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox?.open) return;
    lightbox.close();
    lightboxImage?.removeAttribute('src');
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  }

  document.querySelectorAll('[data-lightbox-src]').forEach((button) => {
    button.addEventListener('click', () => openLightbox(button));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    const rect = lightbox.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (clickedOutside) closeLightbox();
  });

  lightbox?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeLightbox();
  });
})();

// Keep the publication archive as a true accordion: opening one year closes the others.
(() => {
  const publicationGroups = Array.from(document.querySelectorAll('.publication-archive details'));
  if (!publicationGroups.length) return;

  publicationGroups.forEach((group, index) => {
    group.open = index === 0;
    group.addEventListener('toggle', () => {
      if (!group.open) return;
      publicationGroups.forEach((otherGroup) => {
        if (otherGroup !== group) otherGroup.open = false;
      });
    });
  });
})();
