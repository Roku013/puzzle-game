// images
const smallHerb = new Image();
smallHerb.src = '/images/smallherb2.png';

const bigHerb = new Image();
bigHerb.src = '/images/bigherb2.png';

const bigHerbTwo = new Image();
bigHerbTwo.src = '/images/bigherb2.png';

const grass = new Image();
grass.src = '/images/grass.png';

const grassTwo = new Image();
grassTwo.src = '/images/grass.png';

const water = new Image();
water.src = '/images/water.png';

const startScreen = new Image();
startScreen.src = '/images/startscreen.png';

// audio
const herbHeal = new Audio('/sounds/BeepBox-Song.mp3');
const mainSong = new Audio('/sounds/mainsong.mp3');

/*function itemLocation(array2d, itemToFind) {
  index = [].concat.apply([], [].concat.apply([], array2d)).indexOf(itemToFind);
  if (index === -1) {
    return false;
  }
  numColumns = array2d[0].length;
  row = parseInt(index / numColumns);
  col = index % numColumns;
  return [row, col];
}*/

//base for creating a level
class Game {
  constructor(canvas, levels, matrix, playerX, playerY, lost = false) {
    this.canvas = canvas;
    this.levels = levels;
    this.context = canvas.getContext('2d');
    this.cellSize = 64;
    this.padding = 0;
    this.matrix = matrix;
    this.level = 0;
    this.playerStartingX = playerX;
    this.playerStartingY = playerY;
    this.handleControls();
    this.lost = lost;
  }

  reset() {
    this.health = 3;
    this.lost = false;
    this.matrix = levels[this.level];
    this.player = new Player(this, this.playerStartingX, this.playerStartingY);
  }

  start() {
    //mainSong.play();
    this.reset();
    this.loop();
  }

  lose() {
    this.lost = true;
    ifLostLevel(levels[this.level], this.lost, this.level);
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
    if (this.health <= 0) {
      this.lose();
    }
  }

  //check if the move is valid by checking the number of the tile on which the player is moving into
  isValidMove(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 0 || cellVal === 3 || cellVal === 4 || cellVal === 9;
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

    if (isWin) {
      herbHeal.play();
      this.win();
    } else if (isValid) {
      this.player.y += yMovement;
      this.player.x += xMovement;
      if (isASmallHerb) {
        herbHeal.load();
        herbHeal.play();
        this.health = 3;
        this.updateMatrix(this.player.x, this.player.y, 0);
      } else if (isABigHerb) {
        herbHeal.load();
        herbHeal.play();
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

        //let sprite = '';

        switch (cellVal) {
          case 0:
            let zero = this.context.createPattern(grass, 'repeat');
            this.context.fillStyle = zero;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 1:
            let one = this.context.createPattern(water, 'repeat');
            this.context.fillStyle = one;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 2:
            let two = this.context.createPattern(water, 'repeat');
            this.context.fillStyle = two;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 3:
            let three = this.context.createPattern(smallHerb, 'repeat');
            this.context.fillStyle = three;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 4:
            let four = this.context.createPattern(bigHerb, 'repeat');
            this.context.fillStyle = four;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 's':
            let eight = this.context.createPattern(startScreen, 'repeat');
            this.context.fillStyle = eight;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 'ui':
            let ui = this.context.createPattern(startScreen, 'repeat');
            this.context.fillStyle = ui;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
          case 9:
            let nine = this.context.createPattern(grass, 'no-repeat');
            this.context.fillStyle = nine;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;
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
    this.context.clearRect(0, 0, 640, 860);
    this.drawBackground();
    this.player.draw();
    this.drawHealth();
  }
}
