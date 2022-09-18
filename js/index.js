const langButton = document.querySelector('.menu__button')
const menuDrop = document.querySelector('.menu__drop')

if (langButton) {
    langButton.addEventListener('click', function () {
        menuDrop.classList.toggle('menu__drop--active')
    })
}