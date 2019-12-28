// Navigation bar - On-scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function () {
  // navigation menu button toggle
  $(".navbar-toggler-icon").click(function () {
    $(".fas.fa-bars").toggleClass("fa-times");
  });

  // active nav-link color
  // $(".nav-item a").click(function () {
  //   $(this).addClass('active');
  //   var $siblings = $(this).parent().siblings();
  //   $siblings.children().removeClass('active')
  // });

});

// smooth scrolling
$(function () {
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});

// Scroll active link change
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('#navbarSupportedContent ul li a.active').removeClass('active');
          $('#navbarSupportedContent ul li a').eq(i).addClass('active');
      }
  });
}).scroll();