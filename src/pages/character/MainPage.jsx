import Image from "../../shared/image/rickAndMortyImage";
import React, { useEffect, useState } from "react";
import { getCharacters } from "../../api/character";
import CharacterItem from "./components/CharacterItem";
const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters().then((data) => {
      try {
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        return [];
      }
    });
  }, []);

  return (
    <>
      <main>
        <Image />

        <div className="card-field">
          {characters.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      </main>
    </>
  );
};

export default MainPage;
