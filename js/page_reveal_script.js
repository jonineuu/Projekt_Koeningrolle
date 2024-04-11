$(document).ready(function(){
    function triggerPageReveal() {
        $('.page-reveal').each(function(){
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if(bottom_of_window > top_of_element) {
                $(this).addClass('active');
            }
        });
    }
    triggerPageReveal();
    $(window).scroll(function() {
        triggerPageReveal();
    });
});
