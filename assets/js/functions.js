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
        if (windW > 769 && $('.nav').is(':hidden')) {
            $('.nav').removeAttr('style');
        }
    });
    $('.nav-btn').click(function () {
        $(this).toggleClass('active');
        $('.navi ul').slideToggle();
    });
});
