/**
 * Nikhil Diwakar Portfolio - Client Script
 * Accessible, lightweight interactions + Aceternity UI Components:
 * - Aceternity Card Hover Spotlight Effect
 * - Aceternity Background Beams (Canvas, performance optimized)
 * - Mobile menu toggle with full keyboard (Escape) & focus support
 * - Header elevation on scroll
 * - Active section highlighting using IntersectionObserver
 * - Dynamic copyright year
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle & Drawer
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.removeAttribute('hidden');
    void mobileNav.offsetWidth; // Force reflow
    mobileNav.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (menuClose) menuClose.focus();
  }

  function closeMobileNav() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!mobileNav.classList.contains('open')) {
        mobileNav.setAttribute('hidden', '');
      }
    }, 250);
    menuToggle.focus();
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // 3. Header Elevation on Scroll
  const header = document.getElementById('header');
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // 4. Active Navigation Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-desktop .nav-item, .nav-desktop .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          mobileNavLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 5. Aceternity UI: Card Hover Spotlight Effect
  const spotlightCards = document.querySelectorAll('.glass-card, .interest-tile, .cert-card, .achievement-card');
  spotlightCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 6. Aceternity UI: Background Beams Canvas Effect
  const beamsCanvas = document.getElementById('aceternityBeams');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (beamsCanvas && !prefersReducedMotion) {
    const ctx = beamsCanvas.getContext('2d');
    let width = 0;
    let height = 0;
    let animationFrameId = null;
    let isVisible = true;

    function resizeCanvas() {
      const parent = beamsCanvas.parentElement;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      beamsCanvas.width = width * window.devicePixelRatio || width;
      beamsCanvas.height = height * window.devicePixelRatio || height;
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Beams configuration (Monochrome Silver/White)
    const numBeams = 7;
    const beams = [];

    class Beam {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -Math.random() * 200;
        this.length = 80 + Math.random() * 120;
        this.speed = 1.2 + Math.random() * 1.8;
        this.opacity = 0.12 + Math.random() * 0.22;
        this.width = 1 + Math.random() * 1.5;
        this.angle = 0.45; // Subtle diagonal drift
      }

      update() {
        this.y += this.speed;
        this.x += this.speed * Math.tan(this.angle * 0.3);

        if (this.y - this.length > height || this.x > width + 100) {
          this.reset();
        }
      }

      draw() {
        const endX = this.x - this.length * Math.tan(this.angle * 0.3);
        const endY = this.y - this.length;
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.stroke();
      }
    }

    for (let i = 0; i < numBeams; i++) {
      const beam = new Beam();
      beam.y = Math.random() * height; // Spread initially
      beams.push(beam);
    }

    function renderBeams() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Update and draw traveling beams
      beams.forEach((beam) => {
        beam.update();
        beam.draw();
      });

      animationFrameId = requestAnimationFrame(renderBeams);
    }

    // Pause animation when hero is offscreen to save battery/CPU
    const heroSection = document.getElementById('hero');
    if ('IntersectionObserver' in window && heroSection) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            if (!animationFrameId) {
              renderBeams();
            }
          } else {
            isVisible = false;
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          }
        });
      }, { threshold: 0 });
      heroObserver.observe(heroSection);
    } else {
      renderBeams();
    }
  }
});
