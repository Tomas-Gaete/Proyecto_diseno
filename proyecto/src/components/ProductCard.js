import React from 'react';

const ProductCard = ({ title, price, description }) => {
 return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
 );
};

export default ProductCard;