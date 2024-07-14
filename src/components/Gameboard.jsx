// Startiing from s0

import { useState } from "react";

// Storing value for the gameboard
/* 
This array represents the game board layout 
X | O | --
0 | -- | --
-- | X | --
This array will get populated by entries from the player , also related to winning-combinations.js
*/
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Complicated componed from Section 80
export default function Gameboard({ onSelectSquare, activePlayerSymbol }) {
  // Gameboard sttae
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
