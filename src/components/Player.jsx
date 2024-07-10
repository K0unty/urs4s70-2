// Player 1 and Player 2 component - the props is the location where ht details are passed
// the classNames are all CSS properties

export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>EDIT</button>
    </li>
  );
}
