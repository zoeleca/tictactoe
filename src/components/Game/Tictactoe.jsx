import React, { useEffect, useState } from "react";
import Board from "./Board";
import Header from "./Header";
import ResetButton from "./ResetBtn";
import {
  makeNewGrid,
  calculateWinner,
  isSquareEmpty,
  markSquare,
  getCurrentPlayer,
  switchCurrentPlayer,
  winnerPlayer,
  getStatus
} from "./game";


const Tictactoe = () => {
  const [playerWon, setPlayerWon] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [squares, setSquares] = useState(makeNewGrid());

  useEffect(() => {
    if (calculateWinner({ squares })) {
      setPlayerWon(winnerPlayer(squares));
    }
  }, [squares, currentPlayer]);

  const handleClick = (i) => {
    if (!isSquareEmpty(squares, i) || calculateWinner({ squares })) {
      return;
    }

    const nextPlayer = getCurrentPlayer(currentPlayer);
    const nextSquares = markSquare(squares, i, nextPlayer);

    setSquares(nextSquares);
    setCurrentPlayer(switchCurrentPlayer(currentPlayer));
  };

  const status = getStatus(playerWon, currentPlayer);

  const resetGame = () => {
    setSquares(makeNewGrid());
    setCurrentPlayer(true);
    setPlayerWon(null);
  };

  return (
    <div>
      <Header playerWon={playerWon} status={status} />
      <Board squares={squares} handleClick={handleClick} />
      <ResetButton resetGame={resetGame} />
    </div>
  );
};

export default Tictactoe;
