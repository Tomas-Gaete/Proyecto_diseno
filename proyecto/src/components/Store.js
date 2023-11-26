import React from 'react';
import ProductCard from './ProductCard';
import './Store.css';

const Store = () => {
 const newGames = Array.from({ length: 8 }, (_, i) => i + 1).map((id) => (
    <ProductCard
      key={id}
      title={`New Game ${id}`}
      price={10}
      description="This is a new game description"
    />
 ));

 const popularGames = Array.from({ length: 8 }, (_, i) => i + 1).map((id) => (
    <ProductCard
      key={id}
      title={`Popular Game ${id}`}
      price={20}
      description="This is a popular game description"
    />
 ));

 const bestSellers = Array.from({ length: 8 }, (_, i) => i + 1).map((id) => (
    <ProductCard
      key={id}
      title={`Best Seller ${id}`}
      price={30}
      description="This is a best seller game description"
    />
 ));

 return (
    <div className="store">
      <h1>Store</h1>
      <div className="store-container">
        <h2>New Games</h2>
        {newGames}
        <h2>Popular Games</h2>
        {popularGames}
        <h2>Best Sellers</h2>
        {bestSellers}
      </div>
    </div>
 );
};

export default Store;