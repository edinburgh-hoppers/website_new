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
