// --------------------------
// 🌙 Dark Mode Toggle (Fixed + Persistent)
// --------------------------
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load previous mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

// Toggle theme on click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// --------------------------
// 📱 Mobile Navigation Toggle (fixed selector)
// --------------------------
const nav = document.querySelector("nav");
const header = document.querySelector("header");

if (header && nav) {
  const menuButton = document.createElement("button");
  menuButton.textContent = "☰";
  menuButton.id = "menu-toggle";
  menuButton.setAttribute("aria-label", "Toggle navigation menu");
  header.insertBefore(menuButton, nav);

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// --------------------------
// ✨ Scroll Fade-In Animation
// --------------------------
const faders = document.querySelectorAll(".fade-in, .fade-up");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
