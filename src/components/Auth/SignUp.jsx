import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

class SignUp extends Component {
  render() {
    return (
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <Link to="/" className="social bg-google-col">
              <i className="fab fa-google" />
            </Link>
            <Link to="/" className="social bg-fb-col">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/" className="social bg-twitter-col">
              <i className="fab fa-twitter" />
            </Link>
          </div>
          <span>or use your email for registration</span>
          <div className="input-field">
            <input placeholder="Full Name" type="text" className="validate" />
          </div>
          <div className="input-field">
            <input placeholder="Email Address" type="email" className="validate" />
          </div>
          <div className="input-field">
            <input placeholder="Password" type="password" className="validate" />
          </div>
          <button className="main-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
