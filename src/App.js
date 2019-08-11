import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDoc } from "./firebase/firebase.uitls";

import { connect } from "react-redux";
import { createUserAction } from "./redux/user/userAction";

import NavManu from "./components/Menu/NavManu";
import HomePage from "./pages/Homepage/Homepage";
import Checkout from './pages/Checkout/Checkout'

import Phones from "./pages/Products/Phones";
import Monitors from "./pages/Products/Monitors";
import Headphones from "./pages/Products/Headphones";
import Laptops from "./pages/Products/Laptops";
import Cameras from "./pages/Products/Cameras";
import SignInSignUP from "./components/Auth/SignInSignUp";

class App extends Component {
  unSubcribeFromAuth = null;

  componentDidMount() {
    const { createUserAction } = this.props;

    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapshot => {
          createUserAction({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      createUserAction(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <NavManu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={Checkout} />

          <Route exact path="/phones" component={Phones} />
          <Route exact path="/monitors" component={Monitors} />
          <Route exact path="/headphones" component={Headphones} />
          <Route exact path="/laptops" component={Laptops} />
          <Route exact path="/cameras" component={Cameras} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUP />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  createUserAction: user => dispatch(createUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
