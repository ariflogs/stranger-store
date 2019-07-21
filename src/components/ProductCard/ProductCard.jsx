import React from "react";

const ProductCard = ({name, price}) => {
  return (
      <div className="card" style={{width: "300px", display: "inline-block", margin: "10px"}}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="images/office.jpg" />
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
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>
  );
};

export default ProductCard;
