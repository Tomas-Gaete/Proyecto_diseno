import React, { useState, useEffect } from 'react';
import defaultProfileImage from '../components/profilepic.png';

const containerStyle = {
    width: '80%',
    margin: 'left',
    marginTop: '50px',
    fontSize: '25px',
  };

function Biblioteca() {
  const [juegos, setJuegos] = useState([]);
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  useEffect(() => {
    const storedJuegos = JSON.parse(localStorage.getItem('biblioteca')) || [];
    setJuegos(storedJuegos);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '50px', marginTop: '50px' }}>Biblioteca de Juegos</h2>
      {username || email ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img
              src={defaultProfileImage}
              alt="Profile"
              style={{ width: '150px', height: '150px', marginRight: '20px' }}
            />
            <div>
              <p style={{ fontSize: '50px', fontWeight: 'bold' }}>Juegos de {username}</p>
            </div>
          </div>
          <div style={containerStyle}>
            {juegos.length > 0 ? (
              <div>
                <h4>Tus Juegos</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'left' }}>Imagen</th>
                      <th style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'left' }}>Nombre</th>
                      <th style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'left' }}>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {juegos.map((juego) => (
                      <tr key={juego.id}>
                        <td style={{ border: '1px solid #ddd', width: '300px', height: '200px' }}>
                          <img src={juego.background_image} alt={juego.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'left', fontSize: '30px' }}>{juego.name}</td>
                        <td style={{ border: '1px solid #ddd', width: '150px', height: '150px' }}>
                          <img src={"https://static.vecteezy.com/system/resources/previews/001/187/075/non_2x/download-png.png"} alt={juego.descargar} style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p style={{ fontSize: '40px', marginTop: '50px' }}>Compra juegos para que aparezcan en esta sección.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Por favor, inicia sesión o regístrate para acceder a tu biblioteca de juegos.</p>
      )}
    </div>
  );
}

export default Biblioteca;





