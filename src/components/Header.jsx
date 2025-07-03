import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-graydark/70 backdrop-blur-sm shadow-none">
      <nav className="flex justify-between items-center max-w-5xl mx-auto px-5 py-3">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-white  drop-shadow-sm">Reys</Link>
        <ul className="flex gap-6 items-center">
          <li><NavLink to="/about" className={({isActive}) => `font-semibold px-4 py-2 rounded transition ${isActive ? 'text-pink-800 underline underline-offset-8 decoration-2' : 'text-white hover:text-pink-800/80'}`}>Sobre mí</NavLink></li>
          <li><NavLink to="/skills" className={({isActive}) => `font-semibold px-4 py-2 rounded transition ${isActive ? 'text-pink-800 underline underline-offset-8 decoration-2' : 'text-white hover:text-pink-800/80'}`}>Conocimientos</NavLink></li>
          <li><NavLink to="/projects" className={({isActive}) => `font-semibold px-4 py-2 rounded transition ${isActive ? 'text-pink-800 underline underline-offset-8 decoration-2' : 'text-white hover:text-pink-800/80'}`}>Proyectos</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => `font-semibold px-4 py-2 rounded transition ${isActive ? 'text-pink-800 underline underline-offset-8 decoration-2' : 'text-white hover:text-pink-800/80'}`}>Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
