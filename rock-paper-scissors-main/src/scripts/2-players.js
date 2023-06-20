class Players {
  constructor(choice, score) {
    this.choice = choice;
    this.score = score;
    this.oldScore = 0;
  }

  /**
   * The pick method takes in a token as an argument and assigns the choice variable to the token's id
   * @param token - The id of the token that the user has clicked on.
   */
  async pick(token) {
    if (this.choice.length === 0) {
      this.choice = tokens[token].getAttribute("id");
      console.log(`User: ${this.choice}`);
      return this.choice;
    }
  }

  /**
   * The cleaner function is used to clear the choice and status variables
   */
  cleaner() {
    this.choice = "";

    this.status = undefined;
  }
}

class Npc extends Players {
  /**
   * The computer picks a random number between 0 and 2, and then assigns the corresponding string to
   * the choice property
   * @returns The choice of the computer.
   */
  pick() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      this.choice = "rock";
    } else if (randomNumber === 1) {
      this.choice = "paper";
    } else if (randomNumber === 2) {
      this.choice = "scissors";
    }
    console.log(`Opponent: ${this.choice}`);
    return this.choice;
  }
}
