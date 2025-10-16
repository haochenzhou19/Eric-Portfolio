document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation using IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.15 }); // Trigger when 15% visible

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
