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

// Light/Dark Mode Switch
const modeSwitch = document.querySelector(".mode-switch");

if (modeSwitch) {
  modeSwitch.addEventListener("change", function () {
    console.log("Switching theme");
    const body = document.querySelector("body");
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
    // Save the mode in localStorage
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  // Load the saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.querySelector("body").classList.add("light-mode");
    document.querySelector("body").classList.remove("dark-mode");
  }
}

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
