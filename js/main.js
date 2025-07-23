$(function () {
    // ハンバーガーメニュー
    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    })

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    jQuery(function() {
    var pagetop = $('.page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {  
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

    


})
