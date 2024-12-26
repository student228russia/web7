$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});
