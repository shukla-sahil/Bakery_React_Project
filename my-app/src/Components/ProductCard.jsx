import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card" > 
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
};  

export default ProductCard;
