(function($){
    var arrow_down = $(".arrow"),
        menu = $(".nav"),
        menuLinks = menu.find("a");

    (arrow_down).add(menuLinks).on("click",function(event) {
        $("body,html").animate({ scrollTop : $(this.hash).offset().top},1000 );
        event.preventDefault();
    });

    $('ul li a').click(function(event){
        var className = "selected";

        $('a').removeClass(className);
        $(this).addClass(className);
        event.preventDefault();
    });

    $(".navigation .toggle-button").on("click", function(event){
        var postHeader = $(".post-header"),
            mobilMenu = $(".toggle");

        (postHeader).add(mobilMenu).toggle();
    });

})(jQuery); 