const slideDown = (el, duration = 250) => {
  el.style.height = 'auto';
  let height = el.offsetHeight;
  el.style.height = height + 'px';

  el.animate([
    { height: 0 },
    { height: height + 'px' },
  ], {
    duration: 250,
  });
};

const slideUp = (el) => {
  el.style.height = 0;
};

let activeIndex = null;

const accordions = document.querySelectorAll('.js-slideToggle');
accordions.forEach((accordion) => {
  const accordionBtns = accordion.querySelectorAll('.js-slideToggleBtn');
  accordionBtns.forEach((accordionBtn, index) => {
    accordionBtn.addEventListener('click', (e) => {
      activeIndex = index;
      e.target.parentNode.classList.toggle('is-open');
      const content = accordionBtn.nextElementSibling;
      if(e.target.parentNode.classList.contains('is-open')) {
        slideDown(content);
      } else {
        slideUp(content);
      }
      accordionBtns.forEach((accordionBtn, index) => {
        if(activeIndex !== index) {
          accordionBtn.parentNode.classList.remove('is-open');
          const openedContent = accordionBtn.nextElementSibling;
          slideUp(openedContent);
        }
      });
    });
  });
});
