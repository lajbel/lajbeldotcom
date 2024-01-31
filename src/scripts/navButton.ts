const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav__button");

navButton?.addEventListener("click", () => {
    nav?.classList.toggle("nav--active");
});
