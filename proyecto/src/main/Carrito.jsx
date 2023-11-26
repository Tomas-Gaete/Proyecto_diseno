import React, { useState, useEffect } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const containerStyle = {
  width: '60%',
  margin: 'auto',
  marginTop: '50px',
  fontSize: '25px',
};

const titleStyle = {
  textAlign: 'left',
  marginBottom: '50px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '10px',
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'left',
};

const tdContainerStyle = {
  border: '1px solid #ddd',
};

const tdImageStyle = {
  ...tdContainerStyle,
  width: '200px',
  height: '150px',
};

const tdNameStyle = {
  ...tdContainerStyle,
  width: 'auto',
  padding: '10px',
  textAlign: 'left',
  fontSize: '30px',
};

const tdPriceStyle = {
  ...tdContainerStyle,
  width: '150px',
  textAlign: 'right',
  fontSize: '30px',
};

const squareImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const buttonContainerStyle = {
  textAlign: 'right',
  marginTop: '10px',
};

function Carrito() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

  const calcularPrecioTotal = () => {
    return cartItems.reduce((total, juego) => total + juego.precio, 0);
  };

  const handleBorrarCarrito = () => {
    alert('¿Estás seguro de borrar el carrito?');

    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const handleComprar = () => {
    console.log('Comprando juegos:', cartItems);

    const bibliotecaExistente = JSON.parse(localStorage.getItem('biblioteca')) || [];

    const bibliotecaActualizada = [...bibliotecaExistente, ...cartItems];

    localStorage.setItem('biblioteca', JSON.stringify(bibliotecaActualizada));

    setCartItems([]);
    localStorage.removeItem('cartItems');

    navigate('/biblioteca');
  };

  useEffect(() => {
    if (location.state?.cartItems) {
      setCartItems(location.state.cartItems);
      localStorage.setItem('cartItems', JSON.stringify(location.state.cartItems));
    }
  }, [location.state]);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Carrito de Compras</h1>
      {cartItems.length > 0 ? (
        <>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Imagen</th>
                <th style={thStyle}>Nombre</th>
                <th style={thStyle}>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((juego) => (
                <tr key={juego.id}>
                  <td style={tdImageStyle}>
                    <img src={juego.background_image} alt={juego.name} style={squareImageStyle} />
                  </td>
                  <td style={tdNameStyle}>{juego.name}</td>
                  <td style={tdPriceStyle}>${juego.precio}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={tdPriceStyle} colSpan="2">Total:</td>
                <td style={tdPriceStyle}>{calcularPrecioTotal()}</td>
              </tr>
            </tfoot>
          </table>
          <div style={buttonContainerStyle}>
            <button  className="btn btn-primary" onClick={handleBorrarCarrito}>Borrar Carrito</button>
            <button className="btn btn-primary"  onClick={handleComprar} style={{ marginLeft: '10px' }}>Comprar</button>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
  <Link to="/games" className="btn btn-primary" style={buttonContainerStyle}>
    Continuar Comprando
  </Link>
</div>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
}

export default Carrito;













