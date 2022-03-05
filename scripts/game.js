// images

const grass = new Image(); //grass a
grass.src = '/images/tileA.png';

const grassTwo = new Image(); //grass 2
grassTwo.src = '/images/tileB.png';

const grassThree = new Image(); //grass 3
grassThree.src = '/images/tileC.png';

const tree = new Image(); //tree
tree.src = '/images/tileD.png';

const treeTwo = new Image(); //tree 2
treeTwo.src = '/images/tileE.png';

const bush = new Image(); // bush
bush.src = '/images/tileF.png';

const herb = new Image(); //  herb
herb.src = '/images/tileI.png';

const herbTwo = new Image(); // herb two
herbTwo.src = '/images/tileJ.png';

const enemy = new Image(); // enemy
enemy.src = '/images/tileK.png';

const enemyTwo = new Image(); // enemy two
enemyTwo.src = '/images/tileL.png';

const mainBoss = new Image(); // bush
mainBoss.src = '/images/mainboss.png';

const walls = new Image(); // walls
walls.src = '/images/tileS.png';

const wallsTwo = new Image(); // walls window
wallsTwo.src = '/images/tileR.png';

const wallsThree = new Image(); // walls door
wallsThree.src = '/images/tileT.png';

const exit = new Image();
exit.src = '/images/tileX.png';

const ui = new Image();
ui.src = '/images/tileZ.png';

const startScreen = new Image();
startScreen.src = '/images/cursedlands_logo.png';

const tutorial = new Image(); // tutorial
tutorial.src = '/images/tutorial.png';

const enemiesTutorial = new Image(); // enemies tutorial
enemiesTutorial.src = '/images/enemiestutorial.png';

const endScreen = new Image(); // bush
endScreen.src = '/images/endscreen.png';

// audio
const plantHeal = new Audio('/sounds/heal.mp3');
const win = new Audio('/sounds/win.mp3');
const lose = new Audio('/sounds/lose.mp3');
const fight = new Audio('/sounds/enemy.mp3');

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
    this.reset();
    this.loop();
  }

  lose() {
    this.lost = true;
    lose.load();
    lose.play();
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
    return (
      cellVal === 'a' ||
      cellVal === 'b' ||
      cellVal === 'c' ||
      cellVal === 'i' ||
      cellVal === 'j' ||
      cellVal === 'k' ||
      cellVal === 'l' ||
      cellVal === 'x'
    );
  }

  //check if the player moves into a healing herb
  smallHerb(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 'i';
  }

  bigHerb(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 'j';
  }

  smallEnemy(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 'l';
  }

  bigEnemy(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 'k';
  }

  isWin(x, y) {
    const cellVal = this.matrix[this.player.y + y][this.player.x + x];
    return cellVal === 'x';
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
        this.player.direction = 'left';
        xMovement = -1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.player.direction = 'right';
        xMovement = 1;
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.player.direction = 'up';
        yMovement = -1;
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.player.direction = 'down';
        yMovement = 1;
        break;
    }

    const isValid = this.isValidMove(xMovement, yMovement);
    const isWin = this.isWin(xMovement, yMovement);
    const isSmallPlant = this.smallHerb(xMovement, yMovement);
    const isBigPlant = this.bigHerb(xMovement, yMovement);
    const isSmallEnemy = this.smallEnemy(xMovement, yMovement);
    const isBigEnemy = this.bigEnemy(xMovement, yMovement);

    if (isWin) {
      win.load();
      win.play();
      this.win();
    } else if (isValid) {
      this.player.y += yMovement;
      this.player.x += xMovement;
      if (isSmallPlant) {
        plantHeal.load();
        plantHeal.play();
        this.health = 3;
        this.updateMatrix(this.player.x, this.player.y, 'a');
      } else if (isBigPlant) {
        plantHeal.load();
        plantHeal.play();
        this.health = 5;
        this.updateMatrix(this.player.x, this.player.y, 'a');
      } else if (isSmallEnemy) {
        fight.load();
        fight.play();
        this.health -= 2;
        this.updateMatrix(this.player.x, this.player.y, 'a');
      } else if (isBigEnemy) {
        fight.load();
        fight.play();
        this.health -= 4;
        this.updateMatrix(this.player.x, this.player.y, 'a');
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
          case 'a': // grass
            let tileA = this.context.createPattern(grass, 'repeat');
            this.context.fillStyle = tileA;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'b': // grass 2
            let tileB = this.context.createPattern(grassTwo, 'repeat');
            this.context.fillStyle = tileB;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'c': // grass 3
            let tileC = this.context.createPattern(grassThree, 'repeat');
            this.context.fillStyle = tileC;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'd': // tree
            let tileD = this.context.createPattern(tree, 'repeat');
            this.context.fillStyle = tileD;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'e': // tree 2
            let tileE = this.context.createPattern(treeTwo, 'repeat');
            this.context.fillStyle = tileE;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'f': // bush
            let tileF = this.context.createPattern(bush, 'repeat');
            this.context.fillStyle = tileF;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'i': // herb
            let tileI = this.context.createPattern(herb, 'repeat');
            this.context.fillStyle = tileI;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'j': // herb two
            let tileJ = this.context.createPattern(herbTwo, 'repeat');
            this.context.fillStyle = tileJ;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'k': // enemy
            let tileK = this.context.createPattern(enemy, 'repeat');
            this.context.fillStyle = tileK;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'l': // enemy two
            let tileL = this.context.createPattern(enemyTwo, 'repeat');
            this.context.fillStyle = tileL;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'm': // main boss
            let tileM = this.context.createPattern(mainBoss, 'repeat');
            this.context.fillStyle = tileM;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'r': // walls window
            let tileR = this.context.createPattern(walls, 'repeat');
            this.context.fillStyle = tileR;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 's': // walls
            let tileS = this.context.createPattern(wallsTwo, 'repeat');
            this.context.fillStyle = tileS;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 't': // walls door
            let tileT = this.context.createPattern(wallsThree, 'repeat');
            this.context.fillStyle = tileT;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'w': // enemy tutorial
            let tileW = this.context.createPattern(enemiesTutorial, 'repeat');
            this.context.fillStyle = tileW;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'x': // level exit
            let tileX = this.context.createPattern(exit, 'repeat');
            this.context.fillStyle = tileX;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'y': // starting screen
            let tileY = this.context.createPattern(startScreen, 'repeat');
            this.context.fillStyle = tileY;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'v': // tutorial
            let tileV = this.context.createPattern(tutorial, 'repeat');
            this.context.fillStyle = tileV;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'u': // end screen
            let tileU = this.context.createPattern(endScreen, 'repeat');
            this.context.fillStyle = tileU;
            this.context.fillRect(
              col * (this.cellSize + this.padding),
              row * (this.cellSize + this.padding),
              this.cellSize,
              this.cellSize
            );
            break;

          case 'z': // UI
            let tileZ = this.context.createPattern(ui, 'repeat');
            this.context.fillStyle = tileZ;
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
    this.context.font = '35px luminari';
    this.context.fillStyle = '#c4a4a4';
    this.context.fillText(`Health: ${this.health}`, 200, 40);
    this.context.fillText(`Level: ${this.level}`, 450, 40);
  }

  draw() {
    this.context.clearRect(0, 0, 768, 768);
    this.drawBackground();
    this.player.draw();
    this.drawHealth();
  }
}
