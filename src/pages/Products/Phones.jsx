import React, { Component } from "react";
import { phonesData } from "./productData";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./product-style.scss";

class Phones extends Component {
  state = {
    phonesData
  };

  render() {
    const { title, items } = this.state.phonesData;
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

export default Phones;