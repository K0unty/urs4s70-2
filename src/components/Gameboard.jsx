// Startiing from s0

// Storing value for the gameboard
/* 
This array represents the game board layout 
X | O | --
0 | -- | --
-- | X | --
This array will get populated by entries from the player , also related to winning-combinations.js
*/
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Complicated componed from Section 80
export default function Gameboard() {
  return (
    <ol id="game-board">
      {initalGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
