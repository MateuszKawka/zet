const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
let menuItems = document.getElementsByClassName('item__link');
let show = false;
const menuToggle = () => {
    show = !show
    if(show === true) {
        menuIcon.classList.add('menu-icon__icon--close')
        menu.classList.remove('menu--disabled')
    } else {
        menuIcon.classList.remove('menu-icon__icon--close')
        menu.classList.add('menu--disabled')
    }


}

Array.from(menuItems).forEach((element) => element.addEventListener('click', ()=> menuToggle()));
menuButton.addEventListener('click', () => menuToggle() )


var scroll = new SmoothScroll('a[href*="#"]');
