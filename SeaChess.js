let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, "x", 0],
];
function showConsoleBoard() {
  let boardStr = "";
  for (let i = 0; i < board.length; i++) {
    boardStr += "|";

    for (let j = 0; j < board[i].length; j++) {
      boardStr += board[i][j] + "|";
    }
    boardStr += "\n";
  }

  console.log(boardStr);
}
showConsoleBoard();
// |0|0|0|
// |0|0|0|
// |0|x|0|
