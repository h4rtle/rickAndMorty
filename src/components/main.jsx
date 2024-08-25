import Image from "../asset/images/image";
import React, { useEffect, useState } from "react";
import CharacterList from "./characterItem";
import getCharacters from "../api/character";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data.results); // изменено на data.results
      setLoading(false);
    });
  }, []);

  return (
    <>
      <main>
        <>
          <Image />
        </>
        <div className="card-field">
          <CharacterList characters={characters} loading={loading} />
        </div>
      </main>
    </>
  );
};

export default Main;
