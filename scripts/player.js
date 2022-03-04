const playerLeft = new Image();
playerLeft.src = '/images/playerLeft.png';

const playerRight = new Image();
playerRight.src = '/images/playerRight.png';

const playerUp = new Image();
playerUp.src = '/images/playerUp.png';

const playerDown = new Image();
playerDown.src = '/images/playerDown.png';

const animatedPlayer = new Image();
animatedPlayer.src =
  '/images/drizzile___sprite_overworld_by_wolfang62_ddlb6uu-fullview.png';

class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = playerRight;
    this.frame = 1;
    this.direction = 'right';
  }

  draw() {
    switch (this.direction) {
      case 'left':
        this.frame++;
        this.game.context.drawImage(
          playerLeft,
          this.x * (this.game.cellSize + this.game.padding),
          this.y * (this.game.cellSize + this.game.padding),
          this.game.cellSize,
          this.game.cellSize
        );
        break;
      case 'right':
        this.frame++;
        this.game.context.drawImage(
          playerRight,
          this.x * (this.game.cellSize + this.game.padding),
          this.y * (this.game.cellSize + this.game.padding),
          this.game.cellSize,
          this.game.cellSize
        );
        break;
      case 'up':
        this.frame++;
        this.game.context.drawImage(
          playerUp,
          this.x * (this.game.cellSize + this.game.padding),
          this.y * (this.game.cellSize + this.game.padding),
          this.game.cellSize,
          this.game.cellSize
        );
        break;
      case 'down':
        this.frame++;
        this.game.context.drawImage(
          playerDown,
          this.x * (this.game.cellSize + this.game.padding),
          this.y * (this.game.cellSize + this.game.padding),
          this.game.cellSize,
          this.game.cellSize
        );
        break;
        break;
    }
    /*this.frame++;
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
