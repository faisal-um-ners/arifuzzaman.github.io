(function(){
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = localStorage.getItem('theme');

  if(savedTheme){
    html.setAttribute('data-theme', savedTheme);
  }

  function setThemeLabel(){
    const t = html.getAttribute('data-theme') || 'dark';
    if(!themeBtn) return;
    themeBtn.textContent = t === 'dark' ? 'Light' : 'Dark';
    themeBtn.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} theme`);
  }

  if(themeBtn){
    setThemeLabel();
    themeBtn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setThemeLabel();
    });
  }

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  function isMobileMenu(){
    return mobileQuery.matches;
  }

  function openMenu(){
    if(!menuBtn || !navLinks) return;
    navLinks.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    navLinks.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    if(navOverlay){
      navOverlay.classList.add('open');
      navOverlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closeMenu(){
    if(!menuBtn || !navLinks) return;
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', isMobileMenu() ? 'true' : 'false');
    document.body.classList.remove('menu-open');
    if(navOverlay){
      navOverlay.classList.remove('open');
      navOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if(menuBtn && navLinks){
    navLinks.setAttribute('aria-hidden', isMobileMenu() ? 'true' : 'false');

    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.contains('open');
      if(open){
        closeMenu();
      }else{
        openMenu();
      }
    });

    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    if(navOverlay){
      navOverlay.addEventListener('click', closeMenu);
    }

    window.addEventListener('keydown', event => {
      if(event.key === 'Escape') closeMenu();
    });

    function handleMenuBreakpoint(){
      if(!isMobileMenu()){
        closeMenu();
        navLinks.setAttribute('aria-hidden', 'false');
      }else if(!navLinks.classList.contains('open')){
        navLinks.setAttribute('aria-hidden', 'true');
      }
    }

    if(mobileQuery.addEventListener){
      mobileQuery.addEventListener('change', handleMenuBreakpoint);
    }else{
      mobileQuery.addListener(handleMenuBreakpoint);
    }
  }

  const progress = document.getElementById('progress');
  const toTop = document.getElementById('toTop');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.navlinks a'));

  function updateScroll(){
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if(progress) progress.style.width = pct + '%';
    if(toTop) toTop.classList.toggle('show', window.scrollY > 700);

    let current = '';
    for(const sec of sections){
      if(sec.getBoundingClientRect().top <= 110) current = sec.id;
    }
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }

  window.addEventListener('scroll', updateScroll, {passive:true});
  updateScroll();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
