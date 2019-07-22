import React, { Component } from "react";
import { phonesData } from "./productData";
import ProductCard from "../../components/ProductCard/ProductCard"

class Products extends Component {
  state = {
    phonesData
  };

  render() {
    console.log(this.state);
    const {title, items} = this.state.phonesData
    return (
      <div className="container">
        <h1>{title}</h1>
        {items.map(item => <ProductCard key={item.id} item={item} />)}
      </div>
    );
  }
}

export default Products;
