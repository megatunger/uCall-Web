// Custom Scripts for Fold Template //

jQuery(function($) {
    "use strict";


  // Collapse navbar on click

   $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });



    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });


  /*-------- Owl Carousel ---------- */
    $(".review-cards").owlCarousel({
    slideSpeed : 200,
    items: 1,
    singleItem: true,
    autoPlay : true,
    pagination : false
    });


    /* ------ jQuery for Easing min -- */

      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });


/* --------- Wow Init ------ */

  new WOW().init();

/*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


    /*----- Subscription Form ----- */

    $(document).ready(function() {
         // jQuery Validation
         $("#chimp-form").validate({
             // if valid, post data via AJAX
             submitHandler: function(form) {
                 $.post("assets/php/subscribe.php", { email: $("#chimp-email").val() }, function(data) {
                     $('#response').html(data);
                 });
             },
             // all fields are required
             rules: {
                 email: {
                     required: true,
                     email: true
                 }
             }
         });
     });

});
