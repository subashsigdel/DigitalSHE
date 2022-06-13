$(window).scroll(function() {
    if (scrollY > 20) {
        $('nav_bar').addClass('sticky')} 
        else {
            $('nav_bar').removeClass('sticky')
        }
    }
);