import React from "react";
import {Route, Switch } from "react-router-dom"
import HomePage from "./pages/Homepage/Homepage";
import Phones from "./pages/Products/Phones";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phones" component={Phones} />
      </Switch>
    </div>
  );
}

export default App;
