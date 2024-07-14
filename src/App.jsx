import { useState } from "react";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";

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

  const activePlayer = deriveActivePlayer(gameTurns);

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
        <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
