const langButton = document.querySelector('.menu__button')
const menuDrop = document.querySelector('.menu__drop')
const burger = document.querySelector('.menu__burger')
const menuItems = document.querySelector('.menu__items')
const menuLang = document.querySelector('.menu__lang')
const secret = document.querySelector('.secret')
const secretBut = document.querySelector('.close-brown')

if (secretBut) {
    secretBut.addEventListener('click', function () {
        secret.style.display = 'none'
    })
}
if (langButton) {
    langButton.addEventListener('click', function () {
        menuDrop.classList.toggle('menu__drop--active')
        menuLang.classList.toggle('menu__lang--rotate')
    })
}

if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('menu__burger--active')
        menuItems.classList.toggle('menu__items--active')
    })
}

var swiper = new Swiper("#swiper-cat", {
    spaceBetween: 40,
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next-cat",
        prevEl: ".swiper-button-prev-cat",
    },
    breakpoints: {
        750: {
            allowTouchMove: true,
        }
    }
});