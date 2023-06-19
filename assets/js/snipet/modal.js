const modal = document.querySelector(".js-modal");
const openModalBtns = document.querySelectorAll(".js-open-modal");
const closeModalBtns = document.querySelectorAll(".js-close-modal");

openModalBtns.forEach((openModalBtn) => {
  openModalBtn.addEventListener("click", () => {
    const modalIndex = openModalBtn.dataset.slideIndex;
    swiper.slideTo(modalIndex);
    modal.classList.add("is-active");
  });
});

closeModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});
