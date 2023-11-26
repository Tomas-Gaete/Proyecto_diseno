import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp({ onSignUp, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    onSignUp(username, email);
    navigate('/perfil');
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <h1 style={{ marginBottom: '50px', marginTop: '50px'  }}>Registrarse</h1>
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
        <label style={{ marginBottom: '8px' }}>Confirmar Contraseña:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: '50%', padding: '8px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <button
          type="button"
          onClick={handleSignUp}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Registrarse
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/iniciarsesion">Iniciar sesión</Link>
      </p>
    </div>
  );
}

export default SignUp;





