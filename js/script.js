// Scroll Effect (single handler, rely on CSS for most effects)
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    document.body.classList.add("scrolling");
  } else {
    document.body.classList.remove("scrolling");
  }
});

// Mobile Menu Toggle + a11y
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const mobileMql = window.matchMedia('(max-width: 767px)');

function setMenuState(open) {
  if (!menuToggle || !navMenu) return;
  navMenu.classList.toggle("active", open);
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  // Only manage aria-hidden/inert on mobile layout
  if (mobileMql.matches) {
    navMenu.setAttribute("aria-hidden", String(!open));
    if (open) navMenu.removeAttribute("inert");
    else navMenu.setAttribute("inert", "");
  } else {
    navMenu.setAttribute("aria-hidden", "false");
    navMenu.removeAttribute("inert");
  }
  if (open) {
    // focus first link
    const firstLink = navMenu.querySelector('a, button, [tabindex="0"]');
    (firstLink || menuToggle).focus({ preventScroll: true });
  } else {
    menuToggle.focus({ preventScroll: true });
  }
}

function applyInertForLayout() {
  if (!navMenu || !menuToggle) return;
  if (mobileMql.matches) {
    // If not explicitly opened, keep closed and inert
    const open = navMenu.classList.contains('active');
    navMenu.setAttribute('aria-hidden', String(!open));
    if (!open) navMenu.setAttribute('inert', '');
    menuToggle.setAttribute('aria-expanded', String(open));
  } else {
    navMenu.removeAttribute('inert');
    navMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
}

if (menuToggle && navMenu) {
  menuToggle.setAttribute("aria-expanded", "false");
  applyInertForLayout();

  menuToggle.addEventListener("click", () => {
    const open = !navMenu.classList.contains("active");
    setMenuState(open);
  });

  // Close on Esc and outside click
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      setMenuState(false);
    }
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.classList.contains("active")) return;
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      setMenuState(false);
    }
  });

  // Basic focus containment when menu is open
  document.addEventListener("keydown", (e) => {
    if (!navMenu.classList.contains("active") || e.key !== "Tab") return;
    const focusables = navMenu.querySelectorAll('a, button, [tabindex="0"]');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
  // Sync behavior on viewport changes
  if (mobileMql.addEventListener) {
    mobileMql.addEventListener('change', applyInertForLayout);
  } else if (mobileMql.addListener) {
    // Legacy Safari
    mobileMql.addListener(applyInertForLayout);
  }
}

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

// Liquid Glass Navbar - Mouse tracking for dynamic highlight
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (header) {
    // Track mouse position for the liquid glass highlight effect
    header.addEventListener("mousemove", (e) => {
      const rect = header.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      header.style.setProperty("--mouse-x", `${x}%`);
      header.style.setProperty("--mouse-y", `${y}%`);
    });
    
    // Reset position when mouse leaves
    header.addEventListener("mouseleave", () => {
      header.style.setProperty("--mouse-x", "50%");
      header.style.setProperty("--mouse-y", "50%");
    });
  }
  
  // Set active nav link based on current page
  const navLinks = document.querySelectorAll(".nav-menu a");
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    // Remove existing aria-current from all links
    link.removeAttribute("aria-current");
    
    const linkPath = link.getAttribute("href");
    
    // Check if this link matches the current page
    if (linkPath === currentPath || 
        (linkPath !== "/" && currentPath.startsWith(linkPath)) ||
        (linkPath === "/" && currentPath === "/")) {
      link.setAttribute("aria-current", "page");
    }
  });
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
