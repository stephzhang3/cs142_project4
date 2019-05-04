import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/Header";
import ViewSwitcher from "./components/ViewSwitcher";

ReactDOM.render(
  <div>
    <Header />
    <ViewSwitcher />
  </div>,
  document.getElementById("reactapp")
);
