
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

function openNav() {
  console.log(window.innerWidth)
  if (window.innerWidth > 500) {
    console.log("big window")
    document.getElementById("navbar").style.width = "50%";
  }
  else {
    console.log("small window")
    document.getElementById("navbar").style.width = "80%";
  }

}

function closeNav() {
  document.getElementById("navbar").style.width = "0%";
}