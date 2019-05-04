import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Example from "./components/example/Example";
import States from "./components/states/States";

ReactDOM.render(
  <HashRouter>
    <div>
      <Header />
      <div>
        <Link to="/states">States</Link>{" "}
      </div>
      <div>
        <Link to="/example">Example</Link>
      </div>
      <Route path="/states" component={States} />
      <Route path="/example" component={Example} />
    </div>
  </HashRouter>,
  document.getElementById("reactapp")
);
