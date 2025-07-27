$(function () {
    // ハンバーガーメニュー
    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    })

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    //スムーススクロール
    $('a[href^="#"]').click(function(){
        let headerHeight = $('.header-line').outerHeight();
        let href =$(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - headerHeight;
        $("html,body").animate({ scrollTop: position }, 600,"swing");
        $("header").removeClass("open");
        return false;
    });

    //Topへ戻るボタン
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

    // アコーディオンメニュー
    $('.faq-question').on('click', function () {
        $(this).next('.faq-answer').stop().slideToggle(300);
        $(this).toggleClass('open');
    });

    // カーソルライト
    document.addEventListener("mousemove", function (e) {
        const cursor = document.querySelector(".cursor");
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    
});

