// game.js
export const makeNewGrid = () => {
  return Array(9).fill(null);
};

export const calculateWinner = ({ squares }) => {
  const winningCombinasions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinasions.length; i++) {
    const [a, b, c] = winningCombinasions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const isSquareEmpty = (squares, i) => {
  return !squares[i];
};

export const markSquare = (squares, i, player) => {
  const nextSquares = squares.slice();
  nextSquares[i] = player;
  return nextSquares;
};

export const getCurrentPlayer = (currentPlayer) => {
  return currentPlayer ? "X" : "O";
};

export const switchCurrentPlayer = (currentPlayer) => {
  return !currentPlayer;
};

export const winnerPlayer = (squares) => {
  const winner = calculateWinner({ squares });
  return winner ? "Winner: Player " + winner : null;
};

export const getStatus = (playerWon, currentPlayer) => {
  return playerWon ? null : `Player ${getCurrentPlayer(currentPlayer)}`;
};
