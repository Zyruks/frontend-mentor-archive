const imgWrapper = document.querySelector(".js-card-img__wrapper");
const modal = document.querySelector(".js-modal");
const closeBtn = document.querySelector(".js-modal__close-btn");
imgWrapper.addEventListener("click", () => {
  modal.classList.add("open-animation");
  modal.classList.remove("close-animation");
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("close-animation");
  modal.classList.remove("open-animation");
  setTimeout(function () {
    modal.close();
  }, 400);
});
