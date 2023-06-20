function carouselActivity(active, inactiveOne, inactiveTwo) {
  carousel[active].classList.add("dp-grid");
  setTimeout(() => {
    carousel[inactiveOne].classList.remove("dp-grid");
    carousel[inactiveTwo].classList.remove("dp-grid");
    carousel[active].setAttribute("data-state", "");
  }, 370);

  // ? Carousel Animation
  if (
    active === 0 ||
    (active === 1 && carousel[2].classList.contains("dp-grid"))
  ) {
    carousel[active].classList.add(featureControlAnimations.in[0]);
    carousel[inactiveOne].classList.add(featureControlAnimations.out[0]);
    carousel[inactiveTwo].classList.add(featureControlAnimations.out[0]);
  } else if (
    active === 2 ||
    (active === 1 && carousel[0].classList.contains("dp-grid"))
  ) {
    carousel[active].classList.add(featureControlAnimations.in[1]);
    carousel[inactiveOne].classList.add(featureControlAnimations.out[1]);
    carousel[inactiveTwo].classList.add(featureControlAnimations.out[1]);
  }
  classCleaner(carousel);
}
