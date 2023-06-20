//? imports
import { LightDarkMode } from "./scripts/components/colorMode"
import { CustomSelectOptions } from "./scripts/components/select"
import { fetchCountries } from "./scripts/tools/fetch"
import { Cards } from "./scripts/components/cards"
import { Info } from "./scripts/components/info"
import { Search } from "./scripts/components/search"
//?  imports end

//? variable declarations
const darkLightBtn = document.querySelector('.btn[data-type="dark-light"]') as HTMLButtonElement

const sunIcon = document.querySelector(".sun-icon") as HTMLOrSVGImageElement
const moonIcon = document.querySelector(".moon-icon") as HTMLOrSVGImageElement

const defaultColorScheme: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches

const darkLightBtnText = darkLightBtn.querySelector("span") as HTMLSpanElement

const regionsContainer = document.querySelector(".select-container") as HTMLDivElement

const searchInput = document.querySelector("#search-bar") as HTMLInputElement

const regionSelector = document.querySelector("#regions") as HTMLSelectElement

const regionCustomOption = new CustomSelectOptions(regionSelector)
const colorSwitcher = new LightDarkMode()
//? variable declaration end

//! Executable at beginning
/* Checking if the user's browser has a default color scheme of dark mode. If it does, it sets the
local storage to "on" and sets the data attribute to "on". If it doesn't, it sets the local storage
to "off" and sets the data attribute to "off". */
if (defaultColorScheme) {
  localStorage.setItem("darkMode", "on")
  document.body.setAttribute("data-dark-mode", "on")
} else {
  localStorage.setItem("darkMode", "off")
  document.body.setAttribute("data-dark-mode", "off")
}
/* It's setting the value of the region selector to an empty string every time you refresh the page. */
regionSelector.value = ""

//! Executable at beginning end

colorSwitcher.setContrastingProperties(regionsContainer)

/* Event Listeners */
darkLightBtn.addEventListener("click", () => {
  colorSwitcher.rotateIcons({
    firstElement: moonIcon,
    secondElement: sunIcon,
    transformProperty: "--rotate",
    transformPropertyValue: "180deg",
  })

  colorSwitcher.changeText(darkLightBtnText)
  colorSwitcher.updateColorScheme()
  colorSwitcher.setContrastingProperties(regionsContainer)
})

/* It's preventing the default behavior of the region selector. It's also checking if the custom
options are already created. If they are not, it's creating them. It's also hiding the custom options when you click outside of the region selector. */
regionSelector.addEventListener("mousedown", (e: Event) => {
  e.preventDefault()

  if (!document.querySelector(".select-custom-options") as Boolean) {
    regionCustomOption.createOptions()
  }

  regionCustomOption.hideOnClickOutsideElement()
})

/* TODO
  - [ ] Check how to solve the Top-Level await problem in a more efficient way

  Create this function to avoid error from Vite while building, !Top-level await is not available in the configured target environment
*/
async function dataFetch() {
  const countries = await fetchCountries("https://restcountries.com/v3.1/all")

  const cards = new Cards(countries)
  const info = new Info(countries)

  cards.renderCards()
  info.renderInfo()

  const search = new Search(searchInput)
  search.createOptions()
  search.searchUpdate()
}

dataFetch()

/* Event listeners end */
