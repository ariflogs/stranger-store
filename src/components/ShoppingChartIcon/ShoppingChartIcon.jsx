import React from "react";
import { connect } from "react-redux";

import { chartVisibilityAction } from "../../redux/chart/chartAction";

import "./shopping-chart-icon.scss";
import { ReactComponent as Shopbag } from "../../assets/shopping-bag.svg";

const ShoppingChartIcon = props => {
  return (
    <span className="chart-icon" onClick={props.chartAction}>
      <Shopbag className={props.cn} />
      <span className="item-num">{props.itemQuantity}</span>
    </span>
  );
};

const mapStateToProps = ({chart}) => ({
  itemQuantity: chart.items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
  chartAction: () => dispatch(chartVisibilityAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingChartIcon);
