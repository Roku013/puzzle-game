/*class Character {
  constructor(game, x, y, health) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.health = health; // player movement.
    // If the move is valid, chenge the number of the last tile to 0(empty), and change the number of the tile the player is now on to 2(player)
  }
}
movePlayer = () => {
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      if (this.game.isValidMove(0, -1) && this.game.isAHerb(0, -1)) {
        this.game.updateMatrix(this.player.y, this.x, 0);
        this.game.updateMatrix(this.y, this.x - 1, 2);
        this.health += 3;
        this.x--;
        this.game.render();
      } else if (this.game.isValidMove(0, -1)) {
        this.game.updateMatrix(this.y, this.x, 0);
        this.game.updateMatrix(this.y, this.x - 1, 2);
        this.health--;
        this.x--;
        this.game.checkHealth();
        this.game.render();
      }
      break;
    case 'ArrowRight':
      event.preventDefault();
      if (this.game.isValidMove(0, 1) && this.game.isAHerb(0, 1)) {
        this.game.updateMatrix(this.y, this.x, 0);
        this.game.updateMatrix(this.y, this.x + 1, 2);
        this.health += 3;
        this.x++;
        this.game.render();
      } else if (this.game.isValidMove(0, 1)) {
        this.game.updateMatrix(this.y, this.x, 0);
        this.game.updateMatrix(this.y, this.x + 1, 2);
        this.health--;
        this.x++;
        this.game.checkHealth();
        this.game.render();
      }
      break;
    case 'ArrowUp':
      event.preventDefault();
      if (this.isValidMove(-1, 0) && this.isAHerb(-1, 0)) {
        this.updateMatrix(this.player.y, this.player.x, 0);
        this.updateMatrix(this.player.y - 1, this.player.x, 2);
        this.health += 3;
        this.player.y--;
        this.render();
      } else if (this.isValidMove(-1, 0)) {
        this.updateMatrix(this.player.y, this.player.x, 0);
        this.updateMatrix(this.player.y - 1, this.player.x, 2);
        this.health--;
        this.player.y--;
        this.checkHealth();
        this.render();
      }
      break;
    case 'ArrowDown':
      event.preventDefault();
      if (this.isValidMove(1, 0) && this.isAHerb(1, 0)) {
        this.updateMatrix(this.player.y, this.player.x, 0);
        this.updateMatrix(this.player.y + 1, this.player.x, 2);
        this.health += 3;
        this.player.y++;
        this.render();
      } else if (this.isValidMove(1, 0)) {
        this.updateMatrix(this.player.y, this.player.x, 0);
        this.updateMatrix(this.player.y + 1, this.player.x, 2);
        this.health--;
        this.player.y++;
        this.checkHealth();
        this.render();
      }
      break;
  }
};
*/
