const matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],

];


createPacman();

let currentNum = 0;
let score = 0;
let totalStars = 0;
let sumStars = 0;
let type = "m";
let ghostType = "g";
let gameDone = 2;
let userLost = 0;
let inteveraiD = "null";
let stopDiamondInt ="null";

createGhost("ghost");
createGhost("ghost1");
createGhost("ghost2");
createGhost("ghost3");


//Check if the user is lose
const userLoseInteveral = setInterval(() => {
  userLost = userLose(inteveraiD, userLost, userLoseInteveral, sumStars, stopDiamondInt);
}, 1);

totalStars = totalStar();


// User press keyboard
document.body.addEventListener("keydown", function (event) {

  if (event.key === " " && gameDone === 2) {
    userLost = 0;
    gameDone = 0;
    inteveraiD = moveingGhost();
    stopDiamondInt = diamond();
    document.getElementById("title").innerHTML = "Your Score is : " + sumStars;
  } else if (event.key === "ArrowRight" && userLost === 0 && gameDone === 0) {
    type = "man";
    currentNum = whichNum(type);
    goRight(currentNum, type);
    currentNum = whichNum(type);
    sumStars = sumStars + removeStar(currentNum);
    sumStars = sumStars + removeDiamond(currentNum);
    document.getElementById("title").innerHTML = "Your Score is : " + sumStars;
    gameDone = lastStar(type, inteveraiD, userLoseInteveral, sumStars, stopDiamondInt);
  } else if (event.key === "ArrowLeft" && userLost === 0 && gameDone === 0) {
    type = "man";
    currentNum = whichNum(type);
    goLeft(currentNum, type);
    currentNum = whichNum(type);
    sumStars = sumStars + removeStar(currentNum);
    sumStars = sumStars + removeDiamond(currentNum);
    document.getElementById("title").innerHTML = "Your Score is : " + sumStars;
    gameDone = lastStar(type, inteveraiD, userLoseInteveral, sumStars, stopDiamondInt);
  } else if (event.key === "ArrowDown" && userLost === 0 && gameDone === 0) {
    type = "man";
    currentNum = whichNum(type);
    goDown(currentNum, type);
    currentNum = whichNum(type);
    sumStars = sumStars + removeStar(currentNum);
    sumStars = sumStars + removeDiamond(currentNum);
    document.getElementById("title").innerHTML = "Your Score is : " + sumStars;
    gameDone = lastStar(type, inteveraiD, userLoseInteveral, sumStars. stopDiamondInt);
  } else if (event.key === "ArrowUp" && userLost === 0 && gameDone === 0) {
    type = "man";
    currentNum = whichNum(type);
    goUp(currentNum, type);
    currentNum = whichNum(type);
    sumStars = sumStars + removeStar(currentNum);
    sumStars = sumStars + removeDiamond(currentNum);
    document.getElementById("title").innerHTML = "Your Score is : " + sumStars;
    gameDone = lastStar(type, inteveraiD, userLoseInteveral, sumStars, stopDiamondInt);
  } else if (event.key === "Enter" && userLost === 1 || event.key === "Enter" && gameDone === 1) {
    returnStar("ghost");
    returnStar("ghost1");
    returnStar("ghost2");
    returnStar("ghost3");
    createGhost("ghost");
    createGhost("ghost1");
    createGhost("ghost2");
    createGhost("ghost3");
    createPacman();
    userLost = 0;
    gameDone = 0;
    sumStars = 0;
    document.getElementById("title").innerHTML = "Your Score is : " + sumStars;
    let inteveraiD = moveingGhost();
    let stopDiamondInt = diamond();
    const userLoseInteveral1 = setInterval(() => {
      userLost = userLose(inteveraiD, userLost, userLoseInteveral1, sumStars, stopDiamondInt);
    }, 10);
    document.getElementById("subtitle").innerHTML = "";

  }

});


// User press arrow down
function goDown(num, type) {
  for (let i = 0; i < matrix.length; i++) {

    if (i === 0) {
      for (let b = 0; b < matrix[0].length; b++) {
        if (num === matrix[0][b]) {
          let change = document.getElementById("square" + matrix[0][b]);
          let change1 = document.getElementById("square" + matrix[1][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 1) {
      for (let b = 0; b < matrix[1].length; b++) {
        if (num === matrix[1][b]) {
          let change = document.getElementById("square" + matrix[1][b]);
          let change1 = document.getElementById("square" + matrix[2][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 2) {
      for (let b = 0; b < matrix[2].length; b++) {
        if (num === matrix[2][b]) {
          let change = document.getElementById("square" + matrix[2][b]);
          let change1 = document.getElementById("square" + matrix[3][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 3) {
      for (let b = 0; b < matrix[3].length; b++) {
        if (num === matrix[3][b]) {
          let change = document.getElementById("square" + matrix[3][b]);
          let change1 = document.getElementById("square" + matrix[4][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 4) {
      for (let b = 0; b < matrix[4].length; b++) {
        if (num === matrix[4][b]) {
          let change = document.getElementById("square" + matrix[4][b]);
          let change1 = document.getElementById("square" + matrix[5][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 5) {
      for (let b = 0; b < matrix[5].length; b++) {
        if (num === matrix[5][b]) {
          let change = document.getElementById("square" + matrix[5][b]);
          let change1 = document.getElementById("square" + matrix[6][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 6) {
      for (let b = 0; b < matrix[6].length; b++) {
        if (num === matrix[6][b]) {
          let change = document.getElementById("square" + matrix[6][b]);
          let change1 = document.getElementById("square" + matrix[7][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 7) {
      for (let b = 0; b < matrix[7].length; b++) {
        if (num === matrix[7][b]) {
          let change = document.getElementById("square" + matrix[7][b]);
          let change1 = document.getElementById("square" + matrix[8][b]);
          if (change1.classList.contains("wall") === false) {
            change.classList.remove(type);
            change1.classList.add(type);
            b = matrix[0].length;
            i = matrix.length;
          }
        }
      }
    } else if (i === 8) {
      for (let b = 0; b < matrix[8].length; b++) {
        if (num === matrix[8][b]) {
          let change = document.getElementById("square" + matrix[8][b]);
          let change1 = document.getElementById("square" + matrix[9][b]);
          change.classList.remove(type);
          change1.classList.add(type);
          b = matrix[0].length;
          i = matrix.length;
        }
      }
    }
  }
}

// User press arrow up
function goUp(num, type) {
  for (let i = 0; i < matrix.length; i++) {

    if (i === 0) {
      for (let c = 0; c < matrix[1].length; c++) {
        if (num === matrix[1][c]) {
          let change = document.getElementById("square" + matrix[1][c]);
          let change1 = document.getElementById("square" + matrix[0][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 1) {
      for (let c = 0; c < matrix[2].length; c++) {
        if (num === matrix[2][c]) {
          let change = document.getElementById("square" + matrix[2][c]);
          let change1 = document.getElementById("square" + matrix[1][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 2) {
      for (let c = 0; c < matrix[3].length; c++) {
        if (num === matrix[3][c]) {
          let change = document.getElementById("square" + matrix[3][c]);
          let change1 = document.getElementById("square" + matrix[2][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 3) {
      for (let c = 0; c < matrix[4].length; c++) {
        if (num === matrix[4][c]) {
          let change = document.getElementById("square" + matrix[4][c]);
          let change1 = document.getElementById("square" + matrix[3][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 4) {
      for (let c = 0; c < matrix[5].length; c++) {
        if (num === matrix[5][c]) {
          let change = document.getElementById("square" + matrix[5][c]);
          let change1 = document.getElementById("square" + matrix[4][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 5) {
      for (let c = 0; c < matrix[6].length; c++) {
        if (num === matrix[6][c]) {
          let change = document.getElementById("square" + matrix[6][c]);
          let change1 = document.getElementById("square" + matrix[5][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 6) {
      for (let c = 0; c < matrix[7].length; c++) {
        if (num === matrix[7][c]) {
          let change = document.getElementById("square" + matrix[7][c]);
          let change1 = document.getElementById("square" + matrix[6][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 7) {
      for (let c = 0; c < matrix[8].length; c++) {
        if (num === matrix[8][c]) {
          let change = document.getElementById("square" + matrix[8][c]);
          let change1 = document.getElementById("square" + matrix[7][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 8) {
      for (let c = 0; c < matrix[9].length; c++) {
        if (num === matrix[9][c]) {
          let change = document.getElementById("square" + matrix[9][c]);
          let change1 = document.getElementById("square" + matrix[8][c]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          a = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    }
  }
}

// User press arrow right 
function goRight(num, type) {
  for (let i = 0; i < matrix.length; i++) {

    if (i === 0) {
      for (let c = 0; c < matrix[0].length; c++) {
        if (num === matrix[0][c] && c === matrix[0].length - 1) {
          i = matrix.length;
        } else if (num === matrix[0][c]) {
          let change = document.getElementById("square" + matrix[0][c]);
          let change1 = document.getElementById("square" + matrix[0][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        if (num === matrix[1][c] && c === matrix[1].length - 1) {
          i = matrix.length;
        } else if (num === matrix[1][c]) {
          let change = document.getElementById("square" + matrix[1][c]);
          let change1 = document.getElementById("square" + matrix[1][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        if (num === matrix[2][c] && c === matrix[2].length - 1) {
          i = matrix.length;
        } else if (num === matrix[2][c]) {
          let change = document.getElementById("square" + matrix[2][c]);
          let change1 = document.getElementById("square" + matrix[2][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        if (num === matrix[3][c] && c === matrix[3].length - 1) {
          i = matrix.length;
        } else if (num === matrix[3][c]) {
          let change = document.getElementById("square" + matrix[3][c]);
          let change1 = document.getElementById("square" + matrix[3][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        if (num === matrix[4][c] && c === matrix[4].length - 1) {
          i = matrix.length;
        } else if (num === matrix[4][c]) {
          let change = document.getElementById("square" + matrix[4][c]);
          let change1 = document.getElementById("square" + matrix[4][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        if (num === matrix[5][c] && c === matrix[5].length - 1) {
          i = matrix.length;
        } else if (num === matrix[5][c]) {
          let change = document.getElementById("square" + matrix[5][c]);
          let change1 = document.getElementById("square" + matrix[5][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        if (num === matrix[6][c] && c === matrix[6].length - 1) {
          i = matrix.length;
        } else if (num === matrix[6][c]) {
          let change = document.getElementById("square" + matrix[6][c]);
          let change1 = document.getElementById("square" + matrix[6][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        if (num === matrix[7][c] && c === matrix[7].length - 1) {
          i = matrix.length;
        } else if (num === matrix[7][c]) {
          let change = document.getElementById("square" + matrix[7][c]);
          let change1 = document.getElementById("square" + matrix[7][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        if (num === matrix[8][c] && c === matrix[8].length - 1) {
          i = matrix.length;
        } else if (num === matrix[8][c]) {
          let change = document.getElementById("square" + matrix[8][c]);
          let change1 = document.getElementById("square" + matrix[8][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        if (num === matrix[9][c] && c === matrix[9].length - 1) {
          i = matrix.length;
        } else if (num === matrix[9][c]) {
          let change = document.getElementById("square" + matrix[9][c]);
          let change1 = document.getElementById("square" + matrix[9][c + 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    }
  }
}

// User press arrow left
function goLeft(num, type) {
  for (let i = 0; i < matrix.length; i++) {

    if (i === 0) {
      for (let c = 0; c < matrix[0].length; c++) {
        if (num === matrix[0][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[0][c]) {
          let change = document.getElementById("square" + matrix[0][c]);
          let change1 = document.getElementById("square" + matrix[0][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        if (num === matrix[1][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[1][c]) {
          let change = document.getElementById("square" + matrix[1][c]);
          let change1 = document.getElementById("square" + matrix[1][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        if (num === matrix[2][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[2][c]) {
          let change = document.getElementById("square" + matrix[2][c]);
          let change1 = document.getElementById("square" + matrix[2][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        if (num === matrix[3][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[3][c]) {
          let change = document.getElementById("square" + matrix[3][c]);
          let change1 = document.getElementById("square" + matrix[3][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        if (num === matrix[4][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[4][c]) {
          let change = document.getElementById("square" + matrix[4][c]);
          let change1 = document.getElementById("square" + matrix[4][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        if (num === matrix[5][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[5][c]) {
          let change = document.getElementById("square" + matrix[5][c]);
          let change1 = document.getElementById("square" + matrix[5][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        if (num === matrix[6][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[6][c]) {
          let change = document.getElementById("square" + matrix[6][c]);
          let change1 = document.getElementById("square" + matrix[6][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        if (num === matrix[7][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[7][c]) {
          let change = document.getElementById("square" + matrix[7][c]);
          let change1 = document.getElementById("square" + matrix[7][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        if (num === matrix[8][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[8][c]) {
          let change = document.getElementById("square" + matrix[8][c]);
          let change1 = document.getElementById("square" + matrix[8][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    } else if (i === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        if (num === matrix[9][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[9][c]) {
          let change = document.getElementById("square" + matrix[9][c]);
          let change1 = document.getElementById("square" + matrix[9][c - 1]);
                    if(change1.classList.contains("wall") === false){
          change.classList.remove(type);
          change1.classList.add(type);
          c = matrix[0].length;
          i = matrix.length;
        }
      }
      }
    }
  }
}

// Which postion is the pacman
function whichNum(type) {
  let currentPos = 0;
  for (let f = 0; f < matrix.length; f++) {
    if (f === 0) {
      for (let c = 0; c < matrix[0].length; c++) {
        let first = document.getElementById("square" + matrix[0][c]);
        if (first.classList.contains(type)) {
          currentPos = matrix[0][c];
        }
      }
    } else if (f === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        let sec = document.getElementById("square" + matrix[1][c]);
        if (sec.classList.contains(type)) {
          currentPos = matrix[1][c];
        }
      }
    } else if (f === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        let third = document.getElementById("square" + matrix[2][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[2][c];
        }
      }
    } else if (f === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        let third = document.getElementById("square" + matrix[3][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[3][c];
        }
      }
    } else if (f === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        let third = document.getElementById("square" + matrix[4][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[4][c];
        }
      }
    } else if (f === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        let third = document.getElementById("square" + matrix[5][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[5][c];
        }
      }
    } else if (f === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        let third = document.getElementById("square" + matrix[6][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[6][c];
        }
      }
    } else if (f === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        let third = document.getElementById("square" + matrix[7][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[7][c];
        }
      }
    } else if (f === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        let third = document.getElementById("square" + matrix[8][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[8][c];
        }
      }
    } else if (f === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        let third = document.getElementById("square" + matrix[9][c]);
        if (third.classList.contains(type)) {
          currentPos = matrix[9][c];
        }
      }
    }
  }
  return currentPos;
}

//How much stars display
function totalStar() {
  let stars = 0;
  for (let f = 0; f < matrix.length; f++) {
    if (f === 0) {
      for (let c = 0; c < matrix[0].length; c++) {
        let first = document.getElementById("square" + matrix[0][c]);
        if (first.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        let sec = document.getElementById("square" + matrix[1][c]);
        if (sec.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        let third = document.getElementById("square" + matrix[2][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        let third = document.getElementById("square" + matrix[3][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        let third = document.getElementById("square" + matrix[4][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        let third = document.getElementById("square" + matrix[5][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        let third = document.getElementById("square" + matrix[6][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        let third = document.getElementById("square" + matrix[7][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        let third = document.getElementById("square" + matrix[8][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    } else if (f === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        let third = document.getElementById("square" + matrix[9][c]);
        if (third.classList.contains("star")) {
          stars++;
        }
      }
    }
  }
  return stars;
}


function returnStar(type) {
  for (let f = 0; f < matrix.length; f++) {
    if (f === 0) {
      for (let c = 1; c < matrix[0].length; c++) {
        let first = document.getElementById("square" + matrix[0][c]);
        first.classList.add("star");
        if (first.classList.contains("man")) {
          if (first.classList.contains(type)) {
            first.classList.remove("man");
            first.classList.remove(type);
          } else {
            first.classList.remove("man");
          }
        } else if (first.classList.contains(type)) {
          first.classList.remove(type);
        }
      }
    } else if (f === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        let sec = document.getElementById("square" + matrix[1][c]);
        sec.classList.add("star");
        if (sec.classList.contains("man")) {
          if (sec.classList.contains(type)) {
            sec.classList.remove("man");
            sec.classList.remove(type);
          } else {
            sec.classList.remove("man");
          }
        } else if (sec.classList.contains(type)) {
          sec.classList.remove(type);
        }
      }
    } else if (f === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        let third = document.getElementById("square" + matrix[2][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        let third = document.getElementById("square" + matrix[3][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        let third = document.getElementById("square" + matrix[4][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        let third = document.getElementById("square" + matrix[5][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        let third = document.getElementById("square" + matrix[6][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        let third = document.getElementById("square" + matrix[7][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        let third = document.getElementById("square" + matrix[8][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    } else if (f === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        let third = document.getElementById("square" + matrix[9][c]);
        third.classList.add("star");
        if (third.classList.contains("man")) {
          if (third.classList.contains(type)) {
            third.classList.remove("man");
            third.classList.remove(type);
          } else {
            third.classList.remove("man");
          }
        } else if (third.classList.contains(type)) {
          third.classList.remove(type);
        }
      }
    }
  }
}


// User collected stars
function removeStar(num) {

  let removeStar = 0;

  for (let i = 0; i < matrix.length; i++) {

    if (i === 0) {
      for (let c = 0; c < matrix[0].length; c++) {
        if (num === matrix[0][c]) {
          let change = document.getElementById("square" + matrix[0][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        if (num === matrix[1][c]) {
          let change = document.getElementById("square" + matrix[1][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        if (num === matrix[2][c]) {
          let change = document.getElementById("square" + matrix[2][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        if (num === matrix[3][c]) {
          let change = document.getElementById("square" + matrix[3][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        if (num === matrix[4][c]) {
          let change = document.getElementById("square" + matrix[4][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        if (num === matrix[5][c]) {
          let change = document.getElementById("square" + matrix[5][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        if (num === matrix[6][c]) {
          let change = document.getElementById("square" + matrix[6][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        if (num === matrix[7][c]) {
          let change = document.getElementById("square" + matrix[7][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        if (num === matrix[8][c]) {
          let change = document.getElementById("square" + matrix[8][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          }
        }
      }
    } else if (i === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        if (num === matrix[9][c]) {
          let change = document.getElementById("square" + matrix[9][c]);
          if (change.classList.contains("star")) {
            change.classList.remove("star");
            return 1;
          } else {
            return 0;
          }
        }
      }
    }
  }
  return removeStar;
}


//Remove the last star and finish the game
function lastStar(type, inteveraiD, userLoseInteveral, sumStars, diamondId) {
  let done = 0;
  let isEmpty = totalStar();
  let whatPos = whichNum(type);
  if (isEmpty === 1) {
    removeStar(whatPos);
    done = finishGame(inteveraiD, userLoseInteveral, sumStars, diamondId);
    return done;
  } else {
    return done;
  }
}

//finish the game
function finishGame(inteveraiD, userLoseInteveral, diamondId) {
  let isEmpty = totalStar();
  if (isEmpty === 0) {
    setTimeout(function () {
      document.getElementById("title").innerHTML = "You Win! to try again press ENTER";
      document.getElementById("title").style.paddingTop = "40px"
      document.getElementById("subtitle").innerHTML = "Final score :" + (sumStars + 1);
    }, 100);
    clearInterval(userLoseInteveral);
    stopGhostMove(inteveraiD);
    stopDiamond(diamondId);
    return 1;
  } else {
    return 0;
  }

}


//Moving ghost
function ghostMoving(randomNum, type) {
  let ghostPosition = whichNum(type);

  if (type === "ghost") {
    if (randomNum === 1) {
      goUp(ghostPosition, type);
    } else if (randomNum === 2) {
      goLeft(ghostPosition, type);
    } else if (randomNum === 3) {
      goRight(ghostPosition, type);
    } else {
      goDown(ghostPosition, type);
    }
  } else if (type === "ghost1") {
    if (randomNum === 2) {
      goUp(ghostPosition, type);
    } else if (randomNum === 3) {
      goLeft(ghostPosition, type);
    } else if (randomNum === 4) {
      goRight(ghostPosition, type);
    } else {
      goDown(ghostPosition, type);
    }
  } else if (type === "ghost2") {
    if (randomNum === 3) {
      goUp(ghostPosition, type);
    } else if (randomNum === 4) {
      goLeft(ghostPosition, type);
    } else if (randomNum === 1) {
      goRight(ghostPosition, type);
    } else {
      goDown(ghostPosition, type);
    }
  } else if (type === "ghost3") {
    if (randomNum === 4) {
      goUp(ghostPosition, type);
    } else if (randomNum === 1) {
      goLeft(ghostPosition, type);
    } else if (randomNum === 2) {
      goRight(ghostPosition, type);
    } else {
      goDown(ghostPosition, type);
    }
  }
}



//Stop the ghost
function stopGhostMove(intervaID) {
  clearInterval(intervaID);
}

//Stop all when user lose
function userLose(intId, userLos, userLoseInteveral, sumStars, diamondId) {
  let pacmanPos = whichNum("man");
  let ghost = whichNum("ghost");
  let ghost1 = whichNum("ghost1");
  let ghost2 = whichNum("ghost2");
  let ghost3 = whichNum("ghost3");

  if (pacmanPos === ghost) {
    if (userLos === 0) {
      clearInterval(userLoseInteveral);
      stopGhostMove(intId);
      stopDiamond(diamondId);
      setTimeout(() => {
        document.getElementById("title").innerHTML = "You Lost! to try again press ENTER";
        document.getElementById("title").style.paddingTop = "40px"
        document.getElementById("subtitle").innerHTML = "Final score :" + sumStars;
      }, 100);
      return 1;
    }
  } else if (pacmanPos === ghost1) {
    if (userLos === 0) {
      clearInterval(userLoseInteveral);
      stopGhostMove(intId);
      stopDiamond(diamondId);
      setTimeout(() => {
        document.getElementById("title").innerHTML = "You Lost! to try again press ENTER";
        document.getElementById("title").style.paddingTop = "40px"
        document.getElementById("subtitle").innerHTML = "Final score :" + sumStars;
      }, 100);
      return 1;
    }
  } else if (pacmanPos === ghost2) {
    if (userLos === 0) {
      clearInterval(userLoseInteveral);
      stopGhostMove(intId);
      stopDiamond(diamondId);
      setTimeout(() => {
        document.getElementById("title").innerHTML = "You Lost! to try again press ENTER";
        document.getElementById("title").style.paddingTop = "40px"
        document.getElementById("subtitle").innerHTML = "Final score :" + sumStars;
      }, 100);
      return 1;
    }
  } else if (pacmanPos === ghost3) {
    if (userLos === 0) {
      clearInterval(userLoseInteveral);
      stopGhostMove(intId);
      stopDiamond(diamondId);
      setTimeout(() => {
        document.getElementById("title").innerHTML = "You Lost! to try again press ENTER";
        document.getElementById("title").style.paddingTop = "40px"
        document.getElementById("subtitle").innerHTML = "Final score :" + sumStars;
      }, 100);
      return 1;
    }
  } else {
    return 0;
  }
}



//First postion of pacman
function createPacman() {
  let randomNumber = Math.floor(((Math.random() * 100) + 1));
  const man = document.getElementById("square" + randomNumber);
  man.classList.add("man");
}


//Ghost move automate
function moveingGhost() {
  const ghostInteveral = setInterval(function () {
    let ghostType = "ghost";
    let ghostType1 = "ghost1";
    let ghostType2 = "ghost2";
    let ghostType3 = "ghost3";

    let movingGhost = Math.floor(((Math.random() * 4) + 1));
    ghostMoving(movingGhost, ghostType);

    setTimeout(() => {
      ghostMoving(movingGhost, ghostType1);
    }, 50);
    setTimeout(() => {
      ghostMoving(movingGhost, ghostType2);
    }, 100);
    setTimeout(() => {
      ghostMoving(movingGhost, ghostType3);
    }, 150);

  }, 500);
  return ghostInteveral;
}


//ghost created
function createGhost(type) {
  let randomNumber = Math.floor(((Math.random() * 100) + 1));
  let firstGhost = document.getElementById("square" + randomNumber);
  firstGhost.classList.add(type);
}


//create diamond
function diamond() {
  const diamondInterval = setInterval(() => {
    let num1 = Math.floor(((Math.random() * 100) + 1));
    let diamond1 = document.getElementById("square" + num1);

    diamond1.classList.add("diamond");
    setTimeout(() => {
      diamond1.classList.remove("diamond");
    }, 5000);

  }, 3000);
  return diamondInterval;
}

function stopDiamond(intervaID) {
  clearInterval(intervaID);
}
// User collected diamonds
function removeDiamond(num) {

  let removeDiamond = 0;

  for (let i = 0; i < matrix.length; i++) {

    if (i === 0) {
      for (let c = 0; c < matrix[0].length; c++) {
        if (num === matrix[0][c]) {
          let change = document.getElementById("square" + matrix[0][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 1) {
      for (let c = 0; c < matrix[1].length; c++) {
        if (num === matrix[1][c]) {
          let change = document.getElementById("square" + matrix[1][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 2) {
      for (let c = 0; c < matrix[2].length; c++) {
        if (num === matrix[2][c]) {
          let change = document.getElementById("square" + matrix[2][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 3) {
      for (let c = 0; c < matrix[3].length; c++) {
        if (num === matrix[3][c]) {
          let change = document.getElementById("square" + matrix[3][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 4) {
      for (let c = 0; c < matrix[4].length; c++) {
        if (num === matrix[4][c]) {
          let change = document.getElementById("square" + matrix[4][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 5) {
      for (let c = 0; c < matrix[5].length; c++) {
        if (num === matrix[5][c]) {
          let change = document.getElementById("square" + matrix[5][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 6) {
      for (let c = 0; c < matrix[6].length; c++) {
        if (num === matrix[6][c]) {
          let change = document.getElementById("square" + matrix[6][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 7) {
      for (let c = 0; c < matrix[7].length; c++) {
        if (num === matrix[7][c]) {
          let change = document.getElementById("square" + matrix[7][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 8) {
      for (let c = 0; c < matrix[8].length; c++) {
        if (num === matrix[8][c]) {
          let change = document.getElementById("square" + matrix[8][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          }
        }
      }
    } else if (i === 9) {
      for (let c = 0; c < matrix[9].length; c++) {
        if (num === matrix[9][c]) {
          let change = document.getElementById("square" + matrix[9][c]);
          if (change.classList.contains("diamond")) {
            change.classList.remove("diamond");
            return 10;
          } else {
            return 0;
          }
        }
      }
    }
  }
  return removeDiamond;
}