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

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopAdditionalSlides: 3,
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

  let errorEl = document.querySelector('.error');
  if (errorEl) {
    let mw_wp_form = document.querySelector('.mw_wp_form');
    mw_wp_form.classList.add('mw_wp_form_error');

    const position = mw_wp_form.parentNode.offsetTop - 100;

    setTimeout(function() {
      window.scrollTo({ top: position, behavior: 'smooth' });
    }, 200);
  }

});
