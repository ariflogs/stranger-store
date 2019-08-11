import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingChartItem from "../ShoppingChartItem/ShoppingChartItem";
import "./shopping-chart-dropdown.scss";

const ShoppingChartDropdown = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length > 0 ? (
          items.map(item => <ShoppingChartItem key={item.id} item={item} />)
        ) : (
          <span className="no-item">No Items Added!!</span>
        )}
      </div>
      <Link to="/checkout" className="main-btn">
        CHECKOUT
      </Link>
    </div>
  );
};

const mapStateToProps = ({ chart }) => ({
  items: chart.items
});

export default connect(mapStateToProps)(ShoppingChartDropdown);
