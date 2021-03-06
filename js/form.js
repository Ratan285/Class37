class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement('h2');
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display() {
    var title = createElement('h2');
    title.html("carRacingGame");
    title.position(130, 110);
    this.input.position(130, 160);
    this.button.position(250, 200);
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount++
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("hello" + player.name);
      this.greeting.position(130, 160);
    })
  }
}