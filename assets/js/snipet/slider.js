document.addEventListener('DOMContentLoaded', function() {
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

  // HTML要素を取得
  const slider = document.querySelector('.js-slider');
  const slides = slider.querySelectorAll('.js-slide');
  const prevBtn = document.querySelector('.js-prev');
  const nextBtn = document.querySelector('.js-next');

  let slideIndex = 0; // スライドのインデックスを初期化
  // 8秒ごとに自動でスライドを切り替えるタイマー
  let slideTimer = setInterval(showSlides, 8000);

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
    slideTimer = setInterval(showSlides, 8000);
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
    slideTimer = setInterval(showSlides, 8000);
  });

  function stopSlide() {
    clearInterval(slideTimer);
  }
});
