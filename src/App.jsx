import { useState } from "react";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Hardcode winnign combinations - below is an example which can be found in the winning_combinations.js file which is extennal

// const WINNING_COMBINATIONS = [
//   [
//     { row: 0, col: 0 },
//     { row: 0, col: 1 },
//     { row: 0, col: 2 },
//   ],
// ];

// helper function
function deriveActivePlayer(gameTurns) {
  // Derived State
  let currentPlayer = "👄";

  // getting the active player state based on previous player
  if (gameTurns.length > 0 && gameTurns[0].player === "👄") {
    currentPlayer = "🍑";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("👄");
  // const [hasWinner, setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // Winner variable
  let winner = null;

  //  Derive game turns
  for (const combination of WINNING_COMBINATIONS) {
    // Extracting the square for the winning combination
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  // switch turns
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) =>
    //   curActivePlayer === "👄" ? "🍑" : "👄"
    // );
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="👄"
            isActive={activePlayer === "👄"}
          />
          <Player
            initialName="Player2"
            symbol="🍑"
            isActive={activePlayer === "🍑"}
          />
        </ol>
        {winner && <GameOver winner={winner} />}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
