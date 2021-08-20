
// PARTICLES IN HOME PAGE
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    height: '9rem',
    width: '80%',
    autoWidth: true,
    focus: 'center',
    perPage: 2,
    gap: '2em',
    autoplay: true,
  }).mount();
});