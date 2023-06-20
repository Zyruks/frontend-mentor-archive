const inputContainer = document.querySelector(".js-input-container");
const inputSubmit = inputContainer.parentElement.querySelector(".button");
const inputField = inputContainer.querySelector("input");
const validRegex =
  /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

function ValidateEmail() {
  if (validRegex.test(inputField.value)) {
    inputField.style.border = "4px solid #20dd2a";
    inputContainer.setAttribute("data-status", "");
    return true;
  } else {
    inputField.style.border = "4px solid #fa5757";
    inputContainer.setAttribute("data-status", "wrong-email");
  }
}
inputSubmit.addEventListener("click", () => {
  ValidateEmail();
});
