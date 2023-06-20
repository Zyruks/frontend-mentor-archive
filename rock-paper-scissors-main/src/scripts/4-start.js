function gameActions() {
  for (let token in tokens) {
    let isOwn = tokens.hasOwnProperty(token);

    if (isOwn) {
      tokens[token].addEventListener("click", () => {
        user.pick(token);
        npc.pick();
        game.winnerSelector(user, npc);
        game.hideOptions();
        game.growUp();
        setTimeout(() => {
          game.showUserChoice();
        }, 400);

        setTimeout(() => {
          game.showNpcChoice();
        }, 1000);

        game.updateStatus();

        if (window.innerWidth >= 1025) {
          tokens = document.querySelectorAll(".tokens");
          setTimeout(() => {
            for (let token in tokens) {
              let isOwn = tokens.hasOwnProperty(token);
              if (isOwn && token < 4) {
                tokens[token].parentElement.style.transform =
                  "translateX(-40%)";
              } else if (isOwn) {
                tokens[token].parentElement.style.transform = "translateX(40%)";
              }
            }
          }, 1700);
        }

        setTimeout(() => {
          game.winnerSpot();
          game.showResults();
        }, 1800);

        setTimeout(() => {
          if (user.status === true) {
            game.scoreUpdate();
          }
        }, 2000);
      });
      user.cleaner();
      npc.cleaner();
    }
  }
}

/* TODO
- [ ] Change the setTimeout to Promises
*/

gameActions();

playAgainBtn.addEventListener("click", () => {
  /* Looping through the tokens object and adding an animation to each token. and removing the next element sibling attribute style(removing h3 style display block) */
  for (let token in tokens) {
    let isOwn = tokens.hasOwnProperty(token);

    if (isOwn) {
      addAnimation(tokens[token].parentElement, "anime-scale-down", 350);

      tokens[token].nextElementSibling.removeAttribute("style");
      tokens[token].parentElement.removeAttribute("style");
    }
  }

  game.hideResults();

  /* Setting a timeout of 350 milliseconds before the game.playAgain() function is called and giving the triangleImage Element a animation and removing the style attribute*/
  setTimeout(() => {
    game.playAgain();
    triangleImage.removeAttribute("style");
    addAnimation(triangleImage, "anime-scale-up", 360);
    results.querySelector("h1").textContent = "";
  }, 350);
  gameActions();
});

/**
 * It adds an animation to an element, then removes it after a specified amount of time
 * @param items - The element you want to add the animation to.
 * @param animation - the animation class you want to add
 * @param time - The time in milliseconds that the animation will last.
 */
function addAnimation(items, animation, time) {
  items.classList.add(animation);

  setTimeout(() => {
    items.classList.remove(animation);
  }, time);
}

/* Checking if there is a score in the local storage, if there is, it will set the user score to the
score in the local storage and update the score in the DOM. */
if (localStorage.getItem("score")) {
  user.score = localStorage.getItem("score");
  score.textContent = user.score;
}

/* Adding an event listener to the reset score button. When the button is clicked, it will clear the
local storage and reload the page. */
resetScore.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
