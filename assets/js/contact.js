document.addEventListener('DOMContentLoaded', function() {

  let errorEl = document.querySelector('.error');

  if (errorEl) {
    const mw_wp_form = document.querySelector('.mw_wp_form');
    mw_wp_form.classList.add('mw_wp_form_error');

    let position = mw_wp_form.parentNode.offsetTop - 100;

    setTimeout(function() {
      window.scrollTo({ top: position, behavior: 'smooth' });
    }, 200);
  }

  let formEl = document.querySelector('#mw_wp_form_mw-wp-form-314');
  let hiddenEls = document.querySelectorAll('.js-confirmHidden');
  let shownEls = document.querySelectorAll('.js-confirmShown');
  if(formEl.classList.contains('mw_wp_form_confirm')) {
    hiddenEls.forEach((hiddenEL) => {
      hiddenEL.classList.add('is-hidden');
    });
    shownEls.forEach((shownEL) => {
      shownEL.classList.add('is-active');
    });
  }
});
