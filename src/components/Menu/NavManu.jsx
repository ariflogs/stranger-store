import React from "react";
import { Link } from "react-router-dom";
import "./nav-menu.scss";
import Logo from "./logo.jpg";
import { ReactComponent as Shopbag } from "./shopping-bag.svg";

const NavManu = () => {
  return (
    <nav className="white" style={{height: '80px'}}>
      <div className="nav-wrapper  valign-wrapper">
        <div className="container-fluid">
          <Link to="/" className="brand-logo">
            <img src={Logo} alt="logo" style={{ height: "50px" }} />
          </Link>
          <ul className="right">
            {}
            <li>
              <a href="sass.html">Phones</a>
            </li>
            <li>
              <a href="badges.html">Laptops</a>
            </li>
            <li>
              <a href="collapsible.html">Headphones</a>
            </li>
            <li>
              <a href="collapsible.html">Monitors</a>
            </li>
            <li>
              <a href="collapsible.html">Cameras</a>
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
