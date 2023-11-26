import React, { useState } from 'react';
import '../App.css';
import Gamepage from "../API/Gamepage"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./Inicio.jsx"
import Profile from "./perfil.jsx"
import Carrito from "./Carrito.jsx"
import "normalize.css"
import Biblioteca from "./Biblioteca.jsx"
import IniciarSesion from "./SignIn.jsx"
import Registrarse from "./SignUp.jsx"
import CerrarSesion from "./Cerrarsesion.jsx"
import NavBar from "./Navbar.jsx"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (username, email) => {
    setIsAuthenticated(true);
  };
  const handleSignUp = (username, email) => {
    setIsAuthenticated(true);
  };
  const handleCerrarSesion = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('biblioteca');
    setIsAuthenticated(false);
  };
  

  return (
    <BrowserRouter>
      <div>
        <NavBar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Inicio isAuthenticated={isAuthenticated} />} />
          <Route path="/inicio" element={<Inicio isAuthenticated={isAuthenticated} />} />
          <Route path="/games" element={<Gamepage isAuthenticated={isAuthenticated} />} />
          <Route path="/perfil" element={<Profile isAuthenticated={isAuthenticated} />} />
          <Route path="/biblioteca" element={<Biblioteca isAuthenticated={isAuthenticated} />} />
          <Route path="/Carrito" element={<Carrito isAuthenticated={isAuthenticated} />} />
          <Route path="/iniciarsesion" element={<IniciarSesion onSignIn={handleSignIn} isAuthenticated={isAuthenticated} />} />
          <Route path="/registrarse" element={<Registrarse onSignUp={handleSignUp} isAuthenticated={isAuthenticated} />} />
          <Route path="/cerrarsesion" element={<CerrarSesion onCerrarSesion={handleCerrarSesion} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

