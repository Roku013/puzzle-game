//level example for testing
const levelZero = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 2, 2, 1, 1, 1, 1],
  [1, 1, 0, 9, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1],
  [1, 2, 0, 1, 1, 1, 1, 1],
  [1, 0, 3, 2, 1, 1, 1, 1],
  [1, 0, 4, 0, 2, 2, 2, 1],
  [1, 0, 0, 5, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

const levelZeroCopy = [...levelZero];

let levelZeroPositionX = 6;
let levelZeroPositionY = 7;

const levelZeroTwo = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 4, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 9, 1, 1]
];

const levels = [levelZeroCopy, levelZeroTwo];

const canvas = document.querySelector('canvas');

const game = new Game(
  canvas,
  levels,
  levelZero,
  levelZeroPositionX,
  levelZeroPositionY
);

game.start();
