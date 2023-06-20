/* This is adding an event listener to the rulesBtn element. When the rulesBtn element is clicked,
the display property of the modal element is set to grid. */
rulesBtn.addEventListener("click", () => {
  modal.style.display = "grid";
});

/* This is adding an event listener to the closeModal element. When the closeModal element is clicked,
the animationName property of the modal element is set to anime-coming-down if the window.innerWidth
is less than 1025.
If the window.innerWidth is greater than 1025, the animationName property of the modal element is
set to anime-outside-in.
After 800 milliseconds, the modal element's style attribute is removed. */
closeModal.addEventListener("click", () => {
  if (window.innerWidth < 1025) {
    modal.style.animationName = "anime-coming-down ";
  } else {
    modal.style.animationName = "anime-outside-in";
  }

  setTimeout(() => {
    modal.removeAttribute("style");
  }, 800);
});

/* Adding an event listener to the closeModal element. When the mouse is over the closeModal element,
the opacity of the childNodes[1] element is set to 1. */
closeModal.addEventListener("mouseover", () => {
  closeModal.childNodes[1].setAttribute("opacity", "1");
});

/* Adding an event listener to the closeModal element. When the mouse leaves the closeModal element,
the opacity of the childNodes[1] element is set to 0.25. */
closeModal.addEventListener("mouseleave", () => {
  closeModal.childNodes[1].setAttribute("opacity", "0.25");
});
