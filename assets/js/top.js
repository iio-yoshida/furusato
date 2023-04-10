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
