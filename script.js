document.addEventListener("DOMContentLoaded", () => {
  // highlight active nav link
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // hamburger toggle
  const hb = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if (hb && nav) {
    hb.addEventListener("click", () => nav.classList.toggle("show"));
  }

  // simple intersection observer for fade-up elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-up").forEach(el => io.observe(el));
});
