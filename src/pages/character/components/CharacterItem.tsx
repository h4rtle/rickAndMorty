import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ character }) => (
  <div className="character-card">
    <div className="character-image">
      <Link to={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>
    </div>
    <div className="character-info">
      <Link to={`/characters/${character.id}`}>
        <div className="character-name">{character.name}</div>
      </Link>
      <div className="section">
        <span
          className="status-icon"
          style={{
            backgroundColor: character.status === "Alive" ? "green" : "red",
          }}
        ></span>
        {character.status}
      </div>
      <div className="section">
        <span>Последнее известное местоположение: </span>
        {character.location.name}
      </div>
    </div>
  </div>
);

export default CharacterItem;
