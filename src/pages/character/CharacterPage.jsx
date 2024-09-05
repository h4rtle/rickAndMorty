import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacter } from "../../api/character";
import CharacterItem from "./components/CharacterItem";
import React from "react";

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getCharacter(id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setCharacter(null);
      });
  }, [id]);
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!character) {
    return <div>Персонаж не найден</div>;
  }

  const handleButtonExit = () => {
    navigate(-1);
  };
  return (
    <>
      <button className="exit-button" onClick={handleButtonExit}>
        Назад
      </button>
      <CharacterItem character={character} />;
    </>
  );
};

export default CharacterPage;
