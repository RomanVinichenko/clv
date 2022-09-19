const langButton = document.querySelector('.menu__button')
const menuDrop = document.querySelector('.menu__drop')
const burger = document.querySelector('.menu__burger')
const menuItems = document.querySelector('.menu__items')
const menuLang = document.querySelector('.menu__lang')

if (langButton) {
    langButton.addEventListener('click', function () {
        menuDrop.classList.toggle('menu__drop--active')
        menuLang.classList.toggle('menu__lang--rotate')
    })
}
if (window.innerWidth < 750) {
    langButton.addEventListener('click', function () {
        menuItems.classList.toggle('menu__items--lang')
    })
}
if (burger) {
    burger.addEventListener('click', function () {
        burger.classList.toggle('menu__burger--active')
        menuItems.classList.toggle('menu__items--active')
    })
}