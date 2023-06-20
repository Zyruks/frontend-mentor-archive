/* Burger Menu JS*/

const nav = document.querySelector(".js-nav");
const menuToggle = document.querySelector(".menu-toggle");

/* It's adding an event listener to the menuToggle button. When the button is clicked, it will run the
navToggle function. */
menuToggle.addEventListener("click", () => {
  navToggle();
});

/**
 * If the menuToggle button doesn't have the class "open", add it and remove the "close-mobile-menu"
 * class and add the "open-mobile-menu" class. If it does have the class "open", remove it and add the
 * "close-mobile-menu" class
 */
function navToggle() {
  if (menuToggle.classList.contains("open") == false) {
    menuToggle.classList.toggle("open");
    nav.classList.remove("close-mobile-menu");
    nav.classList.add("open-mobile-menu");
  } else {
    menuToggle.classList.toggle("open");
    nav.classList.add("close-mobile-menu");

    setTimeout(() => {
      nav.classList.remove("open-mobile-menu");
      nav.classList.remove("close-mobile-menu");
    }, 600);
  }
}

const aboutPage = document.querySelector(".js-page-about");
const servicesPage = document.querySelector(".js-page-services");
const projectPage = document.querySelector(".js-page-project");
const contactPage = document.querySelector(".js-page-contact");

aboutPage.addEventListener("click", () => {
  activePage(aboutPage, servicesPage, projectPage, contactPage);
});

servicesPage.addEventListener("click", () => {
  activePage(servicesPage, aboutPage, projectPage, contactPage);
});

projectPage.addEventListener("click", () => {
  activePage(projectPage, aboutPage, servicesPage, contactPage);
});

contactPage.addEventListener("click", () => {
  activePage(contactPage, aboutPage, servicesPage, projectPage);
});
/* Burger Menu JS End*/

function activePage(active, secondary, third, quart) {
  active.classList.add("nav__pages--active");
  secondary.classList.remove("nav__pages--active");
  third.classList.remove("nav__pages--active");
  quart.classList.remove("nav__pages--active");
}
