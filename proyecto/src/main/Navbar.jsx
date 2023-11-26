import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../components/Navbar.css';

function NavBar({ isAuthenticated, cartItems, juego }) {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
    


    const brandStyle = {
        fontSize: '3rem',
        padding: 10, 
        fontWeight: 'bold', 
    };

    const linkStyle = {
        fontSize: '1.5rem',
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/inicio" style={brandStyle}>Vapor</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/inicio" style={linkStyle}>Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/games" style={linkStyle}>Catálogo de juegos</Nav.Link>
                    <Nav.Link as={Link} to="/biblioteca" style={linkStyle}>Biblioteca</Nav.Link>
                    <Nav.Link as={Link} to="/perfil" style={linkStyle}>Perfil</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link as={Link} to="/carrito" style={linkStyle} state={{ cartItems: cartItemsFromStorage }}>
        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Carrito" style={{ width: '100px', height: '60px' }} />
      </Nav.Link>

                    {isAuthenticated ? (
                        <NavDropdown title={username} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/perfil" style={linkStyle}>Ver Perfil</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/cerrarsesion" style={linkStyle}>Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <NavDropdown title="Iniciar Sesión/Registrarse" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/iniciarsesion" style={linkStyle}>Iniciar Sesión</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/registrarse" style={linkStyle}>Registrarse</NavDropdown.Item>
                        </NavDropdown>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;





