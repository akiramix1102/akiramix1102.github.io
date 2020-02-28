$(document).ready(function(){
var input = $('input'),
    input_val = parseInt(input.val()),
    btn_add = $('.add'),
    btn_remove = $('.remove');

input.keyup(function () {
    input_val = parseInt(input.val())
});

btn_add.click(function (e) {
    input_val++
    input.val(input_val);
});

btn_remove.click(function (e) {
    if (input_val > 1) {
        input_val--
    }
    input.val(input_val);
});
$('.slick-featured-menu').slick({
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
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
                infinite: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

})
function submit() {
    var text = $('#my-textarea').val();
    setTimeout(function () {
        $('.block-comment').prepend('<div class="comment">' +
            '<img src="/assets/imgs/guest-review-submit.svg" alt="khách hàng review">' +
            '<div class="content-comment">' +
                '<div class="name-time">' +
                '<h3>Quoc Dat</h3>' +
                '<p>Vừa xong</p>' +
            '</div>' + 
            '<div class="comment-text">'+text+
            '</div>'+
        '</div>');
    }, 300)
}
$('#submit').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:600}, '2000');
    });