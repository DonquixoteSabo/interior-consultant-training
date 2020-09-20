const bars = document.querySelector('.hamburger');

bars.addEventListener('click', () => {
    bars.classList.toggle('hamburger--active');
    document.querySelector('.navigation').classList.toggle("navigation--active")
    document.querySelector('.nav__logo').classList.toggle('nav__logo--active')
})