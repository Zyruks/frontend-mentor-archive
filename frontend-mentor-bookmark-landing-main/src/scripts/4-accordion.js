const accordionItems = document.querySelectorAll(".js-accordion__item");
const accordionSvg = document.querySelectorAll(".js-accordion__arrow");
const accordionCollapse = document.querySelectorAll(".js-accordion-collapse");

function activeAccordion(active, ...inactive) {
  accordionItems[active].addEventListener("click", () => {
    if (accordionSvg[active].getAttribute("data-state") !== "active") {
      // Arrow
      accordionSvg[active].setAttribute("data-state", "active");
      //Inner Text
      accordionCollapse[active].setAttribute("data-state", "visible");

      for (let inactiveIndex in inactive) {
        accordionSvg[inactive[inactiveIndex]].setAttribute(
          "data-state",
          "inactive"
        );
        accordionCollapse[inactive[inactiveIndex]].setAttribute(
          "data-state",
          "hidden"
        );
      }
    } else {
      accordionSvg[active].setAttribute("data-state", "inactive");
      accordionCollapse[active].setAttribute("data-state", "hidden");
    }
  });
}

activeAccordion(0, 1, 2, 3);
activeAccordion(1, 0, 2, 3);
activeAccordion(2, 0, 1, 3);
activeAccordion(3, 0, 1, 2);
