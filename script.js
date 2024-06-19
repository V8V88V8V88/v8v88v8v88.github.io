// Scroll Effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  if (window.pageYOffset > 0) {
    document.body.classList.add('scrolling');
    header.style.backdropFilter = 'blur(20px)';
    main.style.backdropFilter = 'blur(20px)';
  } else {
    document.body.classList.remove('scrolling');
    header.style.backdropFilter = 'none';
    main.style.backdropFilter = 'blur(10px)';
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// "Hi, I'm Vaibhav" Hover Effect
const vaibhavHover = document.querySelector('.vaibhav-hover');
const hoverText = vaibhavHover.dataset.text;

vaibhavHover.addEventListener('mouseenter', () => {
  vaibhavHover.textContent = hoverText;
});

vaibhavHover.addEventListener('mouseleave', () => {
  vaibhavHover.textContent = 'Vaibhav';
});

// Light/Dark Mode Switch
const modeSwitch = document.querySelector('.mode-switch');

modeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

  const projectsContainer = document.querySelector('.projects ul');
  const leftArrow = document.createElement('div');
  const rightArrow = document.createElement('div');

  leftArrow.classList.add('arrow', 'left');
  rightArrow.classList.add('arrow', 'right');

  leftArrow.innerHTML = '&#8249;';
  rightArrow.innerHTML = '&#8250;';

  document.querySelector('.projects').prepend(leftArrow);
  document.querySelector('.projects').append(rightArrow);

  leftArrow.addEventListener('click', () => {
    projectsContainer.scrollLeft -= projectsContainer.offsetWidth;
  });

  rightArrow.addEventListener('click', () => {
    projectsContainer.scrollLeft += projectsContainer.offsetWidth;
  });  