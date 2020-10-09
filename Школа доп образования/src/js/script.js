$(document).ready(function () {
    $('.slider').slick({
        // arrows: true,
        dots: false,
        adaptiveHeight: true,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        // speed: 500,
        // easing: 'ease',
        // infinite: false,
        // initialSlide: 0,
        // autoplay: false,
        // autoplaySpeed: 500,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        // draggable: false,
        swipe: true,
        // touchThreshold: 10,
        // touchMove: true,
        // waitForAnimate: true,
        // centerMode: true,
        variableWidth: true,

    });
    $('.slider-reviews').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 2,
        // slidesToScroll: 3,
        // speed: 500,
        // easing: 'ease',
        // infinite: false,
        initialSlide: 0,
        autoplay: false,
        // autoplaySpeed: 500,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        // waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
        responsive: {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                variableWidth: true
            }
        }
    })
});

// function equalSlideHeight(slider){
//     $(slider).on('setPosition', function () {
//         $(this).find('.slick-slide').height('auto');
//         var slickTrack = $(this).find('.slick-track');
//         var slickTrackHeight = $(slickTrack).height();
//         $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
//     });
// }
//
//
// equalSlideHeight('.slider-reviews');
//
// equalSlideHeight('.slider');


document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.nav-mobile').classList.toggle("animate");
})


var body = document.querySelector('body')
var modal = document.getElementById('myModal');
var modalCnt = document.querySelector('.modal');


var btn = document.getElementById("askBtn");




btn.onclick = function() {
    modal.style.display = "block";
    modalCnt.style.top = "25vw";
}



window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalCnt.style.top = "-125vw";

    }
}