import React from "react";

const CharacterList = ({ characters, loading }) => {
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <div className="character-image">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="character-info">
            <div className="character-name">{character.name}</div>
            <div className="section">
              <span
                className="status-icon"
                style={{
                  backgroundColor:
                    character.status === "Alive" ? "green" : "red",
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
      ))}
    </>
  );
};

export default CharacterList;
