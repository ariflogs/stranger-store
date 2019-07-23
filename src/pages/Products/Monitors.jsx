import React, { Component } from "react";
import { monitorsData } from "./productData";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./product-style.scss";

class Monitors extends Component {
  state = {
    monitorsData
  };

  render() {
    const { title, items } = this.state.monitorsData;
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

export default Monitors;