//92 : Game Over Screen and Checking for a draw

export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2> GAMEOVER !!! </h2>
      <p>{winner} won!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
