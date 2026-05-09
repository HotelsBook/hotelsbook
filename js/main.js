/**
 * HOTELSBOOK - MAIN.JS
 * =========================================
 * Handles UI interactions, animations, forms, and UX enhancements.
 * Vanilla JS (ES6+), no dependencies, production-ready.
 * =========================================
 */
(function () {
  'use strict';

  // ==========================================
  // 1. UTILITY FUNCTIONS
  // ==========================================
  
  /**
   * Throttle function to limit execution rate
   */
  function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  /**
   * Debounce function for input events
   */
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // ==========================================
  // 2. CORE MODULES
  // ==========================================

  /**
   * Navbar scroll effect + mobile menu toggle
   */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const navLinks = navbar.querySelectorAll('a[href^="#"]');
    const isMobile = () => window.innerWidth < 768;

    // Scroll effect
    const handleScroll = throttle(() => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // Mobile menu injection (if not present in HTML)
    if (isMobile() && !document.querySelector('.mobile-menu-btn')) {
      const btn = document.createElement('button');
      btn.className = 'md:hidden p-2 rounded-lg hover:bg-gray-100 transition';
      btn.setAttribute('aria-label', 'Abrir menu');
      btn.innerHTML = `<svg class="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
      navbar.querySelector('.flex').insertBefore(btn, navbar.querySelector('.hidden.md\\:flex'));

      const mobileMenu = document.createElement('div');
      mobileMenu.className = 'hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 space-y-2';
      mobileMenu.setAttribute('aria-hidden', 'true');
      
      // Clone desktop links for mobile
      const desktopNav = navbar.querySelector('.hidden.md\\:flex');
      if (desktopNav) {
        mobileMenu.innerHTML = desktopNav.innerHTML.replace(/hidden md:flex/g, 'block py-2 text-center text-gray-700 hover:text-lightblue');
        navbar.appendChild(mobileMenu);
      }

      btn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', !isOpen);
        mobileMenu.setAttribute('aria-hidden', isOpen);
      });

      // Close menu on link click
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /**
   * Smooth scroll for anchor links with fixed header offset
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      });
    });
  }

  /**
   * Initialize AOS (Animate On Scroll)
   */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    }
  }

  /**
   * Form handling with validation, loading state & feedback
   */
  function initForms() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const originalClasses = submitBtn.className;

        // Basic validation
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('border-red-500');
          } else {
            field.classList.remove('border-red-500');
          }
        });

        if (!isValid) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return;
        }

        // Loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

        try {
          // 🔧 TODO: Replace with actual API endpoint
          // const response = await fetch('/api/contact', { method: 'POST', body: new FormData(this) });
          
          // Simulate network request
          await new Promise(resolve => setTimeout(resolve, 1500));

          // Success state
          submitBtn.textContent = 'Enviado com sucesso!';
          submitBtn.classList.remove('from-navy', 'to-blue-900');
          submitBtn.classList.add('bg-green-600');
          
          this.reset();
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.className = originalClasses;
          }, 3000);

        } catch (error) {
          console.error('Form submission error:', error);
          submitBtn.textContent = 'Erro ao enviar. Tente novamente.';
          submitBtn.classList.add('bg-red-600');
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.className = originalClasses;
          }, 3000);
        }
      });
    });
  }

  /**
   * Back to top button (dynamically created)
   */
  function initBackToTop() {
    if (document.getElementById('back-to-top')) return;

    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'fixed bottom-6 right-6 w-12 h-12 bg-navy text-white rounded-full shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:bg-lightblue z-40';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>`;
    
    document.body.appendChild(btn);

    const toggleBtn = throttle(() => {
      if (window.scrollY > 400) {
        btn.classList.remove('opacity-0', 'invisible');
        btn.classList.add('opacity-100', 'visible');
      } else {
        btn.classList.add('opacity-0', 'invisible');
        btn.classList.remove('opacity-100', 'visible');
      }
    }, 100);

    window.addEventListener('scroll', toggleBtn);
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /**
   * Dynamic copyright year
   */
  function initDynamicYear() {
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  /**
   * Intersection Observer for lazy animations (fallback/enhancement)
   */
  function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        observer.observe(el);
      });
    }
  }

  // ==========================================
  // 3. INITIALIZATION
  // ==========================================
  
  function init() {
    initNavbar();
    initSmoothScroll();
    initAOS();
    initForms();
    initBackToTop();
    initDynamicYear();
    initScrollAnimations();
    
    // Console branding (optional, remove in production)
    console.log('%c HotelsBook %c Plataforma ativa ', 'background: #0a1628; color: #fff; padding: 4px 8px; border-radius: 4px;', 'background: #3b82f6; color: #fff; padding: 4px 8px; border-radius: 4px;');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();