import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignIn({ onSignIn, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    onSignIn(username, email);
    navigate('/perfil');
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <h1 style={{ marginBottom: '50px', marginTop: '50px' }}>Iniciar Sesión</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ marginBottom: '8px' }}>Nombre de usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '50%', padding: '8px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <label style={{ marginBottom: '8px' }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '50%', padding: '8px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <label style={{ marginBottom: '8px' }}>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '50%', padding: '8px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <button
          type="button"
          onClick={handleSignIn}
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Iniciar Sesión
        </button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/registrarse">Registrarse</Link>
      </p>
    </div>
  );
}

export default SignIn;



