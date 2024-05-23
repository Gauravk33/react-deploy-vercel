import React from 'react';
import ProductCard from '../productcard/ProductCard';
const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
            
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
