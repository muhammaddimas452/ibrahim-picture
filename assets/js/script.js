menuBar = document.querySelector('.nav-section .box-nav .menu');

document.querySelector('#menu-bar').onclick = () => {
    menuBar.classList.toggle('menu-active');
};

const navbar = document.querySelector(".nav-section");

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", windowPosition);
})