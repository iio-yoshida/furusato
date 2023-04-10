/* InterSectionObserverを使用して対象要素の交差を監視して、コールバック関数を実行 */

// 使用例
// // コールバック関数
// const headerShow = function(el, isIntersecting) {
//   if(isIntersecting) {
//     header.classList.remove('is-shown');
//     header.classList.add('is-hidden');
//   } else {
//     header.classList.remove('is-hidden');
//     header.classList.add('is-shown');
//   }
// }
// // インスタンス化
// new ScrollObserver('.js-firstView', headerShow, {once: false});

export default class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.cb(entry.target, true);
          if(this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach(el => this.io.observe(el));
  }
  destroy() {
    this.io.disconnect();
  }
}
