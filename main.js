const menuBtn = document.querySelector('.btn--primary-nav-toggle');
const primaryNavigation = document.querySelector('.navigation');
const pageBody = document.querySelector('body');
if(menuBtn && primaryNavigation) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('opened');
        menuBtn.setAttribute('aria-expanded', menuBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        menuBtn.setAttribute('aria-label', menuBtn.getAttribute('aria-label') === 'Open menu' ? 'Close menu' : 'Open menu');
        primaryNavigation.classList.toggle('opened');
        pageBody.classList.toggle('menu-opened');
    })
}