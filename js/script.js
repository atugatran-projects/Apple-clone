// Navbar
let nav_btn = document.getElementsByClassName("nav-btn")[0];
let btn = document.getElementById("btn");
let list = document.getElementById("nav");

nav_btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
    list.classList.toggle("is-active2");
});