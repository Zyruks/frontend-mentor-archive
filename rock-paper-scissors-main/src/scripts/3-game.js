class Game {
  constructor(user, npc) {
    this.user = user;
    this.opponent = npc;
    user.score = 0;
    npc.score = 0;
  }

  /**
   * It takes two objects as arguments, compares their choices, and updates their scores accordingly
   * @param user - the user object
   * @param npc - The computer's choice
   * @returns The winnerSelector function is returning the winner of the game.
   */
  winnerSelector(user, npc) {
    let userChoice = user.choice;
    let opponentChoice = npc.choice;

    if (userChoice === opponentChoice) {
      console.log("It's Draw");
      return (user.draw = true);
    } else if (userChoice === "rock") {
      if (opponentChoice === "scissors") {
        user.status = true;
      } else {
        npc.status = true;
      }
    } else if (userChoice === "paper") {
      if (opponentChoice === "rock") {
        user.status = true;
      } else {
        npc.status = true;
      }
    } else if (userChoice === "scissors") {
      if (opponentChoice === "paper") {
        user.status = true;
      } else {
        npc.status = true;
      }
    }

    if (npc.status) {
      npc.score++;
      console.log("You Lose!");
    } else {
      user.oldScore = user.score;
      user.score++;
      localStorage.setItem("score", user.score);
      console.log("You Win!");
    }
  }

  winnerSpot() {
    for (let token in tokens) {
      let isOwn = tokens.hasOwnProperty(token);
      if (isOwn && user.status) {
        tokens[0].setAttribute("data-winner", "winner");
        console.log("winner");
      } else if (isOwn && npc.status) {
        tokens[4].setAttribute("data-winner", "winner");
      }
    }
  }

  /**
   * It loops through the tokens object and checks if the token's parent element has the same class as
   * the user's choice. If it does, it removes the data-status attribute and adds the data-player
   * attribute with the value of user
   * add a animation to show up
   */

  showUserChoice() {
    for (let token in tokens) {
      let isOwn = tokens.hasOwnProperty(token);
      if (isOwn) {
        tokens[token].nextElementSibling.style.display = "block";
      }
      if (
        isOwn &&
        tokens[token].parentElement.classList.contains(user.choice) === true
      ) {
        tokens[token].parentElement.removeAttribute("data-status");

        tokens[token].parentElement.setAttribute("data-player", "user");
        addAnimation(tokens[token].parentElement, "anime-scale-up", 370);
      }
    }
  }

  /**
   * It creates a new token, adds it to the DOM, removes the disable attribute from the token's parent
   * element, and adds an animation to the token's parent element
   */
  showNpcChoice() {
    let npcChoice = npcToken(npc.choice);
    tokensContainer.innerHTML += npcChoice;
    tokens = document.querySelectorAll(".tokens");
    tokens[5].parentElement.removeAttribute("data-status", "disable");
    addAnimation(tokens[5].parentElement, "anime-scale-up", 370);
  }

  /**
   * It hides the options
   */
  hideOptions() {
    for (let token in tokens) {
      let isOwn = tokens.hasOwnProperty(token);

      if (
        isOwn &&
        tokens[token].parentElement.classList.contains("spot") !== true
      ) {
        addAnimation(tokens[token].parentElement, "anime-scale-down", 370);
        addAnimation(triangleImage, "anime-scale-down", 375);
        setTimeout(() => {
          tokens[token].parentElement.setAttribute("data-status", "disable");
          triangleImage.style.display = "none";
        }, 350);
      }
    }
  }

  growUp() {
    if (window.innerWidth >= 1025) {
      for (let token in tokens) {
        let isOwn = tokens.hasOwnProperty(token);
        if (isOwn && tokens[token].parentElement.classList.contains("spot")) {
          tokens[token].setAttribute("data-status", "active");
          console.log("Grow");
        }
      }
    }
  }

  /**
   * If the user's status is true, then the results header will say "You Win!"; if the NPC's status is
   * true, then the results header will say "You Lose!"; otherwise, the results header will say "It's a
   * Draw"
   */
  updateStatus() {
    if (user.status === true) {
      results.querySelector("h1").textContent = "You Win!";
    } else if (npc.status === true) {
      results.querySelector("h1").textContent = "You Lose!";
    } else {
      results.querySelector("h1").textContent = "It's a Draw";
    }
  }

  /**
   * The function showResults() is called when the user clicks the button. The function then changes
   * the blockSize of the results div to 60%
   */
  showResults() {
    results.style.blockSize = "60%";
  }

  /**
   * The function hides the results section by setting the blockSize to 0%
   */
  hideResults() {
    results.style.blockSize = "0%";
  }

  /**
   * It updates the score on the screen with a animation from old score to new score
   */
  scoreUpdate() {
    oldScore.textContent = user.oldScore;
    oldScore.classList.add("anime-out-of-sight");
    setTimeout(() => {
      oldScore.classList.remove("anime-out-of-sight");
      score.classList.remove("anime-in-sight");
    }, 500);
    score.textContent = user.score;
    score.classList.add("anime-in-sight");
  }

  /**
   * It removes the animation class from the board, removes the data-status and data-player attributes
   * from the board, and removes the last token from the board
   */
  playAgain() {
    tokens = document.querySelectorAll(".tokens");
    for (let token in tokens) {
      let isOwn = tokens.hasOwnProperty(token);
      if (isOwn) {
        addAnimation(tokens[token].parentElement, "anime-scale-up", 350);
        tokens[token].parentElement.removeAttribute("data-status");
        tokens[token].parentElement.removeAttribute("data-player");
        tokens[token].removeAttribute("data-winner");

        tokens[token].removeAttribute("data-status");
        tokens[5].parentElement.remove();
      }
    }
    tokens = document.querySelectorAll(".tokens");
  }
}

/**
 * It takes a string as an argument and returns a string of HTML
 * @param token - the token that the player has chosen
 * @returns the npcToken variable.
 */

function npcToken(token) {
  let npcToken = `
 <div class="wrapper ${token}" data-player="opponent" data-status="disable">
            <button  class="tokens">
              <img
                src="./assets/svg/icon-${token}.svg"
                alt="hand shape like a ${token}"
              />
            </button>
            <h3 style="display: block">The House picked</h3>
          </div>
`;

  return npcToken;
}

let user = new Players("");
let npc = new Npc();
let game = new Game(user, npc);
