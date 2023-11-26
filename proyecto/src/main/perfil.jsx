import React, { useState } from 'react';
import defaultProfileImage from '../components/profilepic.png';

function Profile(isAuthenticated) {
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  const handleEditDescription = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <h2 style={{ marginBottom: '50px', marginTop: '50px'  }}>Perfil</h2>
      {username || email ? (
        <div>
          <div style={{ textAlign: 'center', margin: 'auto', marginTop: '20px', fontSize: 30 }}>
            <img
              src={defaultProfileImage}
              alt="Profile"
              style={{ width: '200px', height: '200px', borderRadius: '50%' }}
            />
            <div>
              <p>Nombre de usuario: {username}</p>
              <p>Correo electrónico: {email}</p>
            </div>
          </div>
          <div>
            <h4>Descripción</h4>
            {isEditing ? (
              <textarea
                value={description}
                onChange={handleChangeDescription}
                style={{ width: '50%', minHeight: '100px', marginBottom: '10px' }}
              />
            ) : (
              <p>{description}</p>
            )}
            <button onClick={handleEditDescription}>
              {isEditing ? 'Guardar' : 'Editar descripción'}
            </button>
          </div>
        </div>
      ) : (
        <p>Por favor, inicia sesión o regístrate para acceder al perfil.</p>
      )}
    </div>
  );
}

export default Profile;



