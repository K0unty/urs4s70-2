import { useState } from "react";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("👄");

  // switch turns
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) =>
      curActivePlayer === "👄" ? "🍑" : "👄"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "👄";

      if (prevTurns.length > 0 && prevTurns[0].player === "👄") {
        currentPlayer = "🍑";
      }

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
      <Log />
    </main>
  );
}

export default App;
