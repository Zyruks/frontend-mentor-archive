export class Search {
  input: HTMLInputElement
  cards: NodeListOf<HTMLDivElement>

  constructor(input: HTMLInputElement) {
    this.input = input
    this.cards = document.querySelectorAll(".card")
  }

  /**
   * We add an event listener to the input field, and when the user types something, we loop through all
   * the cards and remove the class that hides them. Then we loop through the characters in the search
   * text and the card text, and if they don't match, we add the class that hides the card
   */
  public searchUpdate() {
    this.input.value = ""
    this.input.addEventListener("keyup", () => {
      this.cards.forEach((card) => {
        this.input.value === "" ? card.classList.remove("dp-none") : card.classList.add("dp-none")

        // Convert the search text to lowercase and spread it into an array
        const searchText = [...this.input.value.toLowerCase()]

        // Get the text content of the card's h2 element (if it exists),
        // convert it to lowercase, and spread it into an array
        const cardText = [...(card.querySelector("h2")?.textContent || "").toLowerCase()]

        // Join the search text array into a string to make it easier to compare
        const searchMatch = searchText.join("")

        // Initialize an empty string to hold the card's text as it is compared to the search text
        let cardMatch: string = ""

        // Loop over the search text and the card text simultaneously,
        // comparing each character

        for (let index = 0; index < Math.min(searchText.length, cardText.length); index++) {
          cardMatch += cardText[index]

          // If there is a match between the search text and the card text, show the card
          if (searchMatch === cardMatch) {
            card.classList.remove("dp-none")
            console.log(cardMatch)
          }
        }
      })
    })
  }

  /**
   * We're creating a new option element for each card, setting the value of the option to the card
   * name, and appending the option to the select element
   */
  public createOptions() {
    const searchOptions = document.querySelector("#card-name")

    this.cards.forEach((card) => {
      const cardName = card.querySelector("h2")?.textContent as string
      const option = document.createElement("option")
      option.setAttribute("value", cardName)
      searchOptions?.appendChild(option)
    })
  }
}
