const smallHerb = new Image();
smallHerb.src = '/images/smallherb2.png';

const bigHerb = new Image();
bigHerb.src = '/images/bigherb2.png';

const bigHerbTwo = new Image();
bigHerbTwo.src = '/images/bigherb2.png';

function itemLocation(array2d, itemtofind) {
  index = [].concat.apply([], [].concat.apply([], array2d)).indexOf(itemtofind);
  if (index === -1) {
    return false;
  }

  numColumns = array2d[0].length;
  row = parseInt(index / numColumns);
  col = index % numColumns;
  return [row, col];
}

//base for creating a level
class Game {
  constructor(canvas, levels, matrix, playerX, playerY) {
    this.canvas = canvas;
    this.levels = levels;
    this.context = canvas.getContext('2d');
    // this.character = new Character(this);
    this.cellSize = 50;
    this.padding = 2;
    this.matrix = matrix;
    this.initialMatrix = matrix;
    this.level = 0;
    this.playerStartingX = playerX;
    this.playerStartingY = playerY;
    this.smallHerbLocation = itemLocation(this.levels[this.level], 3);
    this.bigHerbLocation = itemLocation(this.levels[this.level], 4);
    this.bigHerbTwoLocation = itemLocation(this.levels[this.level], 5);
    this.handleControls();
  }

  reset() {
    this.health = 3;
    this.matrix = levels[this.level];
    console.log(this.matrix);
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
    console.log(this.level);
  }

  handleControls() {
    document.addEventListener('keydown', (event) => {
      this.movePlayer(event);
    });
  }

  //check if health is 0
  checkHealth() {
    if (this.health <= 0) {
      this.lose();
    }
  }

  //check if the move is valid by checking the number of the tile on which the player is moving into
  isValidMove(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return (
      cellVal === 0 ||
      cellVal === 3 ||
      cellVal === 4 ||
      cellVal === 5 ||
      cellVal === 9
    );
  }

  //check if the player moves into a healing herb
  smallHerb(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 3;
  }

  bigHerb(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 4;
  }

  bigHerbTwo(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 5;
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
    const isASmallHerb = this.smallHerb(xMovement, yMovement);
    const isABigHerb = this.bigHerb(xMovement, yMovement);
    const isABigHerbTwo = this.bigHerbTwo(xMovement, yMovement);

    if (isWin) {
      this.win();
    } else if (isValid) {
      this.player.y += yMovement;
      this.player.x += xMovement;
      if (isASmallHerb) {
        this.health = 3;
        this.updateMatrix(this.player.x, this.player.y, 0);
      } else if (isABigHerb) {
        this.health = 5;
        this.updateMatrix(this.player.x, this.player.y, 0);
      } else if (isABigHerbTwo) {
        this.health = 5;
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

        let sprite = '';

        switch (cellVal) {
          case 0:
            sprite = 'black';
            break;
          case 1: //outer walls
            sprite = '#4488FF';
            break;
          case 2: //outer walls
            sprite = 'darkblue';
            break;
          case 3: //small herb
            sprite = this.context.drawImage(
              smallHerb,
              this.smallHerbLocation[1] * (this.cellSize + this.padding),
              this.smallHerbLocation[0] * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 4: //big herb
            sprite = this.context.drawImage(
              bigHerb,
              this.bigHerbLocation[1] * (this.cellSize + this.padding),
              this.bigHerbLocation[0] * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 5:
            sprite = this.context.drawImage(
              bigHerbTwo,
              this.bigHerbTwoLocation[1] * (this.cellSize + this.padding),
              this.bigHerbTwoLocation[0] * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 9: //finish line
            sprite = 'red';
            break;
        }
        if (cellVal !== 3 && cellVal !== 4 && cellVal !== 5) {
          this.context.fillStyle = sprite;
          this.context.fillRect(
            col * (this.cellSize + this.padding),
            row * (this.cellSize + this.padding),
            this.cellSize,
            this.cellSize
          );
        }
      }
    }
  }

  drawHealth() {
    this.context.font = '25px monospace';
    this.context.fillStyle = 'white';
    this.context.fillText(`Health: ${this.health}`, 20, 30);
    this.context.fillText(`Level: ${this.level}`, 200, 30);
  }

  draw() {
    this.context.clearRect(0, 0, 420, 580);
    this.drawBackground();
    this.player.draw();
    this.drawHealth();
  }
}
