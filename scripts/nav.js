// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-navbar-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-navbar-collapse");
    }
});

//scrolling - easing plugin
//
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        console.log($anchor);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


