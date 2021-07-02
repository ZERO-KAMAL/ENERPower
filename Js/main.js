AOS.init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.arrow').show();
    } else {      
        $('.arrow').hide();
    }
});