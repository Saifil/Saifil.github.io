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
  $(".nav-item a").click(function () {
    console.log($(this))
    $(this).addClass('active');
    var $siblings = $(this).parent().siblings();
    $siblings.children().removeClass('active')
  });
});
