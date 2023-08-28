/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // check rows and cols
  for (let i = 0; i < board.length; i++) {
    let checkRow = [];
    let checkCol = [];
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') checkRow.push(board[i][j]);
    }

    for (let k = 0; k < board.length; k++) {
      if (board[k][i] !== '.') checkCol.push(board[k][i]);
    }

    if (!checkArr(checkRow) || !checkArr(checkCol)) return false;
  }

  // check squares
  // squares 0-2, 3-5, 6-8
  if (
    !checkArr(flatArrFromSquare(board, [0, 0], [2, 2])) ||
    !checkArr(flatArrFromSquare(board, [0, 3], [2, 5])) ||
    !checkArr(flatArrFromSquare(board, [0, 6], [2, 8])) ||
    !checkArr(flatArrFromSquare(board, [3, 0], [5, 2])) ||
    !checkArr(flatArrFromSquare(board, [3, 3], [5, 5])) ||
    !checkArr(flatArrFromSquare(board, [3, 6], [5, 8])) ||
    !checkArr(flatArrFromSquare(board, [6, 0], [8, 2])) ||
    !checkArr(flatArrFromSquare(board, [6, 3], [8, 5])) ||
    !checkArr(flatArrFromSquare(board, [6, 6], [8, 8]))
  )
    return false;

  return true;
};

// checks for overlapping NUMBERS
const checkArr = (arr) => {
  const sudokuSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (sudokuSet.has(arr[i])) {
      return false;
    } else {
      sudokuSet.add(arr[i]);
    }
  }

  return true;
};

const flatArrFromSquare = (board, topLeft, bottomRight) => {
  const res = [];
  for (let i = topLeft[0]; i <= bottomRight[0]; i++) {
    for (let j = topLeft[1]; j <= bottomRight[1]; j++) {
      if (board[i][j] !== '.') res.push(board[i][j]);
    }
  }
  return res;
};

let arr = [[1,2,3,4,5,6,7,8,9],[4,5,6,7,'.',9,'.','.','.'],[7,8,9,10,11,'.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],[2,'.','.','.','.','.','.','.','.']];

console.log(isValidSudoku(arr));

//console.log(flatArrFromSquare(arr, [0,3],[2,5]));

// console.log(isValidSudoku(arr));
