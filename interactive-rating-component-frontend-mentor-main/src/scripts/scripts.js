const reviewBlock = document.querySelector(".js-review");
const score = document.querySelectorAll(".js-score__item");
const scoreItems = document.querySelectorAll(".js-score__item");
const thankYouBlock = document.querySelector(".js-thank-you");
const scoreSpan = document.querySelector(".js-score");
const errorBlock = document.querySelector(".js-error");
const submitBtn = document.querySelector(".js-review__btn");
const goBackBtn = document.querySelector(".js-review__go-back-btn");
let x;

/* This is a for loop that is looping through the scoreItems array. The for loop is adding an event
listener to each item in the array. The event listener is listening for a click on each item. If the
user clicks on an item, the item will be given the class score__item--active. The other items will
be remove the class score__item--active. */
for (let i = 0; i < scoreItems.length; i++) {
  scoreItems[i].addEventListener("click", () => {
    if (scoreItems[i].dataset.score == 1) {
      scoreItems[i].classList.add("score__item--active");
      scoreItems[1].classList.remove("score__item--active");
      scoreItems[2].classList.remove("score__item--active");
      scoreItems[3].classList.remove("score__item--active");
      scoreItems[4].classList.remove("score__item--active");
      x = 0;
    } else if (scoreItems[i].dataset.score == 2) {
      {
        scoreItems[i].classList.add("score__item--active");
        scoreItems[0].classList.remove("score__item--active");
        scoreItems[2].classList.remove("score__item--active");
        scoreItems[3].classList.remove("score__item--active");
        scoreItems[4].classList.remove("score__item--active");
        x = 1;
      }
    } else if (scoreItems[i].dataset.score == 3) {
      {
        scoreItems[i].classList.add("score__item--active");
        scoreItems[0].classList.remove("score__item--active");
        scoreItems[1].classList.remove("score__item--active");
        scoreItems[3].classList.remove("score__item--active");
        scoreItems[4].classList.remove("score__item--active");
        x = 2;
      }
    } else if (scoreItems[i].dataset.score == 4) {
      {
        scoreItems[i].classList.add("score__item--active");
        scoreItems[0].classList.remove("score__item--active");
        scoreItems[1].classList.remove("score__item--active");
        scoreItems[2].classList.remove("score__item--active");
        scoreItems[4].classList.remove("score__item--active");
        x = 3;
      }
    } else if (scoreItems[i].dataset.score == 5) {
      {
        scoreItems[i].classList.add("score__item--active");
        scoreItems[0].classList.remove("score__item--active");
        scoreItems[1].classList.remove("score__item--active");
        scoreItems[2].classList.remove("score__item--active");
        scoreItems[3].classList.remove("score__item--active");
        x = 4;
      }
    }
  });
}

/* This is an event listener that is listening for a click on the submit button. If the user has
selected a score, the thank you block will be displayed. If the user has not selected a score, the
error block will be displayed. */
submitBtn.addEventListener("click", () => {
  if (x != undefined) {
    let newScore = scoreItems[x].dataset.score;

    scoreSpan.innerHTML = newScore;

    reviewBlock.classList.add("no-selected");
    thankYouBlock.classList.remove("no-selected");
  } else {
    reviewBlock.classList.add("no-selected");
    errorBlock.classList.remove("no-selected");
  }
});

/* This is an event listener that is listening for a click on the go back button. If the user clicks on
the go back button, the error block will be hidden and the review block will be displayed. */
goBackBtn.addEventListener("click", () => {
  errorBlock.classList.add("no-selected");
  reviewBlock.classList.remove("no-selected");
});
