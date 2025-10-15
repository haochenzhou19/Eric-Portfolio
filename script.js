document.addEventListener("DOMContentLoaded", () => {
  // Active nav link
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // Mobile nav toggle
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // Theme toggle (small invert effect) - optional UI element exists if you add it
  const themeBtn = document.querySelector("#theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("theme-invert");
      const on = document.documentElement.classList.contains("theme-invert");
      localStorage.setItem("themeInvert", on ? "1" : "0");
    });
    // initialize
    if (localStorage.getItem("themeInvert") === "1") {
      document.documentElement.classList.add("theme-invert");
    }
  }
});
