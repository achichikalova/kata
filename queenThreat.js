//Function to generete chess board:
const generateBoard = function (whiteQueen, blackQueen) {
  let boardSize = 8;  
  let chessBoard = [];

  //Initiate the board:
  for (let i = 0; i < boardSize; i++) {   
    chessBoard[i] = [];
    for (let j = 0; j < boardSize; j++) {
      chessBoard[i][j] = 0;
    } 
  }

  //Put our Queens on their places:
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;

    
  return chessBoard;
}


const queenThreat = function () {

  //let's try to find our queens
  for (let y = 0; y < chessBoard.length; y++) {
    for (let x = 0; x < chessBoard.length; x++) {
      if (chessBoard[y][x] === 1) {
        return chessBoard[y][x];
      }
    }
  }
}



let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));