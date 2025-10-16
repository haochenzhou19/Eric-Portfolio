// --------------------------
// 🌙 Dark Mode Toggle (with Persistence)
// --------------------------
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  // Restore user's theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

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
