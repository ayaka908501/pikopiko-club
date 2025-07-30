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



    // 利用者の声

    $('.readmore-btn').on('click', function () {
      $('.readmore-content').slideToggle(500);
    });
});

    // ギャラリースライドショー
$(function () {
  let current = 0;
  const slides = $(".gallery-slide");
  const total = slides.length;

  function showSlide(index) {
    slides.removeClass("active").eq(index).addClass("active");
  }

  $(".next").click(function () {
    current = (current + 1) % total;
    showSlide(current);
  });

  $(".prev").click(function () {
    current = (current - 1 + total) % total;
    showSlide(current);
  });

  // 自動再生（3秒ごと）
  setInterval(function () {
    current = (current + 1) % total;
    showSlide(current);
  }, 3000);
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

    



