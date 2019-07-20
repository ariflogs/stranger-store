import React from "react";
import "./menu-item.scss";

const MenuItem = ({title, imgUrl}) => {
  return (
    <div className="menu-item">
      <div className="bg-img" style={{background: `url(${imgUrl}) center center / cover`}}></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;