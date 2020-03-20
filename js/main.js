window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    const menuIcon = document.querySelector('.menu-icon'),
        menuIconLine = document.querySelector('.menu-icon__line'),
        navbar = document.querySelector('.navbar');
    

    menuIcon.addEventListener('click', () => {
    menuIconLine.classList.toggle('menu-icon__line_active');
    navbar.classList.toggle('navbar_active');

});
});