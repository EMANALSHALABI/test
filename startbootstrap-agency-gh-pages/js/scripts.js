/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', function () {
    var logoContainer = document.getElementById('logo-container');
    var hasLogoShown = localStorage.getItem('hasLogoShown');

    if (!hasLogoShown) {
        logoContainer.classList.remove('hidden');
        localStorage.setItem('hasLogoShown', true);

        setTimeout(function () {
            logoContainer.classList.add('hidden');
            localStorage.clear();

        }, 2000);
    } else {
        logoContainer.style.display = 'none';
        localStorage.clear();

    }
});

// window.addEventListener('DOMContentLoaded', function () {
//     var loaderContainer = document.getElementById('loader-container');
//     var body = document.getElementsByTagName('body')[0];


//     body.classList.add('loaded');


//     loaderContainer.addEventListener('transitionend', function () {
//         loaderContainer.parentNode.removeChild(loaderContainer);
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    var toggleSections = document.getElementsByClassName('toggle-section');

    for (var i = 0; i < toggleSections.length; i++) {
        toggleSections[i].addEventListener('click', function () {
            var target = this.getAttribute('data-target');
            window.location.href = target;
        });
    }
})

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




var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: 3000 // Set the desired slide duration in milliseconds (e.g., 3000ms = 3 seconds)
});
