import { useState, useEffect } from "react";
import Square from "../components/Square";

const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", ""];

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Match = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [won, setWon] = useState<boolean>(false);

  useEffect(() => {
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }

    checkForWinner();
  }, [gameState]);

  const resetBoard = () => {
    setGameState(INITIAL_GAME_STATE);
    setWon(false);
  };

  const handleWin = () => {
    console.log(`Congrats player ${currentPlayer}! You are the winner!`);
    setWon(true);
    // resetBoard();
  };

  const handleDraw = () => {
    window.alert("The game ended in a draw");

    // resetBoard();
  };

  const checkForWinner = () => {
    let roundWon = false;

    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      const winCombo = WINNING_COMBOS[i];

      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];

      if ([a, b, c].includes("")) {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      setTimeout(() => handleWin(), 500);
      return;
    }

    if (!gameState.includes("")) {
      setTimeout(() => handleDraw(), 500);
      return;
    }

    changePlayer();
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleCellClick = (event: any) => {
    const cellIndex = Number(event.target.getAttribute("data-cell-index"));

    console.log(cellIndex);

    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }

    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  };

  return (
    <div>
      <h1>match screen</h1>
      <p>this is match screen</p>
      <div className="gamebox">
        {gameState.map((player, index) => (
          <Square
            key={index}
            onClick={handleCellClick}
            {...{ index, player }}
          />
        ))}
      </div>
    </div>
  );
};

export default Match;
