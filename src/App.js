import React from "react";
import {Route, Switch } from "react-router-dom"
import HomePage from "./pages/Homepage/Homepage";
import Phones from "./pages/Products/Phones";
import Monitors from "./pages/Products/Monitors";
import Headphones from "./pages/Products/Headphones";
import Laptops from "./pages/Products/Laptops";
import Cameras from "./pages/Products/Cameras";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phones" component={Phones} />
        <Route exact path="/monitors" component={Monitors} />
        <Route exact path="/headphones" component={Headphones} />
        <Route exact path="/laptops" component={Laptops} />
        <Route exact path="/cameras" component={Cameras} />
      </Switch>
    </div>
  );
}

export default App;


