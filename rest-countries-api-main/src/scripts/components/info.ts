import { Country } from "../tools/fetch"

export class Info {
  container: HTMLDivElement

  constructor(protected fetchData: Country[]) {
    this.fetchData = fetchData
    this.container = document.querySelector(".info-section") as HTMLDivElement
  }

  renderInfo() {
    const countries = this.fetchData

    const allCards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".card")

    const infoTemplate = document.querySelector("#info") as HTMLTemplateElement

    allCards.forEach((card) => {
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          this.updateText(countries, infoTemplate, card.dataset.cardId as string)
          this.toggleElements()
        }
      })
      card.addEventListener("click", () => {
        this.updateText(countries, infoTemplate, card.dataset.cardId as string)
        this.toggleElements()
      })
    })
  }

  updateButtons() {
    const backButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".back-button")

    backButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.removeInfo()
        this.toggleElements()
      })
    })
  }

  updateText(data: Country[], template: HTMLTemplateElement, target: string) {
    data.forEach((country: Country) => {
      const node = template.content.cloneNode(true) as HTMLElement

      if (target === country.name.toLocaleLowerCase()) {
        const infoComponent = node.querySelector(".info") as HTMLDivElement

        const info: NodeListOf<HTMLSpanElement | HTMLImageElement> =
          infoComponent.querySelectorAll("[data-value]")

        const infoTag = node.querySelector(".info-tag-container") as HTMLDivElement

        info.forEach((dataValueElement: HTMLImageElement | HTMLSpanElement) => {
          const property = dataValueElement.dataset.value as keyof Country

          const value = country[property]

          if (property === "borders" && Array.isArray(value)) {
            this.appendBorders(value, infoTag)
            return
          }

          if (typeof value === "number") {
            dataValueElement.textContent = value.toLocaleString()
            return
          }

          if (typeof value === "object") {
            const text = this.formatObject(value as Country[])

            dataValueElement.textContent = text

            return
          }

          if (
            dataValueElement instanceof HTMLImageElement &&
            dataValueElement.hasAttribute("src")
          ) {
            dataValueElement.src = value
            return
          }

          {
            dataValueElement.textContent = value
          }
        })

        console.log(this.container?.firstChild)
        this.container?.appendChild(node)
        this.animate(true)
        setTimeout(() => {
          this.updateButtons()

          this.newInfoFromBorder(template)
        }, 500)
      }
    })
  }

  private animate(isEntryAnimation: boolean): void {
    // Get all elements with class "info"
    const infoComponents: NodeListOf<HTMLDivElement> = document.querySelectorAll(".info")

    // Set class names and start/end values based on the animation direction
    const fadeClass = isEntryAnimation ? "anime-fade-in" : "anime-fade-out"
    const translateClass = "anime-translate-x"
    const startValue = isEntryAnimation ? "100%" : "0"
    const endValue = isEntryAnimation ? "0" : "100%"

    // Iterate over each info component
    infoComponents.forEach((component: HTMLDivElement) => {
      // Add classes and start/end values for animation
      component.classList.add(fadeClass)
      component.classList.add(translateClass)
      component.style.setProperty("--anime-translate-x-start", startValue)
      component.style.setProperty("--anime-translate-x-end", endValue)

      // Remove classes and style after animation duration
      component.addEventListener(
        "animationend",
        () => {
          component.classList.remove(fadeClass)
          component.classList.remove(translateClass)
          component.removeAttribute("style")
        },
        { once: true }
      )
    })
  }

  formatObject(value: { name: string }[]) {
    let text = ""
    let count = 0
    for (let key in value) {
      const propertyValue = value[key]

      if (Array.isArray(propertyValue)) {
        text += propertyValue.map((item) => item.name).join(", ")
      } else if (typeof propertyValue === "object") {
        text += `${propertyValue.name}`
      } else {
        text += `${propertyValue}`
      }
      if (++count < Object.keys(value).length) {
        text += ", "
      }
    }
    return text
  }

  toggleElements() {
    const cardContainer = document.querySelector(".card-section") as HTMLDivElement
    const searchSection = document.querySelector(".search-section") as HTMLDivElement

    if (cardContainer.classList.contains("dp-none")) {
      setTimeout(() => {
        cardContainer.classList.add("anime-fade-in")
        searchSection.classList.add("anime-fade-in")
        cardContainer.classList.toggle("dp-none")
        searchSection.classList.toggle("dp-none")
      }, 500)

      setTimeout(() => {
        cardContainer.classList.remove("anime-fade-in")
        searchSection.classList.remove("anime-fade-in")
      }, 1000)
    } else {
      cardContainer.classList.toggle("dp-none")
      searchSection.classList.toggle("dp-none")
    }
  }

  /**
   * It removes the info components from the DOM
   */
  removeInfo() {
    const infoComponents: NodeListOf<HTMLDivElement> = document.querySelectorAll(".info")
    infoComponents.forEach((component) => {
      this.animate(false)

      setTimeout(() => {
        component.remove()
      }, 500)
    })
  }

  /* Creating a button for each border country. */
  appendBorders(value: (string | { name: string })[], container: any) {
    const countries = this.fetchData

    for (let key in value) {
      const button = document.createElement("button")
      button.classList.add("button")

      countries.forEach((country) => {
        if (value[key] === country.cca3) {
          button.setAttribute("data-cca3", country.cca3.toLocaleLowerCase())

          button.textContent = country.name

          container.appendChild(button)
        }
      })
    }
  }

  newInfoFromBorder(template: HTMLTemplateElement) {
    const infoTag = document.querySelector(".info-tag-container") as HTMLDivElement

    const countries = this.fetchData

    const buttons: NodeListOf<HTMLButtonElement> = infoTag.querySelectorAll(".button")

    buttons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        countries.forEach((country) => {
          if (button.textContent && button.textContent === country.name) {
            const buttonText = button.textContent
            this.removeInfo()
            setTimeout(() => {
              this.updateText(countries, template, buttonText.toLocaleLowerCase())
            }, 500)
          }
        })
      })
    })
  }
}
