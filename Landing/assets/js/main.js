jQuery(document).ready(function ($) {
    $('#form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            gender: "required",
            birthday: "required",
            phone: {
                required: true,
                number: true
            },
            pass: "required",
            repass: "required"
        },
        messages: {
            name: "Vui lòng nhập họ và tên",
            email: "Vui lòng nhập đúng email",
            gender: "Vui lòng nhập giới tính",
            birthday:"Vui lòng nhập ngày sinh",
            phone:"Vui lòng nhập số điện thoại",
            pass:"Vui lòng nhập mật khẩu",
            repass:"Vui lòng nhập lại mật khẩu"
        }
    });
})

function countdown(){
    // count down
    var countDownDate = new Date("Jun 10, 2020 0:0:0").getTime();
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
}
jQuery(document).ready(function($){
    countdown();
})