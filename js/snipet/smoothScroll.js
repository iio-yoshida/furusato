/* スムーススクロール */

// 使用例
// const links = document.querySelectorAll('a[href^="#"]');
// const options = {
//   duration: 1000,
//   easing: SmoothScroll.prototype.easeInOutQuad
// };
// const smoothScroll = new SmoothScroll(links, options);

// 注意点
// ページのトップへ戻る場合、トップ部分にid="top"を付与する必要あり
// headerOffset 指定しても効いてない？

export default class SmoothScroll {
  constructor(links, options) {
    this.links = links;
    this.options = {
      duration: options.duration || 1000,
      easing: options.easing || this.easeInOutQuad,
      headerOffset: null
    };
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = targetElement.getBoundingClientRect().top;
        const startingY = window.pageYOffset;
        const headerOffset = this.options.headerOffset || 0;
        const duration = this.options.duration;
        const easing = this.options.easing;
        let startTime = null;

        const animateScroll = currentTime => {
          if (startTime === null) {
            startTime = currentTime;
          }
          const timeElapsed = currentTime - startTime;
          const run = easing(timeElapsed, startingY, topOffset - headerOffset, duration);
          window.scrollTo(0, run + headerOffset);
          if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
          }
        };
        requestAnimationFrame(animateScroll);
      });
    });
  }

  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  easeInQuad(t, b, c, d) {
    t /= d;
    return c * t * t + b;
  }
  easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }
  easeInCubic(t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
  }
  easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }
  easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
  linear(t, b, c, d) {
    return c * t / d + b;
  }
}
