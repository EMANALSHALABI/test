/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    var scrollUpBtn = document.getElementById('scroll-up-btn');
    var scrollDownBtn = document.getElementById('scroll-down-btn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            scrollUpBtn.style.display = 'block';
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.style.display = 'none';
            scrollUpBtn.classList.remove('show');
        }

        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight) {
            scrollDownBtn.style.display = 'none';
            scrollUpBtn.classList.remove('show');
        } else {
            scrollDownBtn.style.display = 'block';
            scrollUpBtn.classList.add('show');
        }
    });

    scrollUpBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    scrollDownBtn.onclick = function () {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
});
const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

setInterval(() => {
    // Accessing All the carousel Items
    Array.from(carouselItems).forEach((item, index) => {

        if (i < carouselItems.length) {
            item.style.transform = `translateX(-${i * 100}%)`
        }
    })


    if (i < carouselItems.length) {
        i++;
    }
    else {
        i = 0;
    }
}, 6000)
