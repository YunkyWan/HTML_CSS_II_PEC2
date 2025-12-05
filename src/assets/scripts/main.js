import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap';

AOS.init({
  duration: 1000,  // duración de la animación (ms)
  once: true       // se anima solo la primera vez que aparece en pantalla
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.c-nav__toggle');
  const menu = document.getElementById('nav-menu');
  const btns = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.c-speaker');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      menu.style.display = expanded ? 'none' : 'flex';
    });
  }

  btns.forEach(b => b.addEventListener('click', () => {
    const filter = b.getAttribute('data-filter');
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.type === filter) ? '' : 'none';
    });
  }));
});
