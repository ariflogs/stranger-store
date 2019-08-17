import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton"
import "./checkout.scss";

const Checkout = ({ chartItems }) => {
  const totalPrice = chartItems.reduce((total, item) => total + item.quantity * item.price, 0)

  return (
    <div className="container-fluid">
      <h1>Checkout Page</h1>
      <div className="container">
        <h5 className="total">Total: {totalPrice}৳</h5>
        <ul className="collection">
          {chartItems.map(item => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </ul>

        <StripeButton price={totalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ chart }) => ({
  chartItems: chart.items
});

export default connect(mapStateToProps)(Checkout);
