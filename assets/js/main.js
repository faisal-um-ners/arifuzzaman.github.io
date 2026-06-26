(function(){
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme){ html.setAttribute('data-theme', savedTheme); }
  function setThemeLabel(){
    const t = html.getAttribute('data-theme') || 'dark';
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
  if(menuBtn && navLinks){
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
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
