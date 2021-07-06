AOS.init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.arrow').show();
        $('.navbar').addClass("fixed");
    } else {      
        $('.arrow').hide();
        $('.navbar').removeClass("fixed");
    }
});