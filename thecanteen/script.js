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

function animated(event){
 $(event).parent().parent().parent().find('.product').addClass('animated bounceInUp');
}