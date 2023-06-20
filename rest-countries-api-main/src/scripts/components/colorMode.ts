type RotateIcons = {
  firstElement: HTMLOrSVGImageElement
  transformProperty: string
  secondElement: HTMLOrSVGImageElement
  transformPropertyValue: string
}
/**
 * It checks if the dark mode is on or off, and then toggles it
 */

export class LightDarkMode {
  /**
   * If the dark mode is on, turn it off, and if it's off, turn it on
   */
  updateColorScheme() {
    if (localStorage.getItem("darkMode") === "on") {
      document.body.setAttribute("data-dark-mode", "off")

      localStorage.setItem("darkMode", "off")
    } else {
      document.body.setAttribute("data-dark-mode", "on")

      localStorage.setItem("darkMode", "on")
    }
  }

  /** setContrastingProperties()
   * If dark mode is on, set the first custom property to the active value and the second custom property
   * to the inactive value. Otherwise, set the first custom property to the inactive value and the second
   * custom property to the active value.
   * @param {SetContrastingProperties}  - SetContrastingProperties
   */

  setContrastingProperties(target: HTMLDivElement) {
    if (document.body.dataset.darkMode === "on") {
      target.style.setProperty("--select-icon-for-dark-mode", "100%")
      target.style.setProperty("--select-icon-for-light-mode", "0")
    } else {
      target.style.setProperty("--select-icon-for-dark-mode", "0")
      target.style.setProperty("--select-icon-for-light-mode", "100%")
    }
  }

  /**
   * It changes the text of the button to either "Dark Mode" or "Light Mode" depending on the current
   * state of the dark mode
   * @param {HTMLSpanElement} target - HTMLSpanElement
   */
  changeText(target: HTMLSpanElement) {
    if (localStorage.getItem("darkMode") === "on") {
      target.style.opacity = "0"
      console.log(target)
      setTimeout(() => {
        target.textContent = "Light Mode"
        target.style.opacity = "100%"
      }, 600)
    } else {
      target.style.opacity = "0"
      console.log(target)
      setTimeout(() => {
        target.textContent = "Dark Mode"
        target.style.opacity = "100%"
      }, 600)
    }
  }

  /**
   * It rotates the icons of the dark mode button
   * @param {RotateIcons}  -
   */
  rotateIcons({
    firstElement,
    secondElement,
    transformProperty,
    transformPropertyValue,
  }: RotateIcons): void {
    if (localStorage.getItem("darkMode") === "on") {
      // Unhide Element
      setTimeout(() => {
        secondElement.style.opacity = "100%"
      }, 500)

      firstElement.style.setProperty(transformProperty, "-" + transformPropertyValue)
      secondElement.style.setProperty(transformProperty, "0")

      // Hide Element
      setTimeout(() => {
        firstElement.style.opacity = "0"
      }, 500)
    } else {
      // Unhide  ELement
      setTimeout(() => {
        firstElement.style.opacity = "100%"
      }, 500)

      //Rotation
      firstElement.style.setProperty(transformProperty, "0")
      secondElement.style.setProperty(transformProperty, transformPropertyValue)

      // Hide Element
      setTimeout(() => {
        secondElement.style.opacity = "0"
      }, 500)
    }
  }
}
