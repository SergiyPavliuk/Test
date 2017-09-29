/*============================*/
/* 01 - function on page load */
/*============================*/
$(window).load(function () {
    $('#loader-wrapper').fadeOut(500);
});

$(function () {
    /*============================*/
    /* 02 - Click menu */
    /*============================*/
    $(window).resize(function () {
        var windW = $(window).width();
        if (windW > 992 && $('header').is(':hidden')) {
            $('header').removeAttr('style');
        }
    });
    $('.nav-btn').click(function () {
        $(this).toggleClass('active');
        $('.navi').slideToggle();
        $('.search').slideToggle();
    });
    $('.navi li a').click(function () {
        $('.navi li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.mail').focusin(function () {
        $('.your-mail').show();
    });
    $('.mail').focusout(function () {
        $('.your-mail').hide();
    });
    /*============================*/
    /* 03 - Swiper */
    /*============================*/
    var myTopSlider = new Swiper('.top .swiper-container', {
        loop: true,
        speed: 800,
        keyboardControl: true,
        autoplay: 5000,
        paginationClickable: true,
        nextButton: '.top .swiper-button-next',
        prevButton: '.top .swiper-button-prev',
        pagination: '.top .swiper-pagination',
        onSlideChangeEnd: function (swiper) {
            $('.top .swiper-slide').each(function () {
                if ($(this).index() === swiper.activeIndex) {
                    // Fadein in active slide
                    $(this).find('.top-title, .top-desc').fadeIn(300);
                } else {
                    // Fadeout in inactive slides
                    $(this).find('.top-title, .top-desc').fadeOut(300);
                }
            });
        }
    });
    var myProductsSlider = new Swiper('.products .swiper-container', {
        loop: true,
        speed: 800,
        keyboardControl: true,
        autoplay: 4000,
        paginationClickable: true,
        pagination: '.products .swiper-pagination'
    });
    /*============================*/
    /* 04 - wow */
    /*============================*/
    new WOW().init();
    /*============================*/
    /* 05 - Scroll2id */
    /*============================*/
    $("a[href*='#']").mPageScroll2id();

});
/*============================*/
/* 06 - google map */
/*============================*/
function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('google-map'), {
        center: {
            lat: 49.8291868,
            lng: 24.0053657
        },
        scrollwheel: false,
        zoom: 16
    });
}
