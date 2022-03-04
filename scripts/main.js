/*
 w = end screen 
 y = starting screen
 x = level exit
 z = ui
 v = tutorial

 a = walking path 1
 b = walking path 2
 c = walking path 3
 d = trees 1
 e = trees 2
 f = bush
 g = water 1
 h = water 2
 i = herb 1
 j = herb 2
 k = enemy 1
 l = enemy 2
 m = enemy 3 ----
 n = path decoration 1
 o = path decoration 2
 p = path decoration 3
 r = walls 
 s = walls window
 t = walls door


*/

let levelZero = [
  ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
  ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
  ['e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'a', 'b', 'a', 'x', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'e', 'd', 'e', 'e', 'e'],
  ['d', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'e', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'f', 'd', 'd', 'e', 'e', 'd', 'd', 'd']
];

let levelOne = [
  ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
  ['d', 'e', 'd', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'a', 'b', 'a', 'd', 'd', 'd', 'd', 'd', 'a', 'a', 'd'],
  ['d', 'd', 'c', 'i', 'd', 'e', 'a', 'a', 'b', 'a', 'f', 'd'],
  ['d', 'd', 'e', 'a', 'c', 'j', 'a', 'b', 'c', 'a', 'x', 'd'],
  ['d', 'e', 'd', 'd', 'd', 'd', 'd', 'e', 'd', 'd', 'd', 'd']
];

let levelTwo = [
  ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
  ['d', 'd', 'e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'e', 'e', 'd'],
  ['d', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'e', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'e', 'f', 'd', 'd', 'd', 'e', 'e', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'b', 'j', 'a', 'b', 'a', 'd', 'd', 'd'],
  ['d', 'a', 'c', 'i', 'a', 'd', 'a', 'a', 'd', 'd', 'd', 'd'],
  ['e', 'd', 'd', 'd', 'i', 'a', 'a', 'a', 'x', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd']
];

let levelThree = [
  ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
  ['d', 'd', 'e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'e', 'e', 'd'],
  ['d', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'e', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'e', 'f', 'd', 'd', 'd', 'e', 'e', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'b', 'j', 'a', 'b', 'a', 'd', 'd', 'd'],
  ['d', 'a', 'c', 'i', 'a', 'd', 'a', 'a', 'd', 'd', 'd', 'd'],
  ['e', 'd', 'd', 'd', 'i', 'a', 'a', 'a', 'x', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd']
];

let levelFour = [
  ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
  ['d', 'd', 'e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'e', 'e', 'd'],
  ['d', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'e', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'e', 'f', 'd', 'd', 'd', 'e', 'e', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'b', 'j', 'a', 'b', 'a', 'd', 'd', 'd'],
  ['d', 'a', 'c', 'i', 'a', 'd', 'a', 'a', 'd', 'd', 'd', 'd'],
  ['e', 'd', 'd', 'd', 'i', 'a', 'a', 'a', 'x', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
  ['d', 'd', 'd', 'd', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd']
];

function ifLostLevel(level, gameOver, checkLvl) {
  let levelZeroStarter = [
    ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'a', 'b', 'a', 'x', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'e', 'd', 'e', 'e', 'e'],
    ['d', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'e', 'd', 'd', 'd'],
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y']
  ];
  let levelOneStarter = [
    ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
    ['d', 'e', 'd', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'a', 'b', 'a', 'd', 'd', 'd', 'd', 'd', 'a', 'a', 'd'],
    ['d', 'd', 'c', 'i', 'd', 'e', 'a', 'a', 'b', 'a', 'f', 'd'],
    ['d', 'd', 'e', 'a', 'c', 'j', 'a', 'b', 'c', 'a', 'x', 'd'],
    ['d', 'e', 'd', 'd', 'd', 'd', 'd', 'e', 'd', 'd', 'd', 'd']
  ];
  let levelTwoStarter = [
    ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
    ['d', 'd', 'e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'e', 'e', 'd'],
    ['d', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'e', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'e', 'f', 'd', 'd', 'd', 'e', 'e', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'b', 'j', 'a', 'b', 'a', 'd', 'd', 'd'],
    ['d', 'a', 'c', 'i', 'a', 'd', 'a', 'a', 'd', 'd', 'd', 'd'],
    ['e', 'd', 'd', 'd', 'i', 'a', 'a', 'a', 'x', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd']
  ];

  let levelThreeStarter = [
    ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
    ['d', 'd', 'e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'e', 'e', 'd'],
    ['d', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'e', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'e', 'f', 'd', 'd', 'd', 'e', 'e', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'b', 'j', 'a', 'b', 'a', 'd', 'd', 'd'],
    ['d', 'a', 'c', 'i', 'a', 'd', 'a', 'a', 'd', 'd', 'd', 'd'],
    ['e', 'd', 'd', 'd', 'i', 'a', 'a', 'a', 'x', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd']
  ];

  let levelFourStarter = [
    ['z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z', 'z'],
    ['d', 'd', 'e', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'e', 'e', 'd'],
    ['d', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'e', 'd', 'd', 'e', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'e', 'f', 'd', 'd', 'd', 'e', 'e', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'b', 'j', 'a', 'b', 'a', 'd', 'd', 'd'],
    ['d', 'a', 'c', 'i', 'a', 'd', 'a', 'a', 'd', 'd', 'd', 'd'],
    ['e', 'd', 'd', 'd', 'i', 'a', 'a', 'a', 'x', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'e', 'e', 'd', 'd', 'd', 'd', 'd', 'd'],
    ['d', 'd', 'd', 'd', 'd', 'f', 'd', 'd', 'd', 'd', 'd', 'd']
  ];
  if (gameOver) {
    switch (checkLvl) {
      case 0:
        levelZero = levelZeroStarter;
        break;
      case 1:
        levelOne = levelOneStarter;
        levels.splice(1, 1, levelOne);
        break;
      case 2:
        levelTwo = levelTwoStarter;
        levels.splice(2, 1, levelTwo);
        break;
      case 3:
        levelThree = levelThreeStarter;
        levels.splice(3, 1, levelThree);
        break;
      case 4:
        levelFour = levelFourStarter;
        levels.splice(4, 1, levelFour);
        break;
    }
  }
}

const canvas = document.querySelector('canvas');
const levels = [levelZero, levelOne, levelTwo, levelThree, levelFour];
const game = new Game(canvas, levels, levelZero, 1, 8);

game.start();
