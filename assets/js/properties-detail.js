import Swiper from "./library/swiper-bundle.esm.browser.min.js";
import ScrollObserver from "./snipet/scrollObserver.js";

document.addEventListener('DOMContentLoaded', function() {

  const graphActive = function(el, isIntersecting) {
    const graphItems = document.querySelectorAll('.js-scroll');
    graphItems.forEach(graphItem => {
      if(isIntersecting) {
        graphItem.classList.add('is-active');
      } else {
        graphItem.classList.remove('is-active');
      }
    });
  }
  new ScrollObserver('.js-graph', graphActive, {
      once: true,
      threshold: 0.5,
    }
  );

  const swiperMain = new Swiper('.swiper--main', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: 1,
    speed: 600,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperModal = new Swiper('.swiper--modal', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 200,
    speed: 600,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperGallery = new Swiper('.swiper--gallery', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: 1.25,
    spaceBetween: 40,
    speed: 600,

    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 2.75,
      },
      1280: {
        slidesPerView: 3,
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const modal = document.querySelector(".js-modal");
  const openModalBtns = document.querySelectorAll(".js-open-modal");
  const closeModalBtns = document.querySelectorAll(".js-close-modal");

  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      const modalIndex = openModalBtn.dataset.slideIndex;
      swiperModal.slideTo(modalIndex);
      modal.classList.add("is-active");
    });
  });

  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });

  // 問い合わせフォームの必須入力部分が見入力の場合、errorクラスを付与
  // let errorEl = document.querySelector('.error');
  // if (errorEl) {
  //   const mw_wp_form = document.querySelector('.mw_wp_form');
  //   mw_wp_form.classList.add('mw_wp_form_error');

  //   let position = mw_wp_form.parentNode.offsetTop - 100;

  //   setTimeout(function() {
  //     window.scrollTo({ top: position, behavior: 'smooth' });
  //   }, 200);
  // }

  // フォームの確認画面で要素の表示/非表示を切り替え
  // let formEl = document.querySelector('#mw_wp_form_mw-wp-form-314');
  // let hiddenEls = document.querySelectorAll('.js-confirmHidden');
  // let shownEls = document.querySelectorAll('.js-confirmShown');
  // if(formEl.classList.contains('mw_wp_form_confirm')) {
  //   hiddenEls.forEach((hiddenEL) => {
  //     hiddenEL.classList.add('is-hidden');
  //   });
  //   shownEls.forEach((shownEL) => {
  //     shownEL.classList.add('is-active');
  //   });
  // }
});
