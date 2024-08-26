import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const Start = () => {
  return (
    <BrowserRouter>
      <App />;
    </BrowserRouter>
  );
};

reactDom.render(<Start />, document.getElementById("root"));
