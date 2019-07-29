import React from "react";
import { auth } from "../../firebase/firebase.uitls"
import { Link } from "react-router-dom";


import "./nav-menu.scss";
import Logo from "./logo.jpg";
import { ReactComponent as Shopbag } from "./shopping-bag.svg";

const NavManu = ({currentUser}) => {

  console.log(window.location.pathname)
  return (
    <nav className="white" style={{height: '80px'}}>
      <div className="nav-wrapper  valign-wrapper">
        <div className="container-fluid">
          <Link to="/" className="brand-logo">
            <img src={Logo} alt="logo"/>
          </Link>
          <ul className="right">
            {}
            <li>
              <Link to="/phones">Phones</Link>
            </li>
            <li>
              <Link to="/laptops">Laptops</Link>
            </li>
            <li>
              <Link to="/headphones">Headphones</Link>
            </li>
            <li>
              <Link to="/monitors">Monitors</Link>
            </li>
            <li>
              <Link to="/cameras">Cameras</Link>
            </li>
            <li>
              {
                currentUser ? 
                <Link to={window.location.pathname} onClick={() => auth.signOut()}>Sign Out</Link>
                :
                <Link to="/signin">Sign In</Link>
              }
              {/* <Link to="/signin">SignIn</Link> */}
            </li>
            <li>
              <Link to="/shop">
                <Shopbag className="bag" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavManu;
