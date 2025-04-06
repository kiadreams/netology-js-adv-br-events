// import GameField from "./GameField";
// import Goblin from "./Goblin";

class Game {
  #maxRound = 10;
  #currRound = 0;
  #miss = 0;

  constructor() {
    this.gameField = new GameField();
    this.goblin = new Goblin();
    this.timer = undefined;
  }

  startGame(){
    this.clickOnGoblin = this.clickOnGoblin.bind(this);
    this.goblin.addEventListener(this.clickOnGoblin);
    this.#showGoblinTimeout();
  }

  clickOnGoblin(event) {
    clearTimeout(this.timer);
    console.log('нажали', event, this);
    this.goblin.hide();
    if (this.#isGameContinues()) {
      this.#showGoblinTimeout();
    } else {
      this.#endGame();
    }
  }

  #showGoblinTimeout() {
    this.timer = setTimeout(() => {
      this.goblin.showInField(this.gameField.nextEmptyField);
      this.#currRound++;
      this.#deleteGoblinTimeout();
    }, (Math.random() + 0.5) * 1000);
  }

  #deleteGoblinTimeout() {
    this.timer = setTimeout(() => {
      if (this.#isGameContinues()) {
        this.#showGoblinTimeout();
      } else {
        this.#endGame();
      }
    },1000);
  }

  #endGame() {
    this.goblin.hide();
    console.log('Игра окончена!!!');
    console.log(this.#miss, this.#currRound);
  }

  #isGameContinues() {
    this.#miss++;
    if (this.#currRound >= this.#maxRound || this.#miss === 5) {
      return false
    } else {
      return true;
    }
  }
}
