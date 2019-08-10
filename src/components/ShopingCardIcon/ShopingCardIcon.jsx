import React from 'react'
import { ReactComponent as Shopbag } from "../../assets/shopping-bag.svg";

import "./shoping-card-icon.scss";

const ShopingCardIcon = (props) =>  {
  return (
    <span className="chart-icon">
      <Shopbag className={props.cn} />
      <span className="item-num">{5}</span>
    </span>
  )
}
export default ShopingCardIcon