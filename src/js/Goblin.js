class Goblin {

  constructor() {
    this.goblin = this.#createGoblin();
    this.isGoblinVisible = false;
  }

  hide() {
    this.goblin.classList.add('hidden');
    this.isGoblinVisible = false;
  }

  showInField(field) {
    field.append(this.goblin);
    this.goblin.classList.remove('hidden');
    this.isGoblinVisible = true;
  }

  addEventListener(func) {
    this.goblin.addEventListener('click', func);
  }

  #createGoblin() {
    const goblinImg = document.createElement('img');
    goblinImg.src = 'image/goblin.png';
    goblinImg.alt = 'Изоображение гоблина';
    goblinImg.classList.add('goblin');
    return goblinImg;
  }
}
