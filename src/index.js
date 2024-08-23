import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

const Start = () => {
  return <App />;
};

reactDom.render(<Start />, document.getElementById("root"));
