$(function () {

    $(document).scroll(function () {
        var navTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (navTop >= 100) {
            $('.navbar-default').css({
                backgroundColor: '#E7E7E7'
            });
        }

        if (navTop <= 100) {
            $('.navbar-default').css({
                backgroundColor: 'transparent'
            });
        }


    });


});
