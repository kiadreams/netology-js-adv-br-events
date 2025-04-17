import GameField from './GameField';
import Goblin from './Goblin';

export default class Game {
  #maxRound = 10;
  #currRound = 0;
  #currMiss = 0;
  #maxMiss = 5;

  constructor() {
    this.gameField = new GameField();
    this.goblin = new Goblin();
    this.score = 0;
  }

  startGame(){
    this.clickOnGoblin = this.clickOnGoblin.bind(this);

    this.goblin.addEventListener(this.clickOnGoblin);
    this.#showGoblinTimeout();
  }

  clickOnGoblin() {
    clearTimeout(this.timer);
    this.goblin.hide();
    this.score++;
    this.gameField.score.textContent = String(this.score);
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
        `Вы проиграли!!!\n- пропустили ${this.#currMiss} гоблинов` :
        `Вы победили,\nВаш счёт - ${this.score}`;
      alert(text);
    }, 100);
  }

  #isGameContinues() {
    return !(this.#currRound >= this.#maxRound || this.#currMiss === this.#maxMiss);
  }
}
