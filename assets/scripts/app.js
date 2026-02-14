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

// HERO SCROLL INTERACTIVITY
const heroText = document.querySelector('.home-text');
const heroImage = document.querySelector('.home-image');

function updateHeroScroll() {
    const scrollY = window.scrollY;
    const maxTextBlur = 8;       // px
    const maxTextTranslate = 20; // px
    const maxImageBlur = 4;      // px
    const maxScroll = 300;       // px scroll distance for full focus

    if (heroText) {
        const textBlur = Math.max(0, maxTextBlur - (scrollY / maxScroll) * maxTextBlur);
        const textOpacity = Math.min(1, 0.5 + (scrollY / maxScroll) * 0.5);
        const textTranslate = Math.max(0, maxTextTranslate - (scrollY / maxScroll) * maxTextTranslate);

        heroText.style.filter = `blur(${textBlur}px)`;
        heroText.style.opacity = textOpacity;
        heroText.style.transform = `translateY(${textTranslate}px)`;
    }

    if (heroImage) {
        const imageBlur = Math.max(0, maxImageBlur - (scrollY / maxScroll) * maxImageBlur);
        const imageOpacity = Math.min(1, 0.6 + (scrollY / maxScroll) * 0.4);

        heroImage.style.filter = `blur(${imageBlur}px)`;
        heroImage.style.opacity = imageOpacity;
    }
}

// Use requestAnimationFrame for smooth performance
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeroScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Initialize on load in case user refreshes mid-scroll
window.addEventListener('load', updateHeroScroll);

//function openNav() {
//    console.log(window.innerWidth)
//    if (window.innerWidth > 500) {
//        console.log("big window")
//        document.getElementById("navbar").style.width = "50%";
//    }
//    else {
//        console.log("small window")
//        document.getElementById("navbar").style.width = "80%";
//    }
//}

//function closeNav() {
//    document.getElementById("navbar").style.width = "0%";
//}

//console.log("hello");
//const eventContainers = document.querySelectorAll(".div[class*='event-container']");
//console.log(eventContainers);

//for (let i = 0; i < 3; i++) {
//    console.log("hello2");
//    const eventTitle = eventContainers[i].querySelector(".smgc-cal-lcOSRAOVrXSBQGcGEnQe-event-summary");
//    console.log(eventTitle.innerText);
//    //const wrapper = document.createElement('a');
//}

//const eventTitle = document.querySelectorAll(".smgc-cal-lcOSRAOVrXSBQGcGEnQe-event-summary");
//const eventLocation = document.querySelectorAll(".smgc-cal-lcOSRAOVrXSBQGcGEnQe-event-location");
