//Function to generete chess board with queens on it:
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

//Function to check if queens can capture each other;
const queenThreat = function () {  
  let result;
 
  //check if two queens on the same row or column:
  if(whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    result = true;
  //now check diagonals:
  } else if (whiteQueen[0] === whiteQueen[1] && blackQueen[0] === blackQueen[1] ) {   
    result = true;
  } else if ( whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1]) {
    result = true;
  } else {
    result = false;
  }

  return result;
}



let whiteQueen = [1, 5];
let blackQueen = [7, 3];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));