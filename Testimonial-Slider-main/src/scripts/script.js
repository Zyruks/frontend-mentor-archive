const prevBtn = document.querySelectorAll(".js-btn-prev");
const nextBtn = document.querySelectorAll(".js-btn-next");
const card = document.querySelectorAll(".js-card");

prevBtn[0].addEventListener("click", () => {
  card[0].classList.add("animation-leave-right");
  card[1].classList.add("animation-back-left");

  card[1].classList.remove("dp-none");

  card[1].classList.remove("animation-leave-left");
  card[1].classList.remove("animation-leave-right");
  card[1].classList.remove("animation-back-right");

  card[0].classList.remove("animation-leave-left");
  card[0].classList.remove("animation-back-left");
  card[0].classList.remove("animation-back-right");

  setTimeout(() => {
    card[0].classList.add("dp-none");
  }, 1000);
});

nextBtn[0].addEventListener("click", () => {
  card[0].classList.add("animation-leave-left");
  card[1].classList.add("animation-back-right");

  card[1].classList.remove("dp-none");

  card[1].classList.remove("animation-leave-left");
  card[1].classList.remove("animation-leave-right");
  card[1].classList.remove("animation-back-left");

  card[0].classList.remove("animation-leave-right");

  card[0].classList.remove("animation-back-left");
  card[0].classList.remove("animation-back-right");

  setTimeout(() => {
    card[0].classList.add("dp-none");
  }, 1000);
});

prevBtn[1].addEventListener("click", () => {
  card[1].classList.add("animation-leave-right");
  card[0].classList.add("animation-back-left");

  card[0].classList.remove("dp-none");

  card[1].classList.remove("animation-leave-left");
  card[1].classList.remove("animation-back-left");
  card[1].classList.remove("animation-back-right");

  card[0].classList.remove("animation-leave-right");
  card[0].classList.remove("animation-leave-left");
  card[0].classList.remove("animation-back-right");
  setTimeout(() => {
    card[1].classList.add("dp-none");
  }, 1000);
});

nextBtn[1].addEventListener("click", () => {
  card[1].classList.add("animation-leave-left");
  card[0].classList.add("animation-back-right");

  card[0].classList.remove("dp-none");

  card[1].classList.remove("animation-leave-right");
  card[1].classList.remove("animation-back-left");
  card[1].classList.remove("animation-back-right");

  card[0].classList.remove("animation-leave-left");
  card[0].classList.remove("animation-leave-right");
  card[0].classList.remove("animation-back-left");
  setTimeout(() => {
    card[1].classList.add("dp-none");
  }, 1000);
});
