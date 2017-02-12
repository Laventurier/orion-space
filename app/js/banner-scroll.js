$(document).ready(function() {
    $('.sub-header').parallax({
        imageSrc: '../img/banner.jpg'
    });

    var isToggled = false;
    $('.adaptive-btn').click(function() {
        if (isToggled === false) {
            $('.adaptive-btn span').css({
                width: "40%",
                transition: '0.6s all ease'
            });
            $('header ul').slideDown(600);
            isToggled = true;
        } else {
            $('.adaptive-btn span').css({
                width: "70%",
                transition: '0.6s all ease'
            });
            $('header ul').slideUp(600);
            isToggled = false;
        }
    });
});
