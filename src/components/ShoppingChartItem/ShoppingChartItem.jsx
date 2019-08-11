import React from 'react'

import "./shopping-chart-item.scss"

const ShoppingChartItem = ({item}) => {

  const  {name, imgUrl, price, quantity} = item
  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <img src={imgUrl} alt="product img" className="circle" />
        <h6>{name}</h6>
        <p className="p-q">
          <span className="price">{price}৳</span>
          <span className="sign">×</span>
          <span className="quantity">{quantity}</span>
          <span className="sign">=</span>
          <span className="total">{price * quantity}৳</span>
        </p>
      </li>
    </ul>
  )
}

export default ShoppingChartItem