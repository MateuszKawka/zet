'use strict';

var menuButton = document.getElementById('menu-button');
var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menu-icon');
var menuItems = document.getElementsByClassName('item__link');
var show = false;
var menuToggle = function menuToggle() {
    show = !show;
    if (show === true) {
        menuIcon.classList.add('menu-icon__icon--close');
        menu.classList.remove('menu--disabled');
    } else {
        menuIcon.classList.remove('menu-icon__icon--close');
        menu.classList.add('menu--disabled');
    }
};

Array.from(menuItems).forEach(function (element) {
    return element.addEventListener('click', function () {
        return menuToggle();
    });
});
menuButton.addEventListener('click', function () {
    return menuToggle();
});

var scroll = new SmoothScroll('a[href*="#"]');

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map).bindPopup('meet us here').openPopup();