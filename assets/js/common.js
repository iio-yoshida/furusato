import ViewportChange from "./snipet/viewportChange.js";
import TouchDeviceJudge from "./snipet/touchDeviceJudge.js";
import MobileMenu from "./snipet/mobileMenu.js";
import SmoothScroll from "./snipet/smoothScroll.js";
import ScrollObserver from "./snipet/scrollObserver.js";

// ブラウザ幅が360px未満の場合、viewportをwidth=360に固定
new ViewportChange();
// タッチデバイス判定
new TouchDeviceJudge();

document.addEventListener('DOMContentLoaded', function() {
  // モバイルメニューボタンの動作
  new MobileMenu();
  // スムーススクロール
  const links = document.querySelectorAll('a[href^="#"]');
  const options = {
    duration: 600,
    easing: SmoothScroll.prototype.easeInOutCubic
  };
  new SmoothScroll(links, options);

  // TOPへ戻るボタンを表示
  const displayReturnTop = function(el, isIntersecting) {
    const returnTop = document.querySelector('.js-returnTop');
    if(isIntersecting) {
      returnTop.classList.remove('is-shown');
    } else {
      returnTop.classList.add('is-shown');
    }
  }
  new ScrollObserver('.js-firstView', displayReturnTop, {
      once:false,
      threshold: 0.5,
    }
  );

});
