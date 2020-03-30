/* eslint-disable no-unused-expressions */
/* eslint-disable space-unary-ops */
! function ($) {
  "use strict";
  window.urlChanged  = (e) => {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        $(".top-head").addClass("nav-sticky");
      } else {
        $(".top-head").removeClass("nav-sticky");
      }
    });
    function jumpToElement(hash){
      try {
        if (hash === '') {
          $("html, body").animate({ scrollTop: 0 }, 1500);
          return;
        }
        $('html, body').stop().animate({
          scrollTop: $(hash).offset().top - 70
        }, 1500, 'easeInOutExpo');
      }catch(e){
        //console.error("error ocurred on click nav.")
      }
    }
    $('.navbar-nav a, .mouse-down').bind('click', function (event) {
      jumpToElement($(this)[0].hash);
      event.preventDefault();
    });
    // Scrollspy
    $("#navbarCollapse").scrollspy({ offset: 70 });

    // Magnific Popup
    $('.mfp-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      }
    });
    // BACK TO TOP
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });

    $(".back-to-top").bind("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 2000);
      return false;
    });

    var hash = location.hash //.replace(/^#/, '');
    jumpToElement(hash)
  };

  window.urlChanged();
  // Loader
  $(window).on('load', function () {
    $('#preloader').delay(50).fadeOut('slow');
    $('#status').fadeOut();
    $('body').delay(350).css({
      'overflow': 'visible'
    });
  });
  // Menu

}(jQuery)

