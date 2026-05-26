/* =============================================
   ACR MUSIC – script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── Ano no rodapé ──
  const anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // ── Header scroll shadow ──
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile menu toggle ──
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    nav.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  // Fechar ao clicar em link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(sec => observer.observe(sec));

  // ── Carousel automático ──
  const track = document.getElementById('carouselTrack');
  const dots  = document.querySelectorAll('.dot');
  if (track && dots.length) {
    let current = 0;
    const total = dots.length;

    const goTo = (idx) => {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    // Clique nos dots
    dots.forEach(dot => {
      dot.addEventListener('click', () => goTo(+dot.dataset.idx));
    });

    // Auto-avança a cada 3s
    let timer = setInterval(() => goTo(current + 1), 3000);

    // Pausa ao passar o mouse
    track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
    track.parentElement.addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo(current + 1), 3000);
    });

    // Touch swipe
    let startX = null;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      if (startX === null) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
      startX = null;
    });
  }

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll(
    '.motivo-card, .curso-card, .online-card, .depo-card, .faq-item, .info-block'
  );
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    revealObs.observe(el);
  });

  // Callback de reveal
  document.addEventListener('animationend', () => {}, false);
  const revealObsStyle = () => {
    revealEls.forEach(el => {
      if (el.classList.contains('revealed')) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
  };
  // Polyfill simples para o reveal
  const revealObs2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => revealObs2.observe(el));

});
