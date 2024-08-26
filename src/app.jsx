import React from "react";
import Main from "./components/main";
import "./asset/shared/style.css";
import "./asset/shared/normalize.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default App;
