import { useState } from "react";


export default function Player({ initName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initName);

    function handleClick() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        };
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let changeButton = 'Edit'
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        changeButton = "Save"
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player" >
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{changeButton}</button>
        </li>
    );
}