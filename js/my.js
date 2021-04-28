$('.button-toggle, .container-menu-header').on('click', function () {
    $('.button-toggle').toggleClass('fs');
    $('.container-menu-header').toggleClass('active-nav');
    $('.button-toggle').text() == "✕" ? $('.button-toggle').text('☰') : $('.button-toggle').text('✕');
});

$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.container-menu-header').removeClass('active-nav');
        $('.button-toggle').text('☰');
    }
});

$('[data-open-block]').on('click', function () {
    const activeCls = 'active';

    $('[data-content]').removeClass(activeCls);
    $(`[data-content="${$(this).data('open-block')}"]`).addClass(activeCls);
});

// function changeActiveButton() {
//     const buttonActive = 'button-active';

//     $('.button-active').removeClass(buttonActive);
//     $('.button-active').addClass(buttonActive);

// }
// $('button').on('click', changeActiveButton);

// new Splide('#splide', {
//     perPage: 3,
//     perMove: 1,
//     type: 'slide',
//     gap: "20px",
//     cover: true,
//     rewind: true,
//     pagination: false,
//     breakpoints: {
//         992: {
//             perPage: 2,
//         },
//         576: {
//             perPage: 1,
//         }
//     }

// }).mount();

// new Splide('#splide-day', {
//     perPage: 1,
//     perMove: 1,
//     type: 'fade',
//     cover: true,
//     rewind: true,
//     pagination: false,
//     fixedHeight: "44.5rem",
// }).mount();

function changeActiveHeaderElement() {
    const line = 'line-header';
    $(".line-header").removeClass(line)
    const element = $(`a[href="${window.location.hash}"]`)
    if (element.length > 0 && window.location.hash !== "#") {
        element.addClass(line);
    } else {
        $('a[href="#home"]').addClass(line)
    }
}
$(window).on('load', changeActiveHeaderElement);
$(window).on('hashchange', changeActiveHeaderElement);

window.onscroll = function () { srollWindow() };

function srollWindow() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("nav").className = "test";
    } else {
        document.getElementById("nav").className = "";
    }
}

// $(function () {
//     $('.asked-title').click(function () {
//         const $item = $(this).parents('.asked-list');

//         $item.toggleClass('accordion-item--active').siblings('.accordion-item--active').removeClass('accordion-item--active');
//     });
// });
