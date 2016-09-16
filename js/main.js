$(document).ready(function(){
  $('.header-slider').slick({
    autoplay: true,
		autoplaySpeed: 5000
  });
});


$(window).bind('load', function() {

    $('.js-dotted').dotdotdot();
});
