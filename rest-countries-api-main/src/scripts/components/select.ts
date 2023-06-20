export class CustomSelectOptions {
  parentElement: HTMLDivElement

  constructor(public selector: HTMLSelectElement) {
    this.selector = selector
    this.parentElement = selector.parentElement as HTMLDivElement
  }

  // Method to create the custom select options
  public createOptions() {
    // Set the "aria-expanded" attribute of the selector to "true"
    this.selector.setAttribute("aria-expanded", "true")

    // Rotate the select icon using a CSS custom property
    this.parentElement.style.setProperty("--rotate-select-icon", "-180deg")

    // Create the options container element
    const customSelect: HTMLUListElement = document.createElement("ul")
    customSelect.className = "select-custom-options anime-fade-in "

    // Get the original options elements from the selector
    const originalOptionsElements = Array.from(this.selector.children) as HTMLOptionElement[]

    // Add the custom options to the custom select element
    originalOptionsElements.forEach((option: HTMLOptionElement) => {
      // Create a list item element for the custom option
      const customSelectOptions: HTMLLIElement = document.createElement("li")

      // Skip this iteration if the child is selected and has a value of ""
      // This will not show the first option if it is selected
      if (option.selected === true && option.value === "") {
        return
      }

      // Set the text content of the custom option based on the value of the original option
      option.value === ""
        ? (customSelectOptions.textContent = "All regions")
        : (customSelectOptions.textContent = option.textContent)

      // Append the custom option to the custom select element
      customSelect.appendChild(customSelectOptions)

      // Attaching an event listener to each custom select option.
      this.attachCustomSelectOptionEvent(customSelect, customSelectOptions, option)
    })

    // Append the custom select element to the parent element of the selector
    this.parentElement.append(customSelect)
  }

  private attachCustomSelectOptionEvent(
    customSelect: HTMLUListElement,
    customSelectOptions: HTMLLIElement,
    option: HTMLOptionElement
  ) {
    customSelectOptions.addEventListener("mousedown", (event) => {
      event.stopPropagation()

      // Set the value of the selector to the value of the original option
      this.selector.value = option.value

      // Update the "aria-expanded" attribute of the selector to "false"
      this.selector.setAttribute("aria-expanded", "false")

      // Dispatch a "change" event for the selector and its parent element
      this.selector.dispatchEvent(new Event("change"))
      this.parentElement.dispatchEvent(new Event("change"))

      // Add a fade-out animation to the custom select element and rotate the select icon back to its original position
      customSelect.classList.add("anime-fade-out")
      this.parentElement.style.setProperty("--rotate-select-icon", "0")

      // Remove the custom select element from the DOM after a delay of 500ms
      setTimeout(() => {
        customSelect.remove()
      }, 500)

      // Update the visibility of the cards based on the selected region
      this.updateCardVisibility()
    })
  }

  // Method for hiding the custom options when a click occurs outside of it
  public hideOnClickOutsideElement() {
    document.body.addEventListener("click", (event: Event) => {
      // Check if the click target is not the region selector and the selector is expanded
      if (
        !this.selector.contains(event.target as HTMLElement) &&
        this.selector.getAttribute("aria-expanded") === "true"
      ) {
        // Get the custom options element and add a fade-out animation
        const customOptions = this.parentElement.querySelector(
          ".select-custom-options"
        ) as HTMLUListElement
        customOptions.classList.add("anime-fade-out")

        // Rotate the select icon back to its original position
        this.parentElement.style.setProperty("--rotate-select-icon", "0")

        setTimeout(() => {
          customOptions.remove()
        }, 500)

        // Update the aria-expanded attribute of the selector to "false"
        this.selector.setAttribute("aria-expanded", "false")
      }
    })
  }

  /* TODO updateCardVisibility()
  - [ ] create a transition for when the cards are re-arranged
  */
  private updateCardVisibility() {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".card")

    cards.forEach((card: HTMLDivElement) => {
      // Make sure the card is visible by removing the "dp-none" class
      card.classList.remove("dp-none")

      // If the region selector is empty, show all cards
      if (this.selector.value === "") {
        card.classList.remove("dp-none")

        return
      }

      // If the region selector has a value and it doesn't match the card's region data attribute, hide the card
      if (this.selector.value.toLocaleLowerCase() !== card.dataset.region) {
        card.classList.add("dp-none")

        return
      }
    })
  }
}
