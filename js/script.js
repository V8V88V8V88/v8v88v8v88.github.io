// Scroll Effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (window.pageYOffset > 0) {
    document.body.classList.add("scrolling");
    header.style.backdropFilter = "blur(20px)";
    main.style.backdropFilter = "blur(20px)";
  } else {
    document.body.classList.remove("scrolling");
    header.style.backdropFilter = "none";
    main.style.backdropFilter = "blur(10px)";
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// "Hi, I'm Vaibhav" Hover Effect
const vaibhavHover = document.querySelector(".vaibhav-hover");
const hoverText = vaibhavHover ? vaibhavHover.dataset.text : "";

if (vaibhavHover) {
  vaibhavHover.textContent = "Vaibhav";
  vaibhavHover.addEventListener("mouseenter", () => {
    vaibhavHover.textContent = hoverText;
  });

  vaibhavHover.addEventListener("mouseleave", () => {
    vaibhavHover.textContent = "Vaibhav";
  });
}

// (Theme handling consolidated below)

// Arrows for project container
const projectsContainer = document.querySelector(".projects ul");
if (projectsContainer) {
  const leftArrow = document.createElement("div");
  const rightArrow = document.createElement("div");

  leftArrow.classList.add("arrow", "left");
  rightArrow.classList.add("arrow", "right");

  leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
  rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';

  document.querySelector(".projects").prepend(leftArrow);
  document.querySelector(".projects").append(rightArrow);

  leftArrow.addEventListener("click", () => {
    projectsContainer.scrollLeft -= projectsContainer.offsetWidth;
  });

  rightArrow.addEventListener("click", () => {
    projectsContainer.scrollLeft += projectsContainer.offsetWidth;
  });
}

// Updated scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (window.pageYOffset > 0) {
    document.body.classList.add("scrolling");
    main.style.backdropFilter = "blur(20px)";
  } else {
    document.body.classList.remove("scrolling");
    main.style.backdropFilter = "blur(10px)";
  }
  // Always apply blur to header
  header.style.backdropFilter = "blur(20px)";
});

// Easter Egg Console Log
console.log("%cGreetings, fellow traveler! %cLooks like you've found the console. Curious, aren't we? ", "color: #1DB954; font-weight: bold;", "color: inherit;");
console.log("%c                 .--.      \n                / o__o \     \n               |   <>   |    \n               \  .--.  /    \n                ------    ", "color: #a8ff60"); // Using the softer terminal green for ASCII

// Konami Code Easter Egg
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];
let konamiIndex = 0;
document.addEventListener('keydown', function(e) {
  if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      console.log("%cKONAMI! %cAchievement Unlocked: Secret Handshake 😉", "color: #ff5f56; font-weight: bold;", "color: inherit;");
      // Optional: Add a visual effect here too?
      // document.body.style.filter = 'invert(1)';
      // setTimeout(() => { document.body.style.filter = 'none'; }, 1000);
      konamiIndex = 0; // Reset
    }
  } else {
    konamiIndex = 0; // Reset if wrong key pressed
  }
});

// --- Theme Switching Logic ---
const body = document.body;
const navbarSwitch = document.getElementById('mode-switch');

function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
  updateSwitchesVisualState(theme);
}

function updateSwitchesVisualState(theme) {
  // Update Navbar Switch
  if (navbarSwitch) {
    navbarSwitch.checked = (theme === 'dark');
  }
}

// Event Listener for Navbar Switch
if (navbarSwitch) {
  navbarSwitch.addEventListener('change', function () {
    const newTheme = this.checked ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

// Initial Theme Load
const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
setTheme(savedTheme); // Apply theme and sync NAVBAR switch on load
