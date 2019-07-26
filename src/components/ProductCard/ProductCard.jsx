import React from "react";
import "./product-card.scss";

const ProductCard = ({item}) => {

const {name, price, imgUrl, description} = item

  return (
      <div className="card product-card z-depth-1">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={imgUrl} alt={name}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {name}<i className="material-icons right">more_vert</i>
          </span>
          <p className="price">Price: {price}৳</p>

          <div className="add" style={{margin: "1rem auto 0 auto", width: "125px"}}>
            <button className="main-btn">Add to card</button>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title">
          {name}<i className="material-icons right">close</i>
          </span>
          <ul>
            {description.map(des => <li key={Math.random()}>➤ {des}</li>)}
          </ul>
        </div>
      </div>
  );
};

export default ProductCard;
