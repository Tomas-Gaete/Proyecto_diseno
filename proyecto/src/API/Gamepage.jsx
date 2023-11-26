import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Gamepage.css";

const API_url = "https://api.rawg.io/api/games?key=a401ea2cd25341bba41b31571184b645";

function Gamepage() {
  const [juegos, setJuegos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_url)
      .then((response) => {
        console.log(response.data);
        setJuegos(response.data.results);
      });
  }, []);

  const handleAddToCart = (juego) => {
    const precioDelJuego = juego.precio || 0;
  
    const juegoEnCarrito = {
      id: juego.id,
      name: juego.name,
      background_image: juego.background_image,
      precio: precioDelJuego,
    };
  
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const updatedCartItems = [...cartItemsFromStorage, juegoEnCarrito];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
    navigate('/carrito', { state: { cartItems: updatedCartItems } });
  };

  return (
    <div>
      <div className="container">
        <ul className="row list-unstyled">
          {juegos.map((juego) => (
            <li key={juego.id} className="col-md-3 mb-3">
              <div className="card h-100">
                <div>
                  <strong>Nombre:</strong> {juego.name}
                </div>
                {juego.background_image && (
                  <div>
                    <img src={juego.background_image} alt={juego.name} className="card-img-top img-fluid custom-img" />
                  </div>
                )}
                <div>
                  <strong>Valoración:</strong> <span>{juego.metacritic}%</span>
                </div>
                <div>
                  <strong>Lanzamiento:</strong> {new Date(juego.released).toLocaleDateString()}
                </div>
                <button onClick={() => handleAddToCart(juego)} className="btn btn-primary">Agregar al carrito</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gamepage;

