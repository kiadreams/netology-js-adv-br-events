import GameField from './GameField';
import Goblin from './Goblin';

export default class Game {
  #maxRound = 10;
  #currRound = 0;
  #currMiss = 0;
  #maxMiss = 3;

  constructor() {
    this.gameField = new GameField();
    this.goblin = new Goblin();
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
      this.goblin.showInField(this.gameField.emptyHole);
      this.#currRound++;
      this.#deleteGoblinTimeout();
    }, (Math.random() + 0.5) * 1000);
  }

  #deleteGoblinTimeout() {
    this.timer = setTimeout(() => {
      this.goblin.hide();
      this.#currMiss++;
      this.gameField.counter.textContent = String(this.#currMiss);
      if (this.#isGameContinues()) {
        this.#showGoblinTimeout();
      } else {
        this.#endGame();
      }
    },1000);
  }

  #endGame() {
    this.goblin.hide();
    setTimeout(() => {
      const text = this.#currMiss === this.#maxMiss ?
        `Вы проиграли!!!\n- промазали ${this.#currMiss} раза` :
        'Вы выйграли!!!';
      alert(text);
    }, 100);
  }

  #isGameContinues() {
    return !(this.#currRound >= this.#maxRound || this.#currMiss === this.#maxMiss);
  }
}
