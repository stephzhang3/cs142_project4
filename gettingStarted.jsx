import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import Header from "./components/header/Header";
import Example from "./components/example/Example";

//ReactDOM.render(<Header />, document.getElementById("reactapp"));
ReactDOM.render(
  <div>
    <Header />
    <Example />
  </div>,
  document.getElementById("reactapp")
);
