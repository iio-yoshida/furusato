import ViewportChange from "./snipet/viewportChange.js";
import MobileMenu from "./snipet/mobileMenu.js";
import SmoothScroll from "./snipet/smoothScroll.js";
import ScrollHide from "./snipet/scrollHide.js";
import ScrollObserver from "./snipet/scrollObserver.js";

// ブラウザ幅が360px未満の場合、viewportをwidth=360に固定
// vwベースで組んでいる場合はViewportChange()は必要なし
new ViewportChange();

document.addEventListener('DOMContentLoaded', function() {

  // モバイルメニューボタンの動作
  new MobileMenu();

  // ScrollObserverで背景色と文字色を切り替える
  const colorChange = function(el, isIntersecting) {
    const changeItem = document.querySelector('.js-changeClr');
      if(isIntersecting) {
          changeItem.classList.add('is-changed');
      } else {
          changeItem.classList.remove('is-changed');
      }
    }
  new ScrollObserver('.js-changeClrTrigger', colorChange);

  // サイドバー等をスクロールしたら隠す、停止で表示
  new ScrollHide('.js-scrollHide');
  new ScrollHide('.js-scrollHide2');

  // スムーススクロール
  const links = document.querySelectorAll('a[href^="#"]');
  const options = {
    duration: 600,
    easing: SmoothScroll.prototype.easeInOutCubic
  };

  new SmoothScroll(links, options);

});
