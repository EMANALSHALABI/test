//jquery-click-scroll
//by syamsul'isul' Arifin

// var sectionArray = [1, 2, 3, 4, 5];

// $.each(sectionArray, function (index, value) {

//     $(document).scroll(function () {
//         var offsetSection = $('#' + 'section_' + value).offset().top - 94;
//         var docScroll = $(document).scrollTop();
//         var docScroll1 = docScroll + 1;


//         if (docScroll1 >= offsetSection) {
//             $('.navbar-nav .nav-item .nav-link').removeClass('active');
//             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
//             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//         }

//     });

//     $('.click-scroll').eq(index).click(function (e) {
//         var offsetClick = $('#' + 'section_' + value).offset().top - 94;
//         e.preventDefault();
//         $('html, body').animate({
//             'scrollTop': offsetClick
//         }, 300)
//     });

// });
const privacyLink = document.getElementById('privacy-link');
privacyLink.addEventListener('click', () => {
    window.location.href = 'page.html';
});
const imp = document.getElementById('imp');
privacyLink.addEventListener('click', () => {
    window.location.href = 'impressum.html';
});
window.addEventListener('DOMContentLoaded', function () {
    var logoContainer = document.getElementById('logo-container');
    var hasLogoShown = localStorage.getItem('hasLogoShown');

    if (!hasLogoShown) {
        logoContainer.classList.remove('hidden');
        localStorage.setItem('hasLogoShown', true);

        setTimeout(function () {
            logoContainer.classList.add('hidden');
            localStorage.clear();

        }, 3000);
    } else {
        logoContainer.style.display = 'none';
        localStorage.clear();

    }
});

// $(".nav-link").on("shown.bs.tab", function (e) {
//     var href = $(this).attr("data-bs-target");
//     $("html, body").animate(
//         {
//             scrollTop: $(href).offset().top
//         },
//         "slow"
//     );
// });

// $(document).ready(function () {
//     $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
//     $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
//     $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
// });

function handleFullWidthSizing() {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth

    document.querySelector('myElement').style.width = `calc(100vw - ${scrollbarWidth}px)`
}
const jsonFilePath = '/images/burger.json';
fetch(jsonFilePath)
    .then(response => response.json())
    .then(jsonData => {
        // Create an <img> element
        const imgElement = document.createElement('img');

        // Set the image source to the JSON data
        imgElement.src = jsonData;

        // Append the <img> element to the container
        const container = document.getElementById('image-container');
        container.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });
