function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">PLayer 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>EDIT</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">PLayer 1</span>
              <span className="player-symbol">O</span>
            </span>
            <button>EDIT</button>
          </li>
        </ol>
        PLAYERS GAME BOARD
      </div>
    </main>
  );
}

export default App;
