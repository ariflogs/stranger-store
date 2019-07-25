import React from "react";
import {Route, Switch } from "react-router-dom";
import NavManu from "./components/Menu/NavManu";
import HomePage from "./pages/Homepage/Homepage";
import Phones from "./pages/Products/Phones";
import Monitors from "./pages/Products/Monitors";
import Headphones from "./pages/Products/Headphones";
import Laptops from "./pages/Products/Laptops";
import Cameras from "./pages/Products/Cameras";
import SignInSignUP from "./components/Auth/SignInSignUp";


function App() {
  return (
    <div className="App">
      <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <NavManu /> } />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phones" component={Phones} />
        <Route exact path="/monitors" component={Monitors} />
        <Route exact path="/headphones" component={Headphones} />
        <Route exact path="/laptops" component={Laptops} />
        <Route exact path="/cameras" component={Cameras} />

        <Route exact path="/signin" component={SignInSignUP} /> 
      </Switch>
    </div>
  );
}

export default App;


