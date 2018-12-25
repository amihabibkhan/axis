$(function () {
    $('.popular_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow:'.popular_right',
        prevArrow:'.popular_left',
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
    $('.trend_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow:'.tr_right',
        prevArrow:'.tr_left',
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
    $('.latest_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow:'.latest_right',
        prevArrow:'.latest_left',
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

    // sidebar active menu
    $('.list-group').on('click', 'a', function () {
        $('.list-group a.active').removeClass('active');
        $(this).addClass('active');
    });

    $("#full_syllabus_button").click(function() {
        var elem = $("#full_syllabus_button").text();
        if (elem == "View Full Syllabus") {
            //Stuff to do when btn is in the read more state
            $("#full_syllabus_button").text("View Less Syllabus");
            $("#all_card").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#full_syllabus_button").text("View Full Syllabus");
            $("#all_card").slideUp();
        }
    });
});

// sticky sidebar
var sidebar = new StickySidebar('.sidebar', {
    topSpacing: 20,
    bottomSpacing: 20,
    containerSelector: '.main-content',
    innerWrapperSelector: '.sidebar__inner'
});