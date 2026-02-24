import './style.css';

// =========================================================================
// Mobile Menu Toggle
// =========================================================================
try {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
      });
    });
  }
} catch (error) {
  console.error('Error initializing mobile menu:', error);
}

// =========================================================================
// FAQ Accordion
// =========================================================================
try {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        if (!item) return;

        document.querySelectorAll('.accordion-item').forEach(i => {
          if (i !== item) i.classList.remove('active');
        });

        item.classList.toggle('active');
      });
    });
  }
} catch (error) {
  console.error('Error initializing FAQ:', error);
}

// =========================================================================
// Spotlight Effect Logic (Optimized with requestAnimationFrame)
// =========================================================================
try {
  const spotlightCards = document.querySelectorAll('.spotlight-card');

  if (spotlightCards.length > 0) {
    spotlightCards.forEach(card => {
      let rafId = null;

      card.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    });
  }
} catch (error) {
  console.error('Error initializing Spotlight Effect:', error);
}

// =========================================================================
// Header Shadow on Scroll (Optimized with requestAnimationFrame)
// =========================================================================
try {
  const header = document.querySelector('.navbar');
  if (header) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
} catch (error) {
  console.error('Error initializing Header Scroll:', error);
}

// =========================================================================
// CountUp Animation (Optimized and Isolated)
// =========================================================================
const runAnimations = () => {
  try {
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length === 0) return;

    const animate = (el) => {
      const target = parseInt(el.getAttribute('data-target')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = parseInt(el.getAttribute('data-duration')) || 2000;
      const easingType = el.getAttribute('data-easing') || 'easeOutQuart';
      const start = 0;
      const startTime = performance.now();

      const easings = {
        linear: (x) => x,
        easeOutQuart: (x) => 1 - Math.pow(1 - x, 4)
      };

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easings[easingType] ? easings[easingType](progress) : easings.easeOutQuart(progress);

        const current = Math.floor(start + (target - start) * ease);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + suffix;
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px"
    });

    stats.forEach(stat => observer.observe(stat));
  } catch (error) {
    console.error('Error running CountUp Animations:', error);
  }
};

runAnimations();

// =========================================================================
// Phase 5 - Scroll Reveal Observer (Fade-Up)
// =========================================================================
try {
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealCallback = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
} catch (error) {
  console.error('Error initializing Scroll Reveal:', error);
}
