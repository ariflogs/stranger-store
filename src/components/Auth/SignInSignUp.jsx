import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./sign-in.scss";

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
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={toggleClassHandler}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={toggleClassHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
