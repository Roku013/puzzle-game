const playerAvatar = new Image();
playerAvatar.src = '/images/character-down.png';

class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = 'orange';
  }

  draw() {
    this.game.context.fillStyle = this.sprite;
    this.game.context.fillRect(
      this.x * (this.game.cellSize + this.game.padding),
      this.y * (this.game.cellSize + this.game.padding),
      this.game.cellSize,
      this.game.cellSize
    );
  }
}
