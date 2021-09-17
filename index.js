document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    document.getElementById('btnNav').addEventListener("click", () => {
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
});