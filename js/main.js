$(function () {
    
        const loading = document.getElementById('loading');
        const content = document.getElementById('content')

        // ローディング画面を表示する関数
        function showLoading() {
            loading.style.display = 'flex';
            content.classList.remove('show');
        }

        // ローディング画面を非表示にする関数
        function hideLoading() {
            loading.style.display = 'none';
            content.classList.add('show');
        }

        // 1秒後にローディング画面を非表示にする
        setTimeout(hideLoading, 1000);
    
    // ハンバーガーメニュー
    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    })

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    //スムーススクロール
    $('a[href^="#"]').click(function () {
        let headerHeight = $('.header-line').outerHeight();
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - headerHeight;
        $("html,body").animate({ scrollTop: position }, 600, "swing");
        $("header").removeClass("open");
        return false;
    });

    //Topへ戻るボタン
    jQuery(function () {
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


        // アコーディオンメニュー
        $('.faq-question').on('click', function () {
            $(this).next('.faq-answer').stop().slideToggle(300);
            $(this).toggleClass('open');
        });


    });




})
