
// PARTICLES IN HOME PAGE
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});


$(document).ready(() => {
  $('.carousel-wrapper .slick').slick({
    dots: true,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: '890',
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
})