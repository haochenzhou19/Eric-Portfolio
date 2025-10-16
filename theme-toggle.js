// --------------------------
// 🌙 Dark Mode Toggle
// --------------------------
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
}

// --------------------------
// 📱 Mobile Navigation Toggle
// --------------------------
const nav = document.querySelector("nav ul");
const header = document.querySelector("header");

if (header) {
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
const faders = document.querySelectorAll(".fade-in");

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
