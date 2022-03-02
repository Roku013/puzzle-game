const playerAvatar = new Image();
playerAvatar.src = '/images/Sprite-0004.png';

const animatedPlayer = new Image();
animatedPlayer.src =
  '/images/drizzile___sprite_overworld_by_wolfang62_ddlb6uu-fullview.png';

class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = playerAvatar;
    this.frame = 1;
  }

  draw() {
    this.frame++;
    this.game.context.drawImage(
      animatedPlayer,
      64 * (this.frame % 4),
      64,
      this.game.cellSize,
      this.game.cellSize,
      this.x * (this.game.cellSize + this.game.padding),
      this.y * (this.game.cellSize + this.game.padding),
      this.game.cellSize,
      this.game.cellSize
    );
    /*this.game.context.drawImage(
      playerAvatar,
      this.x * (this.game.cellSize + this.game.padding),
      this.y * (this.game.cellSize + this.game.padding),
      this.game.cellSize,
      this.game.cellSize
    );*/
  }
}
