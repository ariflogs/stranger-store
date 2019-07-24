import React, { Component } from "react";
import { camerasData } from "./productData";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./product-style.scss";

class Cameras extends Component {
  state = {
    camerasData
  };

  render() {
    const { title, items } = this.state.camerasData;
    return (
      <div className="container-fluid">
        <h1>{title}</h1>
        <div className="product-items">
          {items.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cameras;