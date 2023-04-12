export default class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.js-menuBtn');
    this.DOM.text = document.querySelector('.js-menuBtnText');
    this.DOM.menu = document.querySelector('.js-mobileMenu');
    this.DOM.header = document.querySelector('.js-header');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType()  {
    const isTouchCapable =
      'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch) || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.btn.classList.toggle('is-active');
    this.DOM.menu.classList.toggle('is-active');
    this.DOM.header.classList.toggle('is-active');
    document.body.classList.toggle('is-active');
    if (this.DOM.btn.classList.contains('is-active')) {
      this._fadeOut(this.DOM.text, () => {
        this.DOM.text.textContent = '閉じる';
        this._fadeIn(this.DOM.text);
      });
    } else {
      this._fadeOut(this.DOM.text, () => {
        this.DOM.text.textContent = 'メニュー';
        this._fadeIn(this.DOM.text);
      });
    }
  }

  _fadeIn(el) {
    el.classList.add('fade-in');
    el.classList.remove('fade-out');
  }

  _fadeOut(el, callback) {
    el.classList.add('fade-out');
    el.classList.remove('fade-in');
    el.addEventListener('animationend', callback, {
      once: true
    });
  }

  _addEvent() {
    const toggle = this._toggle.bind(this);
    this.DOM.btn.addEventListener(this.eventType, toggle);
    this.DOM.btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        toggle();
      }
    });
  }
}
