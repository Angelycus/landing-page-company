const mobileNav = document.querySelector("nav.mobile");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu .x-icon");
const mobMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobMenu.classList.remove("active");
});