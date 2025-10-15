document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Check saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️"; // show sun if currently dark
  } else {
    toggleBtn.textContent = "🌙"; // show moon if light
  }

  // Add click event to toggle button
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
