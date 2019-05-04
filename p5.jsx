import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import ViewSwitcher from "./components/ViewSwitcher";

ReactDOM.render(
  <HashRouter>
    <Header />
    <Route path="/states" component={States} />
    <Route path="/example" component={Example} />
    ...
  </HashRouter>,
  document.getElementById("reactapp")
);
