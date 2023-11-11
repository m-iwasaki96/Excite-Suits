$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger, .js-drawer, .js-drawer a").click(function () {
    $(".js-hamburger, body").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // クリック有効化
  },
});

// スクロールでヘッダーの背景色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});

// ページ内スクロール
$(function () {
  // ヘッダーの高さ取得
  const headerHeight = $(".js-header").height();
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// タブ切り替え
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-service-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);
    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});

// モーダル
$(function () {
  const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

  // ボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    modal.addClass("is-open");
  });

  // 閉じるボタンをクリックしたらモーダルを閉じる
  close.add(modal).on("click", function () {
    modal.removeClass("is-open");
  });
});
