import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 ">
      <div className="card h-100 mt-5">
        <img src={product.thumbnail} className="card-img-top" alt={product.title}  style={{ objectFit: 'cover', height: '200px', padding:'10px' }}  />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
