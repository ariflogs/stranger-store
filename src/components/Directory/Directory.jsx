import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./directory.scss"

import phone from "./img/phone.jpeg";
import desktop from "./img/desktop.jpeg";
import laptop from "./img/laptop.jpeg";
import headphone from "./img/headphone.jpeg";
import camera from "./img/camera.jpeg";

class Directory extends Component {
  state = {
    items: [
      {
        title: "Phones",
        id: 1,
        imgUrl: phone
      },
      {
        title: "Monitors",
        id: 2,
        imgUrl: desktop
      },
      {
        title: "Headphones",
        id: 3,
        imgUrl: headphone
      },
      {
        title: "Laptops",
        id: 4,
        imgUrl: laptop
      },
      {
        title: "Cameras",
        id: 5,
        imgUrl: camera
      }
    ]
  };
  render() {
    return (
      <div className='directory-menu'>
        {this.state.items.map(({title, id, imgUrl}) => <MenuItem key={id} title={title} imgUrl={imgUrl} />
        )}
      </div>
    );
  }
}

export default Directory;
