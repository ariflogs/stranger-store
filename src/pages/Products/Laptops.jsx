import React, { Component } from "react";
import { laptopsData } from "./productData";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./product-style.scss";

class Laptops extends Component {
  state = {
    laptopsData
  };

  render() {
    const { title, items } = this.state.laptopsData;
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

export default Laptops;