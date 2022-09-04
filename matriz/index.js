const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const man = document.getElementById("square1");
man.classList.add("man");
let n = 1;
let currentNum = 0;

document.body.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "ArrowRight") {
    currentNum = whichNum();
    goRight(currentNum);
  } else if (event.key === "ArrowLeft") {
    currentNum = whichNum();
    goLeft(currentNum);
  } else if (event.key === "ArrowDown") {
    currentNum = whichNum();
    goDown(currentNum);
  } else if (event.key === "ArrowUp") {
    currentNum = whichNum();
    goUp(currentNum);
}
});

function goDown(num) {
  for (let i = 0; i < matrix.length; i++) {
    for (let a = 0; a < matrix[0].length; a++) {
      if (num === matrix[0][a]) {
        let change = document.getElementById("square" + matrix[0][a]);
        let change1 = document.getElementById("square" + matrix[1][a]);
        change.classList.remove("man");
        change1.classList.add("man");
        a = matrix[0].length;
        i = matrix.length;
      }
    }
    for (let b = 0; b < matrix[1].length; b++) {
      if (num === matrix[1][b]) {
        let change = document.getElementById("square" + matrix[1][b]);
        let change1 = document.getElementById("square" + matrix[2][b]);
        change.classList.remove("man");
        change1.classList.add("man");
        b = matrix[0].length;
        i = matrix.length;
      }
    }
  }
}

function goUp(num) {
    for (let i = 0; i < matrix.length; i++) {
        for (let b = 0; b < matrix[1].length; b++) {
            if (num === matrix[1][b]) {
                let change = document.getElementById("square" + matrix[1][b]);
                let change1 = document.getElementById("square" + matrix[0][b]);
                change.classList.remove("man");
                change1.classList.add("man");
                b = matrix[0].length;
                i = matrix.length;
            }
        }
        for (let c = 0; c < matrix[2].length; c++) {
          if (num === matrix[2][c]) {
            let change = document.getElementById("square" + matrix[2][c]);
            let change1 = document.getElementById("square" + matrix[1][c]);
            change.classList.remove("man");
            change1.classList.add("man");
            a = matrix[0].length;
            i = matrix.length;
          }
        }
    }
  }
  
function goRight(num) {
  for (let i = 0; i < matrix.length; i++) {
    for (let a = 0; a < matrix[0].length; a++) {
      if (num === matrix[0][a] && a === matrix[0].length - 1) {
        i = matrix.length;
      } else if (num === matrix[0][a]) {
        let change = document.getElementById("square" + matrix[0][a]);
        let change1 = document.getElementById("square" + matrix[0][a + 1]);
        change.classList.remove("man");
        change1.classList.add("man");
        a = matrix[0].length;
        i = matrix.length;
      }
    }
    for (let b = 0; b < matrix[1].length; b++) {
      if (num === matrix[1][b] && b === matrix[1].length - 1) {
        i = matrix.length;
      } else if (num === matrix[1][b]) {
        let change = document.getElementById("square" + matrix[1][b]);
        let change1 = document.getElementById("square" + matrix[1][b + 1]);
        change.classList.remove("man");
        change1.classList.add("man");
        b = matrix[0].length;
        i = matrix.length;
      }
    }

    for (let c = 0; c < matrix[2].length; c++) {
      if (num === matrix[2][c] && c === matrix[2].length - 1) {
        i = matrix.length;
      } else if (num === matrix[2][c]) {
        let change = document.getElementById("square" + matrix[2][c]);
        let change1 = document.getElementById("square" + matrix[2][c + 1]);
        change.classList.remove("man");
        change1.classList.add("man");
        c = matrix[0].length;
        i = matrix.length;
      }
    }
  }
}

function goLeft(num) {
    for (let i = 0; i < matrix.length; i++) {
      for (let a = 0; a < matrix[0].length; a++) {
        if (num === matrix[0][a] && a === 0) {
          i = matrix.length;
        } else if (num === matrix[0][a]) {
          let change = document.getElementById("square" + matrix[0][a]);
          let change1 = document.getElementById("square" + matrix[0][a - 1]);
          change.classList.remove("man");
          change1.classList.add("man");
          a = matrix[0].length;
          i = matrix.length;
        }
      }
      for (let b = 0; b < matrix[1].length; b++) {
        if (num === matrix[1][b] && b === 0) {
          i = matrix.length;
        } else if (num === matrix[1][b]) {
          let change = document.getElementById("square" + matrix[1][b]);
          let change1 = document.getElementById("square" + matrix[1][b - 1]);
          change.classList.remove("man");
          change1.classList.add("man");
          b = matrix[0].length;
          i = matrix.length;
        }
      }
  
      for (let c = 0; c < matrix[2].length; c++) {
        if (num === matrix[2][c] && c === 0) {
          i = matrix.length;
        } else if (num === matrix[2][c]) {
          let change = document.getElementById("square" + matrix[2][c]);
          let change1 = document.getElementById("square" + matrix[2][c - 1]);
          change.classList.remove("man");
          change1.classList.add("man");
          c = matrix[0].length;
          i = matrix.length;
        }
      }
    }
  }


function whichNum() {
  let currentPos = 0;
  console.log("hello");
  for (let f = 0; f < matrix.length; f++) {
    for (let a = 0; a < matrix[0].length; a++) {
      let first = document.getElementById("square" + matrix[0][a]);
      if (first.classList.contains("man")) {
        currentPos = matrix[0][a];
      }
    }
    for (let b = 0; b < matrix[1].length; b++) {
      let sec = document.getElementById("square" + matrix[1][b]);
      if (sec.classList.contains("man")) {
        currentPos = matrix[1][b];
      }
    }
    for (let c = 0; c < matrix[2].length; c++) {
      let third = document.getElementById("square" + matrix[2][c]);
      if (third.classList.contains("man")) {
        currentPos = matrix[2][c];
      }
    }
  }
  return currentPos;
}
