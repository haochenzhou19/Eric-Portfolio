const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Persist user’s preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}
