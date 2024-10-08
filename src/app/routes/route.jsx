import MainPage from "../../pages/character/MainPage";
import LoginPage from "../../pages/auth/LoginPage";
import { Route, Routes } from "react-router-dom";
import CharacterPage from "../../pages/character/CharacterPage";
import React from "react";

const RouteFromApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/characters" element={<MainPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
    </Routes>
  );
};

export default RouteFromApp;
