import React from "react";

import { connect } from "react-redux";
import {
  addChartItemAction,
  removeChartItemAction,
  removeAllChartItemAction
} from "../../redux/chart/chartAction";

import "./checkout-item.scss";

const CheckoutItem = props => {
  const { item, increaseQuantity, decreaseQuantity, removeItem } = props;
  const { name, price, imgUrl, quantity } = item;
  return (
    <li className="collection-item checkout-items">
      <span className="img">
        <img src={imgUrl} alt="product media" />
      </span>
      <span className="title">{name}</span>
      <span className="quantity-con">
        <span className="quantity-group">
          <span className="icon minus" onClick={() => decreaseQuantity(item)}>
            <i className="fas fa-window-minimize" />
          </span>
          <span className="quantity">{quantity}</span>
          <span className="icon plus" onClick={() => increaseQuantity(item)}>
            <i className="fas fa-plus" />
          </span>
        </span>
      </span>
      <span className="price">{price}৳</span>
      <span className="remove">
        <button className="main-btn" onClick={() => removeItem(item)}>
          remove
        </button>
      </span>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  increaseQuantity: item => dispatch(addChartItemAction(item)),
  decreaseQuantity: item => dispatch(removeChartItemAction(item)),
  removeItem: item => dispatch(removeAllChartItemAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
