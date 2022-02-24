//base for creating a level
class Game {
  constructor(canvas, levels, matrix, playerX, playerY) {
    this.canvas = canvas;
    this.levels = levels;
    this.context = canvas.getContext('2d');
    // this.character = new Character(this);
    this.cellSize = 40;
    this.padding = 2;
    this.matrix = matrix;
    this.level = 0;
    this.playerStartingX = playerX;
    this.playerStartingY = playerY;

    this.handleControls();
  }

  reset() {
    this.health = 6;
    this.player = new Player(this, this.playerStartingX, this.playerStartingY);
  }

  start() {
    this.reset();
    this.loop();
  }

  lose() {
    this.level = 0;
    this.reset();
  }

  win() {
    this.level++;
    const matrix = this.levels[this.level];
    this.matrix = matrix;
    this.reset();
  }

  handleControls() {
    document.addEventListener('keydown', (event) => {
      this.movePlayer(event);
    });
  }

  //check if health is 0
  checkHealth() {
    if (this.health === 0) {
      this.lose();
    }
  }

  //check if the move is valid by checking the number of the tile on which the player is moving into
  isValidMove(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 0 || cellVal === 3 || cellVal === 9;
  }

  //check if the player moves into a healing herb
  isAHerb(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 3;
  }

  isWin(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 9;
  }

  //update the matrix grid every time player moves
  updateMatrix(x, y, val) {
    this.matrix[y][x] = val;
  }

  // player movement.
  // If the move is valid, chenge the number of the last tile to 0(empty), and change the number of the tile the player is now on to 2(player)
  movePlayer(event) {
    let xMovement = 0;
    let yMovement = 0;
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        xMovement = -1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        xMovement = 1;
        break;
      case 'ArrowUp':
        event.preventDefault();
        yMovement = -1;
        break;
      case 'ArrowDown':
        event.preventDefault();
        yMovement = 1;
        break;
    }

    const isValid = this.isValidMove(xMovement, yMovement);
    const isWin = this.isWin(xMovement, yMovement);

    if (isWin) {
      this.win();
    } else if (isValid) {
      this.player.y += yMovement;
      this.player.x += xMovement;
      if (this.isAHerb(xMovement, yMovement)) {
        this.health += 3;
        this.updateMatrix(this.player.x, this.player.y, 0);
      } else {
        this.health--;
      }
    }
  }

  runLogic() {
    this.checkHealth();
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      this.loop();
    });
  }

  drawBackground() {
    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        const cellVal = this.matrix[row][col];

        let color = '#111';

        switch (cellVal) {
          case 1: //outer walls
            color = '#4488FF';
            break;
          case 3: //herb
            color = 'green';
            break;
          case 9: //finish line
            color = 'red';
            break;
        }

        this.context.fillStyle = color;
        this.context.fillRect(
          col * (this.cellSize + this.padding),
          row * (this.cellSize + this.padding),
          this.cellSize,
          this.cellSize
        );
      }
    }
  }

  drawHealth() {
    this.context.font = '20px monospace';
    this.context.fillStyle = 'white';
    this.context.fillText(`Health: ${this.health}`, 20, 30);
  }

  draw() {
    this.context.clearRect(0, 0, 420, 580);
    this.drawBackground();
    this.player.draw();
    this.drawHealth();
  }
}
