$(document).ready(function () {
  $(".testimonies-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-custom-arrow slick-prev"> < </button>',
    nextArrow:
      '<button type="button" class="slick-custom-arrow slick-next"> > </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(".testimonies-carousel").slick("unslick").slick({
  // opciones del carousel
});
