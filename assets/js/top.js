import "./snipet/headerToggle.js";
import "./snipet/slider.js";

document.addEventListener('DOMContentLoaded', function() {

  // 埋め込みYoutube再生
  const movieBtn = document.querySelector('.js-movieBtn');
  const movieThumb = document.querySelector('.js-movieThumb');
  const movie = document.querySelector('.js-movie');

  // ボタンまたはサムネイルがクリックされたら、再生開始
  movieBtn.addEventListener('click', playMovie);
  movieThumb.addEventListener('click', playMovie);

  function playMovie() {
    // ボタンとサムネイルを非表示にする
    movieBtn.classList.add('is-hidden');
    movieThumb.classList.add('is-hidden');
    movie.classList.add('is-active');

    // 動画を再生する
    movie.src += '?autoplay=1&mute=1';
  }
});
