import React from "react";
import { auth } from "../../firebase/firebase.uitls";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingChartIcon from "../ShoppingChartIcon/ShoppingChartIcon"
import ShoppingChartDropdown from '../ShoppingChartDropdown/ShoppingChartDropdown'

import "./nav-menu.scss";
import Logo from "./logo.jpg";



const NavManu = ({ currentUser, show }) => {

  return (
    <nav className="white" style={{ height: "80px" }}>
      <div className="nav-wrapper  valign-wrapper">
        <div className="container-fluid">
          <Link to="/" className="brand-logo">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className="right">
            {}
            <li>
              <Link className="nav-item" to="/phones">
                Phones
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/laptops">
                Laptops
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/headphones">
                Headphones
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/monitors">
                Monitors
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/cameras">
                Cameras
              </Link>
            </li>
            <li>
              {currentUser ? (
                <span className="nav-item" onClick={() => auth.signOut()}>
                  Sign Out
                </span>
              ) : (
                <Link className="nav-item" to="/signin">
                  Sign In
                </Link>
              )}
            </li>
            <li>
                <ShoppingChartIcon cn="bag" />
            </li>
          </ul>
        </div>
        {show && <ShoppingChartDropdown />}
      </div>
    </nav>
  );
};

const mapStateToProps = ({user, chart}) => ({
  currentUser: user.currentUser,
  show: chart.show
});

export default connect(mapStateToProps)(NavManu);
