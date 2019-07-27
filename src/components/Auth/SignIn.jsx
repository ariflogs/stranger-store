import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase.uitls";
import "./auth.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  onInputCange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  haha() {
    signInWithGoogle()
  }

  render() {
    return (
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={this.onFormSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <Link to="" className="social bg-google-col">
              <i className="fab fa-google" />
            </Link>
            <Link to="/" className="social bg-fb-col">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/" className="social bg-twitter-col">
              <i className="fab fa-twitter" />
            </Link>
          </div>
          <span>or use your account</span>

          <div className="input-field">
            <input
              id="email"
              name="email"
              type="email"
              className="validate"
              value={this.state.email}
              onChange={this.onInputCange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              id="password"
              name="password"
              type="password"
              className="validate"
              value={this.state.password}
              onChange={this.onInputCange}
            />
            <label htmlFor="password">Password</label>
          </div>

          <Link to="/" style={{ margin: "1rem 0" }}>
            Forgot your password?
          </Link>
          <button type="submit" className="main-btn" onClick={this.haha}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
