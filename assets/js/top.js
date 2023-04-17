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
