import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, signInWithFB, signInWithGithub } from "../../firebase/firebase.uitls";
import "./auth.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = async e => {
    e.preventDefault();

    const {email, password} = this.state


    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" });

      alert("Singed In")
    } catch(error) {
      alert(error.message)
    }


  };

  onInputCange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={this.onFormSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <span className="social bg-google-col" onClick={signInWithGoogle}>
              <i className="fab fa-google" />
            </span>
            <span className="social bg-fb-col" onClick={signInWithFB}>
              <i className="fab fa-facebook-f" />
            </span>
            <span className="social bg-github-col" onClick={signInWithGithub}>
              <i className="fab fa-github"></i>
            </span>
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
          <button type="submit" className="main-btn">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
