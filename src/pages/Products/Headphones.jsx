import React, { Component } from "react";
import { headphonesData } from "./productData";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./product-style.scss";

class Headphones extends Component {
  state = {
    headphonesData
  };

  render() {
    const { title, items } = this.state.headphonesData;
    return (
      <div className="container">
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

export default Headphones;