// Player 1 and Player 2 component - the props is the location where ht details are passed
// the classNames are all CSS properties

import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  // will manage a True or false boolean value, so intital state - isEditing is set to false
  // Which will then update to True
  const [isEditing, setIsEditing] = useState(false);

  // Defining another state for managine name
  const [playerName, setPlayerName] = useState(initialName);

  // Adding the editing functionality to the component
  function handleEditClick() {
    // Best Practice , updating a state based on previous state value
    setIsEditing((editing) => !editing);
  }

  // Function to update state when name is typed which is an event
  function handleChange(event) {
    // console.log(event); // Console log all the entries into the fields
    setPlayerName(event.target.value);
  }

  let edittablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    edittablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {edittablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
