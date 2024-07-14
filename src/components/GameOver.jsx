//92 : Game Over Screen and Checking for a draw

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2> GAMEOVER !!! </h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>SCREWED!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
