
$(function () {

    $('.slider').slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'.right_arrow',
        prevArrow:'.left_arrow',
        fade: true,
        speed: 2000,
        dots: false,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow:'.right',
        prevArrow:'.left',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.partner_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

//    venobox for video
    $('.venobox').venobox();

//    counter
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    // Venobox js for gallery
    $('.venobox_gallery').venobox({
        border: '10px',
        titleattr: 'data-title'
    });


    //    countdown
    function makeTimer() {

        var endTime = new Date("November 28, 2018 12:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;

        var now = new Date();
        var now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }
    setInterval(function () {
        makeTimer();
    }, 1000);


    //    back to top
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


    //    smothly scroll
    $('body').scrollspy({
        target: ".navbar",
        offset: 100
    });

    $('#my_nav a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}