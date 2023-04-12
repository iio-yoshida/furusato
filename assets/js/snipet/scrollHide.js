/* 特定の要素をスクロールしたら非表示,スクロール停止したら表示（CSSで.is-hiddenを定義）
*/

// 使用例
// const scrollHide1 = new ScrollHide('js-scrollHide1');
// const scrollHide2 = new ScrollHide('js-scrollHide2', 500);
// delayは引数で指定してもいいし、CSSでtransition-delayで指定しても可

export default class ScrollHide {
  constructor(els, delay = 250) {
    this.targets = document.querySelectorAll(els);
    this.delay = delay;
    this.timeoutIds = [];
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.targets.forEach((target, i) => {
      if (this.timeoutIds[i] !== null) {
        clearTimeout(this.timeoutIds[i]);
      }
      target.classList.add('is-hidden');
      this.timeoutIds[i] = setTimeout(() => {
        target.classList.remove('is-hidden');
      }, this.delay);
    });
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
