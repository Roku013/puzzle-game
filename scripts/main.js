//base for creating a level
class GridSystem {
  constructor(matrix, playerX, playerY) {
    this.matrix = matrix;
    this.uiContext = this.#getContext(420, 580, '#000'); //UI part of the screen
    this.outlineContext = this.#getContext(0, 0, '#000'); //Grid
    this.topContext = this.#getContext(0, 0, '#111', true); //Player and enviroment
    this.cellSize = 40;
    this.padding = 2;
    this.player = { x: playerX, y: playerY, sprite: 'orange' };
    this.matrix[playerY][playerX] = 2;
    this.health = 7;

    //button trigger
    document.addEventListener('keydown', this.#movePlayer);
  }

  //check if health is 0
  #checkHealth() {
    if (this.health === 0) {
      console.log('dead');

      //level.render();
      //level.loop();
    }
  }

  //check if the move is valid by checking the number of the tile on which the player is moving into
  #isValidMove(y, x) {
    if (
      this.matrix[this.player.y + y][this.player.x + x] === 0 ||
      this.matrix[this.player.y + y][this.player.x + x] === 3 ||
      this.matrix[this.player.y + y][this.player.x + x] === 9
    ) {
      return true;
    }
    return false;
  }

  //check if the player moves into a healing herb
  #isAHerb(y, x) {
    if (this.matrix[this.player.y + y][this.player.x + x] === 3) {
      return true;
    }
    return false;
  }

  //update the matrix grid every time player moves
  #updateMatrix(y, x, val) {
    this.matrix[y][x] = val;
  }

  // player movement.
  // If the move is valid, chenge the number of the last tile to 0(empty), and change the number of the tile the player is now on to 2(player)
  #movePlayer = () => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        if (this.#isValidMove(0, -1) && this.#isAHerb(0, -1)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y, this.player.x - 1, 2);
          this.health += 3;
          this.player.x--;
          this.render();
        } else if (this.#isValidMove(0, -1)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y, this.player.x - 1, 2);
          this.health--;
          this.player.x--;
          this.#checkHealth();
          this.render();
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (this.#isValidMove(0, 1) && this.#isAHerb(0, 1)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y, this.player.x + 1, 2);
          this.health += 3;
          this.player.x++;
          this.render();
        } else if (this.#isValidMove(0, 1)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y, this.player.x + 1, 2);
          this.health--;
          this.player.x++;
          this.#checkHealth();
          this.render();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.#isValidMove(-1, 0) && this.#isAHerb(-1, 0)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y - 1, this.player.x, 2);
          this.health += 3;
          this.player.y--;
          this.render();
        } else if (this.#isValidMove(-1, 0)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y - 1, this.player.x, 2);
          this.health--;
          this.player.y--;
          this.#checkHealth();
          this.render();
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (this.#isValidMove(1, 0) && this.#isAHerb(1, 0)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y + 1, this.player.x, 2);
          this.health += 3;
          this.player.y++;
          this.render();
        } else if (this.#isValidMove(1, 0)) {
          this.#updateMatrix(this.player.y, this.player.x, 0);
          this.#updateMatrix(this.player.y + 1, this.player.x, 2);
          this.health--;
          this.player.y++;
          this.#checkHealth();
          this.render();
        }
        break;
    }
  };

  //center the window
  #getCenter(w, h) {
    return {
      x: window.innerWidth / 2 - w / 2 + 'px',
      y: window.innerHeight / 2 - h / 2 + 'px'
    };
  }

  //all the canvas stuff
  #getContext(w, h, color = '#111', isTransparent = false) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width = w;
    this.height = this.canvas.height = h;
    this.canvas.style.position = 'absolute';
    this.canvas.style.background = color;
    if (isTransparent) {
      this.canvas.style.backgroundColor = 'transparent';
    }
    const center = this.#getCenter(w, h);
    this.canvas.style.marginLeft = center.x;
    this.canvas.style.marginTop = center.y;
    document.body.appendChild(this.canvas);

    return this.context;
  }

  render() {
    const w =
      (this.cellSize + this.padding) * this.matrix[0].length - this.padding;
    const h =
      (this.cellSize + this.padding) * this.matrix.length - this.padding;

    this.outlineContext.canvas.width = w;
    this.outlineContext.canvas.height = h;

    const center = this.#getCenter(w, h);
    this.outlineContext.canvas.style.marginLeft = center.x;
    this.outlineContext.canvas.style.marginTop = center.y;

    this.topContext.canvas.style.marginLeft = center.x;
    this.topContext.canvas.style.marginTop = center.y;

    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        const cellVal = this.matrix[row][col];
        let color = '#111';

        let playerAvatar = new Image();
        playerAvatar.src = '/images/character-down.png';

        switch (cellVal) {
          case 1: //outer walls
            color = '#4488FF';
            break;
          case 2: //player
            color = this.player.sprite;
            break;
          case 3: //herb
            color = 'green';
            break;
          case 9: //finish line
            color = 'red';
            break;
        }

        this.outlineContext.fillStyle = color;
        this.outlineContext.fillRect(
          col * (this.cellSize + this.padding),
          row * (this.cellSize + this.padding),
          this.cellSize,
          this.cellSize
        );
      }
    }
  }

  // health update
  loop() {
    window.requestAnimationFrame(() => {
      this.draw();
      this.loop();
    });
  }

  drawHealth() {
    this.uiContext.font = '20px monospace';
    this.uiContext.fillStyle = 'white';
    this.uiContext.fillText(`Health: ${this.health}`, 20, 30);
  }

  draw() {
    this.uiContext.clearRect(0, 0, 420, 580);
    this.drawHealth();
  }
}

//level example for testing
const levelZero = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 3, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 9, 1, 1]
];

let levelZeroPositionX = 1;
let levelZeroPositionY = 1;

const levelZeroTwo = [
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 3, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 9, 1, 1]
];

let level = new GridSystem(levelZero, levelZeroPositionX, levelZeroPositionY);
level.render();
level.loop();
