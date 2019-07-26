import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./auth.scss";

const SignInSignUp = () => {

  const toggleClassHandler = () => {
  const container = document.getElementById('container');
	container.classList.toggle("right-panel-active");
  }

  return (
    <div className="auth-container" id="container">
      <SignIn />
      <SignUp />

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Already Have An Account?</h1>
            <button className="ghost toggler" id="signIn" onClick={toggleClassHandler}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Don't Have An Account?</h1>
            <button className="ghost toggler" id="signUp" onClick={toggleClassHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
