var clues, sudoku, randomindex, sudokuCopy, random;

window.onload = function() {
  console.log("New Game Called");
  newGame();
};

//This function is for generating a board and its elements
function generate() {
  clues = Math.floor(Math.random() * 47) + 17;
  sudoku = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  randomindex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
  solve(sudoku);
  sudokuCopy = Array.from(sudoku);
  random = shuffle(randomindex);
}
//This function shuffles an array to simulate random number generation without repetition
function shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

// given a sudoku cell, returns the row
function returnRow(cell) {
  return Math.floor(cell / 9);
}
//This function generates a new game board with random new numbers
function newGame() {
  clearBoard();
  generate();
  console.log(sudoku);
  fillBoardwithClues();
}
//This function when called clears the board
function clearBoard() {
  for (var i = 1; i <= 81; i++) {
    console.log("cleared");
    document.getElementById('c' + i).style.backgroundColor = "white";
    document.getElementById('c' + i).value = " ";
  }
}
// given a sudoku cell, returns the column
function returnCol(cell) {
  return cell % 9;
}

// given a sudoku cell, returns the 3x3 block
function returnBlock(cell) {
  return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
}

// given a number, a row and a sudoku, returns true if the number can be placed in the row
function isPossibleRow(number, row, sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (sudoku[row * 9 + i] == number) {
      return false;
    }
  }
  return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number, col, sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (sudoku[col + 9 * i] == number) {
      return false;
    }
  }
  return true;
}

// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
function isPossibleBlock(number, block, sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block % 3)] == number) {
      return false;
    }
  }
  return true;
}

// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell, number, sudoku) {
  var row = returnRow(cell);
  var col = returnCol(cell);
  var block = returnBlock(cell);
  return isPossibleRow(number, row, sudoku) && isPossibleCol(number, col, sudoku) && isPossibleBlock(number, block, sudoku);
}

// given a row and a sudoku, returns true if it's a legal row
function isCorrectRow(row, sudoku) {
  var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  var rowTemp = new Array();
  for (var i = 0; i <= 8; i++) {
    rowTemp[i] = sudoku[row * 9 + i];
  }
  rowTemp.sort();
  return rowTemp.join() == rightSequence.join();
}

// given a column and a sudoku, returns true if it's a legal column
function isCorrectCol(col, sudoku) {
  var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  var colTemp = new Array();
  for (var i = 0; i <= 8; i++) {
    colTemp[i] = sudoku[col + i * 9];
  }
  colTemp.sort();
  return colTemp.join() == rightSequence.join();
}

// given a 3x3 block and a sudoku, returns true if it's a legal block
function isCorrectBlock(block, sudoku) {
  var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  var blockTemp = new Array();
  for (var i = 0; i <= 8; i++) {
    blockTemp[i] = sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block % 3)];
  }
  blockTemp.sort();
  return blockTemp.join() == rightSequence.join();
}

// given a sudoku, returns true if the sudoku is solved
function isSolvedSudoku(sudoku) {
  console.log("is");
  for (var i = 0; i <= 8; i++) {
    if (!isCorrectBlock(i, sudoku) || !isCorrectRow(i, sudoku) || !isCorrectCol(i, sudoku)) {
      return false;
    }
  }
  return true;
}

// given a cell and a sudoku, returns an array with all possible values we can write in the cell
function determinePossibleValues(cell, sudoku) {
  var possible = new Array();
  for (var i = 1; i <= 9; i++) {
    if (isPossibleNumber(cell, i, sudoku)) {
      possible.unshift(i);
    }
  }
  return possible;
}

// given an array of possible values assignable to a cell, returns a random value picked from the array
function determineRandomPossibleValue(possible, cell) {
  var randomPicked = Math.floor(Math.random() * possible[cell].length);
  return possible[cell][randomPicked];
}

// given a sudoku, returns a two dimension array with all possible values
function scanSudokuForUnique(sudoku) {
  var possible = new Array();
  for (var i = 0; i <= 80; i++) {
    if (sudoku[i] == 0) {
      possible[i] = new Array();
      possible[i] = determinePossibleValues(i, sudoku);
      if (possible[i].length == 0) {
        return false;
      }
    }
  }
  return possible;
}

// given an array and a number, removes the number from the array
function removeAttempt(attemptArray, number) {
  var newArray = new Array();
  for (var i = 0; i < attemptArray.length; i++) {
    if (attemptArray[i] != number) {
      newArray.unshift(attemptArray[i]);
    }
  }
  return newArray;
}

// given a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
function nextRandom(possible) {
  var max = 9;
  var minChoices = 0;
  for (var i = 0; i <= 80; i++) {
    if (possible[i] != undefined) {
      if ((possible[i].length <= max) && (possible[i].length > 0)) {
        max = possible[i].length;
        minChoices = i;
      }
    }
  }
  return minChoices;
}

// given a sudoku, solves it
function solve(sudoku) {
  console.log("called");
  var saved = new Array();
  var savedSudoku = new Array();
  var i = 0;
  var nextMove;
  var whatToTry;
  var attempt;
  while (!isSolvedSudoku(sudoku)) {
    i++;
    nextMove = scanSudokuForUnique(sudoku);
    if (nextMove == false) {
      nextMove = saved.pop();
      sudoku = savedSudoku.pop();
    }
    whatToTry = nextRandom(nextMove);
    attempt = determineRandomPossibleValue(nextMove, whatToTry);
    if (nextMove[whatToTry].length > 1) {
      nextMove[whatToTry] = removeAttempt(nextMove[whatToTry], attempt);
      saved.push(nextMove.slice());
      savedSudoku.push(sudoku.slice());
    }
    sudoku[whatToTry] = attempt;
  }

  // showSudoku(sudoku);

}

function fillBoard() {
  for (var i = 1; i <= 81; i++) {
    if (document.getElementById('c' + i).value == "") {
      console.log("called fillBoard");
      document.getElementById('c' + i).style.backgroundColor = "green";
      document.getElementById('c' + i).value = sudoku[i - 1];
    }
  }
}

function fillBoardwithClues() {
  console.log("called fill");
  for (var i = 0; i < clues; i++) {
    sudokuCopy[random[i]] = "";
  }
  for (var i = 1; i <= 81; i++) {
    document.getElementById('c' + i).value = sudokuCopy[i - 1];
  }
}

function showSudoku(sudoku) {
  var sudokuText = "<table border='1'>";
  for (var i = 0; i <= 8; i++) {
    sudokuText += "<tr>";
    for (var j = 0; j <= 8; j++) {
      sudokuText += "<td>";
      sudokuText += sudoku[i * 9 + j];
      sudokuText += "</td>";
    }
    sudokuText += "</tr>";
  }
  sudokuText += "</table>";
  document.write(sudokuText);
}
