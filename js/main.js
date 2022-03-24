$(function () {

    // $('[data-fancybox]').fancybox({
    //     youtube: {
    //         controls: 0,
    //         showinfo: 0
    //     },

    // });


    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('.menu__list--active');
    });


    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="img/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="img/arrow-right.png" alt="next"></button>',
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                // slidesToShow: 3
                autoplay: true,
                autoplaySpeed: 2000
            }
        }]
    });

    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });

});