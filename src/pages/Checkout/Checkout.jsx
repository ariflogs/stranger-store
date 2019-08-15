import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./checkout.scss";

const Checkout = ({ chartItems }) => {
  return (
    <div className="container-fluid">
      <h1>Checkout Page</h1>
      <div className="container">
        <h5 className="total">Total: 29234$</h5>
        <ul className="collection">
          {chartItems.map(item => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ chart }) => ({
  chartItems: chart.items
});

export default connect(mapStateToProps)(Checkout);
