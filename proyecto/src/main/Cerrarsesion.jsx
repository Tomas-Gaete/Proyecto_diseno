import React from 'react';
import { useNavigate } from 'react-router-dom';

function CerrarSesion({ onCerrarSesion }) {
    const navigate = useNavigate();
  
    const handleCerrarSesion = () => {
      onCerrarSesion();
      navigate('/inicio');
    };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <h1 style={{ marginBottom: '50px', marginTop: '50px' }}>¿Seguro que desea cerrar la sesión?</h1>
      <button
        type="button"
        onClick={handleCerrarSesion}
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default CerrarSesion;
