// CartState.js
import { createContext, useContext, useState, useEffect } from 'react';

const CartStateContext = createContext();


export const CartStateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    try {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        const parsedCartItems = JSON.parse(savedCartItems);
        setCartItems(parsedCartItems);
      }
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
    }
  }, []);

  
  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);

    // Save cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const removeFromCart = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);

    // Save cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
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
