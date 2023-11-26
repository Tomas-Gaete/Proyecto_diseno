// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartStateContext = createContext();

export const CartStateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  
  return (
    <CartStateContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error('useCartState must be used within a CartStateProvider');
  }
  return context;
};
