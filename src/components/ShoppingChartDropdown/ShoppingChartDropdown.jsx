import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingChartItem from "../ShoppingChartItem/ShoppingChartItem";
import { chartVisibilityAction } from "../../redux/chart/chartAction";

import "./shopping-chart-dropdown.scss";

const ShoppingChartDropdown = ({ items, chartAction }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length > 0 ? (
          items.map(item => <ShoppingChartItem key={item.id} item={item} />)
        ) : (
          <span className="no-item">No Items Added!!</span>
        )}
      </div>
      <Link to="/checkout" className="main-btn" onClick={() => chartAction()}>
        CHECKOUT
      </Link>
    </div>
  );
};

const mapStateToProps = ({ chart }) => ({
  items: chart.items
});

const mapDispatchToProps = dispatch => ({
  chartAction: () => dispatch(chartVisibilityAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingChartDropdown);
