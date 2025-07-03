import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">Mi Perfil</Link>
        <ul className="nav-links">
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/skills">Conocimientos</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
