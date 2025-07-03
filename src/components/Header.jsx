import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">Mi Perfil</Link>
        <ul className="nav-links">
          <li><NavLink to="/about" className="nav-link">Sobre mí</NavLink></li>
          <li><NavLink to="/skills" className="nav-link">Conocimientos</NavLink></li>
          <li><NavLink to="/projects" className="nav-link">Proyectos</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
