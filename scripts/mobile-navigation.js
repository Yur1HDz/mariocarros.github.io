const openMenuBtn = document.querySelector(
    '.navbar__open-mobile-navigation-btn'
)
const closeMenuBtn = document.querySelector('.mobile-navigation__close-btn')
const mobileNavigation = document.querySelector('.mobile-navigation')

function openMenu() {
    mobileNavigation.setAttribute('data-enabled', '')
}

function closeMenu() {
    mobileNavigation.removeAttribute('data-enabled')
}

openMenuBtn.addEventListener('click', () => openMenu())
closeMenuBtn.addEventListener('click', () => closeMenu())
