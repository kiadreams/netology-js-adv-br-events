export default class GameField {
  #lastOccupiedFieldIndex = 0;
  #holes = [];
  #countOfHoles = 4;

  constructor() {
    this.gameField = this.#createGameFields();
    document.querySelector('main').append(this.gameField);
  }

  get emptyHole() {
    let fieldIndex = this.#getRandomHoleIndex();
    while (fieldIndex === this.#lastOccupiedFieldIndex) {
      fieldIndex = this.#getRandomHoleIndex();
    }
    this.#lastOccupiedFieldIndex = fieldIndex;
    return this.#holes[fieldIndex];
  }

  #getRandomHoleIndex() {
    return Math.floor(Math.random() * 4);
  }

  #createGameFields() {
    const gameField = document.createElement('div');
    gameField.classList.add('game-field');
    for (let i = 0; i < this.#countOfHoles; i++) {
      const hole = document.createElement('div');
      hole.classList.add('hole');
      gameField.append(hole);
      this.#holes.push(hole);
    }
    return gameField;
  }
}
