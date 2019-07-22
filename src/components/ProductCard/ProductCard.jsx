import React from "react";

const ProductCard = ({item}) => {

const {name, price, imgUrl, description} = item

console.log(item)
  return (
      <div className="card" style={{width: "320px", height: "480px", display: "inline-block", margin: "10px"}}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={imgUrl} alt={name}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {name}<i className="material-icons right">more_vert</i>
          </span>
          <p>{price}</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
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
