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


  // HTML要素を取得
  const slider = document.querySelector('.js-slider');
  const slides = slider.querySelectorAll('.js-slide');
  const prevBtn = document.querySelector('.js-prev');
  const nextBtn = document.querySelector('.js-next');

  let slideIndex = 0; // スライドのインデックスを初期化

  // スライドを切り替える関数
  function showSlides() {
    // 現在のスライドを非表示にする
    slides[slideIndex].classList.remove('is-active');
    slides[slideIndex].classList.add('is-hidden');

    // 次のスライドを表示する
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if(slides[slideIndex].classList.contains('is-standby')) {
      slides[slideIndex].classList.remove('is-standby');
    };
    slides[slideIndex].classList.remove('is-hidden');
    slides[slideIndex].classList.add('is-active');

  }

  // 3秒ごとに自動でスライドを切り替えるタイマー
  let slideTimer = setInterval(showSlides, 6000);

  // 「前へ」ボタンがクリックされたときの処理
  prevBtn.addEventListener('click', function() {
    // 現在のスライドを非表示にする
    slides[slideIndex].classList.remove('is-active');
    slides[slideIndex].classList.add('is-hidden');

    // 前のスライドを表示する
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    slides[slideIndex].classList.remove('is-hidden');
    slides[slideIndex].classList.add('is-active');

    // 自動スライドのタイマーをリセット
    clearInterval(slideTimer);
    slideTimer = setInterval(showSlides, 3000);
  });

  // 「次へ」ボタンがクリックされたときの処理
  nextBtn.addEventListener('click', function() {
    // 現在のスライドを非表示にする
    slides[slideIndex].classList.remove('is-active');
    slides[slideIndex].classList.add('is-hidden');

    // 次のスライドを表示する
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    slides[slideIndex].classList.remove('is-hidden');
    slides[slideIndex].classList.add('is-active');

    // 自動スライドのタイマーをリセット
    clearInterval(slideTimer);
    slideTimer = setInterval(showSlides, 3000);
  });

});
