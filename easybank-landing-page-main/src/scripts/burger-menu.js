const burgerBtn = document.querySelector(".js-burger-menu");
const lines = document.querySelectorAll(".js-line");
const primaryNav = document.querySelector(".js-primary-nav");

burgerBtn.addEventListener("click", () => {
  burgerMenuAnimation();
  backDrop();
});

/**
 * If the burger button doesn't have the class "open", add the classes "anima-rotate-45deg",
 * "anima-opacity-off", and "anima-rotate-negative-45deg" to the first, second, and third lines of the
 * burger button, respectively. If the burger button does have the class "open", remove the classes
 * "anima-rotate-45deg", "anima-opacity-off", and "anima-rotate-negative-45deg" from the first, second,
 * and third lines of the burger button, respectively
 */
function burgerMenuAnimation() {
  if (burgerBtn.classList.contains("open") !== true) {
    lines[0].classList.add("anima-rotate-45deg");
    lines[1].classList.add("anima-opacity-off");
    lines[2].classList.add("anima-rotate-negative-45deg");

    lines[0].classList.remove("anima-rotate-45deg-back");
    lines[1].classList.remove("anima-opacity-on");
    lines[2].classList.remove("anima-rotate-negative-45deg-back");

    /* nav menu animation */

    primaryNav.classList.add("anima-pop-up");
    primaryNav.classList.remove("anima-pop-out");
    primaryNav.classList.add("dp-block");

    burgerBtn.classList.add("open");
  } else {
    /* burgerMenu Animation */
    lines[0].classList.remove("anima-rotate-45deg");
    lines[1].classList.remove("anima-opacity-off");
    lines[2].classList.remove("anima-rotate-negative-45deg");

    lines[0].classList.add("anima-rotate-45deg-back");
    lines[1].classList.add("anima-opacity-on");
    lines[2].classList.add("anima-rotate-negative-45deg-back");

    /* nav menu Animation */

    primaryNav.classList.remove("anima-pop-up");
    primaryNav.classList.add("anima-pop-out");

    /* Extra */
    burgerBtn.classList.remove("open");

    setTimeout(() => {
      primaryNav.classList.remove("dp-block");
      primaryNav.classList.remove("anima-pop-out");
    }, 350);
  }
}

const header = document.querySelector(".js-header");

function backDrop() {
  const div = document.createElement("div");
  div.className = "backdrop js-backdrop anima-opacity-on";
  if (burgerBtn.classList.contains("open") !== false) {
    header.appendChild(div);
  } else {
    const backDropSelector = document.querySelector(".js-backdrop");
    backDropSelector.classList.remove("anima-opacity-on");
    backDropSelector.classList.add("anima-opacity-off");

    setTimeout(() => {
      header.removeChild(backDropSelector);
    }, 350);
  }
}
