// Player 1 and Player 2 component - the props is the location where ht details are passed
// the classNames are all CSS properties

import { useState } from "react";

export default function Player({ name, symbol }) {
  // will manage a True or false boolean value, so intital state - isEditing is set to false
  // Which will then update to True
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(params) {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required name="" id="" />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>EDIT</button>
    </li>
  );
}
