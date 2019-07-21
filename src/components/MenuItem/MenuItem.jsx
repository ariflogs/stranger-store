import React from "react";
import {Link} from "react-router-dom"
import "./menu-item.scss";

const MenuItem = ({title, imgUrl}) => {
  return (
    <div className="menu-item">
      <div className="bg-img" style={{background: `url(${imgUrl}) center center / cover`}}></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <Link to={title.toLowerCase()} className="subtitle">SHOP NOW</Link>
      </div>
    </div>
  );
};

export default MenuItem;