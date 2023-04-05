export default class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.js-menuBtn');
    this.DOM.menu = document.querySelector('.js-mobileMenu');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType()  {
    const isTouchCapable =
      'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch) || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.btn.classList.toggle('is-open');
    this.DOM.menu.classList.toggle('is-open');
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
