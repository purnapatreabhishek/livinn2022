const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
burgerMenu.classList.toggle("active");
navbarMenu.classList.toggle("active");

if (navbarMenu.classList.contains("active")) {
  navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
} else {
  navbarMenu.removeAttribute("style");
}
});

// Hide Menu when Click the Links
document.querySelectorAll(".menu-link").forEach((link) => {
link.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});
});