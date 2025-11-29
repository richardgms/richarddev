import './style.css';

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animação simples do hamburger
    hamburger.classList.toggle('toggle');
  });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('toggle');
  });
});

// FAQ Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    // Fecha outros itens abertos (opcional, estilo "accordion" estrito)
    document.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});

// Theme Toggle removido


// Spotlight Effect Logic
const spotlightCards = document.querySelectorAll('.spotlight-card');

spotlightCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Header Shadow on Scroll
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// CountUp Animation
const runAnimations = () => {
  const stats = document.querySelectorAll('.stat-number');

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = parseInt(el.getAttribute('data-duration')) || 2000;
    const easingType = el.getAttribute('data-easing') || 'easeOutQuart'; // Lê o tipo de easing
    const start = 0;
    const startTime = performance.now();

    // Easing functions
    const easings = {
      linear: (x) => x,
      easeOutQuart: (x) => 1 - Math.pow(1 - x, 4)
    };

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Aplica o easing selecionado
      const ease = easings[easingType] ? easings[easingType](progress) : easings.easeOutQuart(progress);

      const current = Math.floor(start + (target - start) * ease);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix; // Ensure final value
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
  });

  stats.forEach(stat => observer.observe(stat));
};

// Inicializa animações
runAnimations();
