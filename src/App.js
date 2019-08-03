import React, {Component} from "react";
import {Route, Switch } from "react-router-dom";

import {auth, createUserProfileDoc} from './firebase/firebase.uitls';

import NavManu from "./components/Menu/NavManu";
import HomePage from "./pages/Homepage/Homepage";
import Phones from "./pages/Products/Phones";
import Monitors from "./pages/Products/Monitors";
import Headphones from "./pages/Products/Headphones";
import Laptops from "./pages/Products/Laptops";
import Cameras from "./pages/Products/Cameras";
import SignInSignUP from "./components/Auth/SignInSignUp";



class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentUser: null
    }
  }


  unSubcribeFromAuth = null

  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      
      createUserProfileDoc(user)
    })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth()
  }


  render() {
    return (
      <div className="App">
        <NavManu currentUser={this.state.currentUser} />
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
}

export default App;


