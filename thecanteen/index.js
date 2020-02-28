$(document).ready(function () {
    $('.button-buy').click(function () {
        toastr.options = {
            "closeButton": true,
            "debug": true,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "showDuration": "300",
            "hideDuration": "1000000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["success"]("Đã thêm vào giỏ hàng");
    });


    // slick slider
    $('#slick-intro').slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    $('.slick-featured-menu').slick({
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1903,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    infinite: true,
                    autoplay:true,
                    autoplaySpeed:2000,
                    dots:true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    autoplay:true,
                    autoplaySpeed:2000,
                    infinite: true,
                    dots:true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    autoplay:true,
                    autoplaySpeed:2000,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // $('#flex-all-menu').slick({
    //     arrows: false,
    //     autoplay: false,
    //     autoplaySpeed: 1000,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     dots: true
    // });
    $('.slick-review').slick({
        autoplay: true,
        autoplaySpeed:2500,
        // dots: true,
        arrows: false
    });
});

// count down
var countDownDate = new Date("Feb 14, 2020 0:0:0").getTime();
var countdownfunction = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// btn back to top  
var btn = $('#btn-backtop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '2000');
});

// function change background color button
function changeBg(event) {
    $('button.menu-link').css('background', '#8c858540').css('color', '#000');
    $(event).css('background', '#ff3547').css('color', '#fff');
    $(event).parent().parent().parent().parent().find('.menu-all-left').addClass('animated fadeInLeft');
    $(event).parent().parent().parent().parent().find('.menu-all-right').addClass('animated fadeInRight');
}