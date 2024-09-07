const burgerBtn = document.getElementById("burger");
const closeBtn = document.getElementById("close-svg");

const nav_items = document.querySelector(".nav-items");
burgerBtn.addEventListener("click", () => {
  nav_items.classList.toggle("open");
  burgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  nav_items.classList.toggle("open");
  burgerBtn.style.display = "block";
  closeBtn.style.display = "none";
});
