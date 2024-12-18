const sidebar = document.querySelector('.sidebar')
const openSidebarBtn = document.querySelector(
    '.products__bar__option--filters button'
)
const closeSidebarBtn = document.querySelector(
    '.sidebar__mobile-header__close-sidebar-btn'
)

function openSidebar() {
    sidebar.setAttribute('data-enabled', '')
}

function closeSidebar() {
    sidebar.removeAttribute('data-enabled')
}

openSidebarBtn.addEventListener('click', () => openSidebar())
closeSidebarBtn.addEventListener('click', () => closeSidebar())

const MIN_WIDTH = 1024
const closeSidebarOnResize = () => {
    if (window.innerWidth >= MIN_WIDTH) {
        closeSidebar()
    }
}

window.addEventListener('resize', () => closeSidebarOnResize())
