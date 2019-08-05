import React, { Component } from "react";
import { Link } from "react-router-dom";
import {auth, createUserProfileDoc} from '../../firebase/firebase.uitls'
import "./auth.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  onFormSubmit = async e => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state;    

    if(password !== confirmPassword) {
      alert("passwords dont't match!!");
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, {displayName})


      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    
    } catch(error) {
      console.log(error)
    }


  }
  
  onInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={this.onFormSubmit}>
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
            <input
              placeholder="Full Name"
              name="displayName"
              onChange={this.onInputChange}
              value={displayName}
              type="text"
              className="validate"
              required
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              onChange={this.onInputChange}
              value={email}
              className="validate"
              required
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.onInputChange}
              value={password}
              className="validate"
              required
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={this.onInputChange}
              value={confirmPassword}
              className="validate"
              required
            />
          </div>
          <button className="main-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
