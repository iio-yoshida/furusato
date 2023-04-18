export default class TouchDeviceJudge {
  constructor() {
    this.userAgent = navigator.userAgent;
    this.isTouchDevice = 'ontouchstart' in window ||  navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;;
    this._addTouchClass();
  }

  _addTouchClass() {
    if(this.isTouchDevice) {
      document.documentElement.classList.add('ua-touch');
    } else {
      document.documentElement.classList.add('ua-pc');
    }
  }
}
