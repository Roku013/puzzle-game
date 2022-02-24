//level example for testing
const levelZero = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 9, 0, 0, 1],
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

const levels = [levelZero, levelZeroTwo];

const canvas = document.querySelector('canvas');

const game = new Game(
  canvas,
  levels,
  levelZero,
  levelZeroPositionX,
  levelZeroPositionY
);

game.start();
