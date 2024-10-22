$(document).ready(function () {
  //Hero Slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    responsive: {
      0: {
        nav: false,
      },
      767: {
        nav: true,
      },
    },
  });

  //Project Slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      767: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // Reviews Slider
  $("#reviews-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
  });
});
