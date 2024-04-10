import React from 'react';
import ProductCard from './ProductCard';
import CakeList from './CakeList';

const Cakes = () => {
  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Products</h1>
      <div className="row">
        {CakeList.map(product => (
          <div className="col-sm-4 d-flex align-items-stretch" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cakes;
