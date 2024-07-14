import { useState } from "react";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("👄");

  // switch turns
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) =>
      curActivePlayer === "👄" ? "🍑" : "👄"
    );
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
        <Gameboard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
