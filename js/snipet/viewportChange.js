// vwベースで組んでいる場合は必要なし
export default class ViewportChange {
  constructor() {
    this.viewport = document.querySelector('meta[name="viewport"]');
    this._addEvent();
    this._viewportChange();
  }

  _viewportChange() {
    const value =
      window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
    if(this.viewport.getAttribute('content') !== value) {
      this.viewport.setAttribute('content', value);
    }
  }
  _addEvent() {
    addEventListener('resize', this._switchViewport, false);
  }

}
