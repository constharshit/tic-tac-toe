import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function clickTriggered() {
    setIsEditing((editing) => !editing); //very good practice
  }
  let playerName = <span className="player-name">{name}</span>;
  let btnText = "Edit";
  if (isEditing) {
    playerName = <input type="text" value={name} required></input>;
    btnText = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickTriggered}>{btnText}</button>
    </li>
  );
}
