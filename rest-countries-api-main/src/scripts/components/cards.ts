import { Country } from "../tools/fetch"

export class Cards {
  countries: Country[]

  constructor(fetchData: Country[]) {
    this.countries = fetchData
  }

  /**
   * We're looping through the countries array, cloning the card template, and then adding the country
   * data to the cloned template
   */
  renderCards() {
    const cardTemplate = document.getElementById("card-template") as HTMLTemplateElement
    const container = document.querySelector(".card-section .container") as HTMLDivElement

    this.countries.forEach((country) => {
      const node = cardTemplate.content.cloneNode(true) as HTMLElement
      const card = node.querySelector(".card") as HTMLDivElement

      card.dataset.cardId = country.name.toLocaleLowerCase()

      card.querySelector("h2")!.textContent = country.name
      card.querySelector("img")!.src = country.flag
      card.querySelector("img")!.alt = `${country.name} Flag`
      card.querySelector(".card-population")!.textContent = country.population.toLocaleString()
      card.querySelector(".card-region")!.textContent = country.region
      card.querySelector(".card-capital")!.textContent = country.capital
      card.dataset.region = country.region.toLocaleLowerCase()

      container.appendChild(node)
    })
  }
}
