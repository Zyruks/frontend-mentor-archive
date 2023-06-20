const changeBtn = document.querySelectorAll(".js-plan__change");
const planYear = document.querySelector(".js-plan-year");
const planMonthly = document.querySelector(".js-plan-monthly");
const monthlyText = document.querySelector(".js-monthly-text");
const YearlyText = document.querySelector(".js-yearly-text");
const plan = document.querySelectorAll(".plan");
const proceedBtn = document.querySelector(".js-card__proceed-btn");
const thanksCard = document.querySelector(".js-thanks");
const primaryCard = document.querySelector(".js-primary-card");
const title = document.querySelector(".title");

/* This is adding an event listener to the first button. When the button is clicked, it adds the class
plan-container--active to the planMonthly element. It also adds the class dropdown to the
planMonthly element. It then sets the style order to 2 for the planMonthly element. It then sets the
style order to 1 for the planYear element. It then removes the class hidden from the second element
in the plan array. It then adds the class dropdown to the second element in the plan array. */
changeBtn[0].addEventListener("click", () => {
  planMonthly.classList.add("plan-container--active");
  planMonthly.classList.add("dropdown");
  planMonthly.style.order = "2";
  planYear.style.order = "1";
  plan[1].classList.remove("hidden");
  plan[1].classList.add("dropdown");
});

changeBtn[1].addEventListener("click", () => {
  planYear.classList.add("plan-container--active");
  planYear.classList.add("dropdown");
  planMonthly.style.order = "1";
  planYear.style.order = "2";
  plan[0].classList.remove("hidden");
  plan[0].classList.add("dropdown");
});

/* This is adding an event listener to the monthlyText element. When the element is clicked, it removes
the class plan-container--active from the planYear element. It then adds the class hidden to the
first element in the changeBtn array. It then adds the class vanish to the planYear element. It then
sets a timeout function. After 400 milliseconds, it adds the class hidden to the first element in
the plan array. It then removes the class vanish from the planYear element. It then removes the
class hidden from the second element in the changeBtn array. It then removes the class vanish from
the planMonthly element. */
monthlyText.addEventListener("click", () => {
  planYear.classList.remove("plan-container--active");
  changeBtn[0].classList.add("hidden");

  planYear.classList.add("vanish");
  setTimeout(function () {
    plan[0].classList.add("hidden");
    planYear.classList.remove("vanish");
    changeBtn[1].classList.remove("hidden");
  }, 500);
  console.log("monthly");
  planMonthly.classList.remove("vanish");
});

YearlyText.addEventListener("click", () => {
  planMonthly.classList.remove("plan-container--active");
  changeBtn[1].classList.add("hidden");
  planMonthly.classList.add("vanish");

  setTimeout(function () {
    plan[1].classList.add("hidden");
    planMonthly.classList.remove("vanish");
    changeBtn[0].classList.remove("hidden");
  }, 500);
  console.log("Year");
  planYear.classList.remove("vanish");
});

proceedBtn.addEventListener("click", () => {
  primaryCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
});
