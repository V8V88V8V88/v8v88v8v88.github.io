window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    document.body.classList.add("scrolling");
  } else {
    document.body.classList.remove("scrolling");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const mobileMql = window.matchMedia('(max-width: 767px)');

function setMenuState(open) {
  if (!menuToggle || !navMenu) return;
  navMenu.classList.toggle("active", open);
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  if (mobileMql.matches) {
    navMenu.setAttribute("aria-hidden", String(!open));
    if (open) navMenu.removeAttribute("inert");
    else navMenu.setAttribute("inert", "");
  } else {
    navMenu.setAttribute("aria-hidden", "false");
    navMenu.removeAttribute("inert");
  }
  if (open) {
    const firstLink = navMenu.querySelector('a, button, [tabindex="0"]');
    (firstLink || menuToggle).focus({ preventScroll: true });
  } else {
    menuToggle.focus({ preventScroll: true });
  }
}

function applyInertForLayout() {
  if (!navMenu || !menuToggle) return;
  if (mobileMql.matches) {
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
  if (mobileMql.addEventListener) {
    mobileMql.addEventListener('change', applyInertForLayout);
  } else if (mobileMql.addListener) {
    mobileMql.addListener(applyInertForLayout);
  }
}

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

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (header) {
    header.addEventListener("mousemove", (e) => {
      const rect = header.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      header.style.setProperty("--mouse-x", `${x}%`);
      header.style.setProperty("--mouse-y", `${y}%`);
    });

    header.addEventListener("mouseleave", () => {
      header.style.setProperty("--mouse-x", "50%");
      header.style.setProperty("--mouse-y", "50%");
    });
  }

  const navLinks = document.querySelectorAll(".nav-menu a");
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    link.removeAttribute("aria-current");

    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath ||
      (linkPath !== "/" && currentPath.startsWith(linkPath)) ||
      (linkPath === "/" && currentPath === "/")) {
      link.setAttribute("aria-current", "page");
    }
  });
});

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
  if (navbarSwitch) {
    navbarSwitch.checked = (theme === 'dark');
  }
}

if (navbarSwitch) {
  navbarSwitch.addEventListener('change', function () {
    const newTheme = this.checked ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
