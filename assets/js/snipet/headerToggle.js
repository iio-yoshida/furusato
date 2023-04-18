/* 固定ヘッダーの表示/非表示を切り替え

** 動作詳細
**  スクロールするとヘッダーを一時非表示、
    ファーストビュー部分を超えるとis-shownクラスを付与して再度表示。
    is-shownクラスを付与することでデフォルトとスタイルの異なるheaderを表示可能。
    headerのスタイルを変えない場合はis-shownクラス操作の行を削除。
*/
document.addEventListener('DOMContentLoaded', function() {
  function headerToggle() {
    const header = document.querySelector('.js-header');
    const firstView = document.querySelector('.js-firstView');
    const scrollValue = window.scrollY;
    let position = firstView.offsetHeight - header.offsetHeight;

    if(scrollValue > 1) {
      header.classList.add('is-hidden');
    } else {
      header.classList.remove('is-hidden');
    }
    if(scrollValue > position) {
      header.classList.remove('is-hidden');
      header.classList.add('is-shown');
    } else {
      header.classList.remove('is-shown');
    }
  }
  window.addEventListener('scroll', headerToggle);
});
