// CartDisplay.js
import React from 'react';
import { useCartState } from '../API/CartContext';
import NavBar from '../main/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//import { useCartState } from '../main/CartState';


const CartDisplay = () => {
  const { cartItems, setCartItems } = useCartState();

  const handleComprar = () => {
    console.log('Comprando juegos:', cartItems);

    const bibliotecaExistente = JSON.parse(localStorage.getItem('biblioteca')) || [];

    const bibliotecaActualizada = [...bibliotecaExistente, ...cartItems];

    localStorage.setItem('biblioteca', JSON.stringify(bibliotecaActualizada));

    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const handleBorrarCarrito = () => {
    alert('¿Estás seguro de borrar el carrito?');

    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <div>
      <NavBar/>
      <h2>Carrito de compras</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul className="list-unstyled">
        {cartItems.map((item) => (
          <li key={item.id} className="mb-3">
              <div>
                <strong>Name:</strong> {item.name}
              </div>
              <div className="d-flex">
              {item.background_image && (
                <div className="mr-3">
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="card-img-top img-fluid custom-img"
                  />
                </div>
              )}
            </div>
            <div>
                <strong>Metacritic:</strong> {item.metacritic}%
              </div>
              
              <button onClick={() => localStorage.removeItem(item.id)}>Remove</button>
          </li>
        ))}
        <button onClick={handleComprar}>Comprar</button>
        <button onClick={handleBorrarCarrito}>Borrar Carrito</button>
        <Link to="/games" className="btn btn-primary">
          Regresar al catálogo
        </Link>
      </ul>
      ) : (
        <div>
          <p>Tu carrito de compras esta vacío</p>
          <Link to="/games" className="btn btn-primary">
          Regresar al catálogo
        </Link>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
