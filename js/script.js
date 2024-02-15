const refs = {
  openModalBtnRef: document.querySelector("[data-open-modal]"),
  closeModalBtnRef: document.querySelector("[data-close-modal]"),
  backdropRef: document.querySelector("[data-backdrop]"),
};

refs.openModalBtnRef.addEventListener("click", toggleModal);
refs.closeModalBtnRef.addEventListener("click", toggleModal);

function toggleModal() {
  refs.backdropRef.classList.toggle("is-hidden");
}
