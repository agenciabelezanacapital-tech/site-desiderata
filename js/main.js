/* ================================================================
   DESIDERATA HAIR INSTITUTE — main.js
   JavaScript puro · Sem frameworks · Vanilla ES6+
   ================================================================ */

/* ----------------------------------------------------------------
   1. ANO ATUAL NO FOOTER
   ---------------------------------------------------------------- */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ----------------------------------------------------------------
   2. HEADER: adiciona classe .scrolled ao rolar a página
   ---------------------------------------------------------------- */
(function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial
})();

/* ----------------------------------------------------------------
   3. MENU MOBILE (hamburguer)
   ---------------------------------------------------------------- */
(function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const menu      = document.getElementById('mobileMenu');
  if (!toggleBtn || !menu) return;

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Abrir menu');
    menu.hidden = true;
  }

  toggleBtn.addEventListener('click', function () {
    const isOpen = this.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      this.setAttribute('aria-expanded', 'true');
      this.setAttribute('aria-label', 'Fechar menu');
      menu.hidden = false;
    }
  });

  // Fecha ao clicar em qualquer link do menu
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha ao pressionar Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Fecha ao clicar fora do menu/hamburguer
  document.addEventListener('click', function (e) {
    if (!menu.hidden && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
})();

/* ----------------------------------------------------------------
   4. NAVEGAÇÃO SUAVE COM OFFSET DO HEADER FIXO
   ---------------------------------------------------------------- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      const headerH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
        10
      ) || 72;

      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;

      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  });
})();

/* ----------------------------------------------------------------
   5. ANIMAÇÕES DE ENTRADA (IntersectionObserver)
      Aplica data-animate automaticamente em elementos-chave
   ---------------------------------------------------------------- */
(function initAnimations() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: mostra tudo sem animação em browsers antigos
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  // Adiciona data-animate nos blocos principais se ainda não tiver
  const selectors = [
    '.testimonial-card',
    '.service-card',
    '.about__feature',
    '.location__info-item',
    '.rating-highlight',
    '.section-title',
    '.section-subtitle',
    '.about__eyebrow',
    '.about__title',
    '.about__lead',
    '.cta-final__title',
    '.cta-final__subtitle',
  ];

  selectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', '');
        // Escalonamento suave dentro de listas/grids
        const delay = Math.min(i * 100, 400);
        if (delay > 0) el.setAttribute('data-delay', String(delay));
      }
    });
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach(function (el) {
    observer.observe(el);
  });
})();

/* ----------------------------------------------------------------
   6. VÍDEOS DE SERVIÇO: play no hover / pause fora (desktop)
   ---------------------------------------------------------------- */
(function initServiceVideos() {
  document.querySelectorAll('.service-card__video').forEach(function (video) {
    const card = video.closest('.service-card');
    if (!card) return;

    // Em mobile, play automático silencioso ao entrar na viewport
    if (window.matchMedia('(hover: none)').matches) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              video.play().catch(function () {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(video);
    } else {
      // Desktop: play no hover do card
      card.addEventListener('mouseenter', function () {
        video.play().catch(function () {});
      });
      card.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
})();

/* ----------------------------------------------------------------
   7. RASTREAMENTO DE CONVERSÃO (Google Ads)
      Chame trackConversion() em qualquer clique de WhatsApp.
      A função é referenciada via onclick="trackConversion()" no HTML.
      Descomente o bloco gtag quando ativar o snippet do Google Ads.
   ---------------------------------------------------------------- */
function trackConversion() {
  /* --- Google Ads: descomente e substitua os IDs reais ---
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXX',
      'value':   1.0,
      'currency': 'BRL'
    });
  }
  */

  /* --- Google Analytics 4 (GA4): evento customizado ---
  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', {
      event_category: 'CTA',
      event_label: 'WhatsApp Agendamento'
    });
  }
  */

  /* --- Meta Pixel / Facebook Ads ---
  if (typeof fbq === 'function') {
    fbq('track', 'Lead');
  }
  */
}

// Expõe globalmente (necessário para onclick="trackConversion()")
window.trackConversion = trackConversion;

/* ----------------------------------------------------------------
   8. LAZY LOAD DE VÍDEOS (carrega src apenas quando próximo)
   ---------------------------------------------------------------- */
(function initLazyVideos() {
  const lazyVideos = document.querySelectorAll('video[data-src]');
  if (!lazyVideos.length) return;
  if (!('IntersectionObserver' in window)) {
    lazyVideos.forEach(function (v) {
      v.src = v.dataset.src;
      v.load();
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.querySelectorAll('source[data-src]').forEach(function (s) {
            s.src = s.dataset.src;
          });
          video.load();
          observer.unobserve(video);
        }
      });
    },
    { rootMargin: '200px' }
  );

  lazyVideos.forEach(function (v) { observer.observe(v); });
})();

/* ----------------------------------------------------------------
   9. INDICADOR DE SCROLL ATIVO NA NAV (active state)
   ---------------------------------------------------------------- */
(function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
