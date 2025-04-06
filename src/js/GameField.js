class GameField {
  #gameField;
  #lastOccupiedFieldIndex = 0;
  #holes;

  constructor() {
    this.#gameField = document.querySelector('.game-field');
    this.#holes = this.#gameField.querySelectorAll(".hole");
  }

  get nextEmptyField() {
    let fieldIndex = this.#getRandomHoleIndex();
    while (fieldIndex === this.#lastOccupiedFieldIndex) {
      fieldIndex = this.#getRandomHoleIndex();
    }
    this.#lastOccupiedFieldIndex = fieldIndex;
    return this.#holes[fieldIndex]
  }

  #getRandomHoleIndex() {
    return Math.floor(Math.random() * 4);
  }
}
