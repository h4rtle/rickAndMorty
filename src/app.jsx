import React from "react";
import "./shared/style.css";
import "./shared/normalize.css";
import RouteFromApp from "./app/routes/route";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <RouteFromApp />;
    </BrowserRouter>
  );
};

export default App;
