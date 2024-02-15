// ==== for Modal ===
// const refs = {
//   openModalBtnRef: document.querySelector("[data-open-modal]"),
//   closeModalBtnRef: document.querySelector("[data-close-modal]"),
//   backdropRef: document.querySelector("[data-backdrop]"),
// };

// refs.openModalBtnRef.addEventListener("click", toggleModal);
// refs.closeModalBtnRef.addEventListener("click", toggleModal);

// function toggleModal() {
//   refs.backdropRef.classList.toggle("is-hidden");
// }

// ==== for Mobile Navigation in Header ===
const refs = {
  mobileNavBtnRef: document.querySelector("[data-mobile-nav-btn]"),
  mobileNavRef: document.querySelector("[data-mobile-nav]"),
  navIconOpenRef: document.querySelector("[data-nav-icon-open]"),
  navIconCloseRef: document.querySelector("[data-nav-icon-close]"),
};

refs.mobileNavBtnRef.addEventListener("click", toggleNav);

function toggleNav() {
  refs.navIconOpenRef.classList.toggle("btn-burger__icon--is-hidden");
  refs.navIconCloseRef.classList.toggle("btn-burger__icon--is-hidden");
  refs.mobileNavRef.classList.toggle("mobile-nav--is-hidden");
}
