/* Burger menu */
let classMenu = document.querySelector(".js-burger");
let menuActive = document.querySelector(".js-nav");

/**
 * If the menu is not open, open it. If it is open, close it
 */

function menuOpen() {
  if (classMenu.classList.contains("burger--opened") == false) {
    classMenu.classList.toggle("burger--opened");

    classMenu.setAttribute(
      "aria-expanded",
      classMenu.classList.contains("burger--opened")
    );
    menuActive.classList.toggle("dp-flex");
    menuActive.classList.toggle("nav--active");
    menuActive.classList.toggle("nav-open");
    menuActive.classList.toggle("nav-close");
  } else {
    classMenu.classList.toggle("burger--opened");
    menuActive.classList.toggle("nav--active");
    menuActive.classList.toggle("nav-open");
    menuActive.classList.toggle("nav-close");

    setTimeout(() => {
      menuActive.classList.toggle("dp-flex");
    }, 500);
  }
}

/* Burger menu end */
