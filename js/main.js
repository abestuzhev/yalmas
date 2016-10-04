$(document).ready(function(){
  $('.header-slider').slick({
    arrows: false,
    autoplay: true,
		autoplaySpeed: 5000
  });
});


$(window).bind('load', function() {

    $('.js-dotted').dotdotdot();
});
