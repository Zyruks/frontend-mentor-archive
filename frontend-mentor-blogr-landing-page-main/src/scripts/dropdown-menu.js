/* Dropdown menu */
const connectBtn = document.querySelectorAll(".js-menu-item");
const dropdownMenus = document.querySelectorAll(".js-dropdown-menu");
const dropdownArrow = document.querySelectorAll(".js-dropdown-arrow");

/**
 * "When the user clicks on the button, if the dropdown menu is not open, open it and close the other
 * two dropdown menus. If the dropdown menu is open, close it."
 *
 * The function takes three arguments: the active dropdown, and the two inactive dropdowns
 * @param activeDropdown - The index of the dropdown menu that is being clicked on.
 * @param inactiveDropdownOne - The index of the dropdown menu that is inactive.
 * @param inactiveDropdownTwo - The dropdown menu that is inactive and will be closed if the active
 * dropdown is clicked.
 */

function dropdownMenu(
  activeDropdown,
  inactiveDropdownOne,
  inactiveDropdownTwo
) {
  connectBtn[activeDropdown].addEventListener("click", () => {
    if (
      dropdownMenus[activeDropdown].classList.contains("open-dropdown") == false
    ) {
      connectBtn[activeDropdown].classList.add("menu__item--active");
      dropdownMenus[activeDropdown].classList.add("dp-flex");
      dropdownMenus[activeDropdown].classList.add("open-dropdown");
      dropdownMenus[activeDropdown].classList.remove("close-dropdown");
      dropdownArrow[activeDropdown].classList.add("tf-rotate-180");

      connectBtn[inactiveDropdownOne].classList.remove("menu__item--active");
      dropdownMenus[inactiveDropdownOne].classList.remove("open-dropdown");
      dropdownMenus[inactiveDropdownOne].classList.add("close-dropdown");
      dropdownArrow[inactiveDropdownOne].classList.remove("tf-rotate-180");

      setTimeout(() => {
        dropdownMenus[inactiveDropdownOne].classList.remove("dp-flex");
      }, 300);

      connectBtn[inactiveDropdownTwo].classList.remove("menu__item--active");
      dropdownMenus[inactiveDropdownTwo].classList.remove("open-dropdown");
      dropdownMenus[inactiveDropdownTwo].classList.add("close-dropdown");
      dropdownArrow[inactiveDropdownTwo].classList.remove("tf-rotate-180");

      setTimeout(() => {
        dropdownMenus[inactiveDropdownTwo].classList.remove("dp-flex");
      }, 300);
    } else {
      connectBtn[activeDropdown].classList.remove("menu__item--active");
      dropdownMenus[activeDropdown].classList.remove("open-dropdown");
      dropdownMenus[activeDropdown].classList.add("close-dropdown");
      dropdownArrow[activeDropdown].classList.remove("tf-rotate-180");

      setTimeout(() => {
        dropdownMenus[activeDropdown].classList.remove("dp-flex");
      }, 400);
    }
  });
}

dropdownMenu(0, 1, 2); // Open Product Dropdown and close company and connect dropdown
dropdownMenu(1, 0, 2); // Open Company Dropdown and close product and connect
dropdownMenu(2, 1, 0); // Open Connect Dropdown and close product and company

/* Dropdown menu end */
