import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="public/logo192.png" alt="Gandal Tech Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Gandal Tech Inc</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? 'Fermer' : 'Menu'}
          </button>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
            <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
            <Link to="/team" className="hover:text-blue-500 transition-colors">Équipe</Link>
            <Link to="/projects" className="hover:text-blue-500 transition-colors">Projets</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-blue-500">Accueil</Link>
            <Link to="/services" className="block hover:text-blue-500">Services</Link>
            <Link to="/team" className="block hover:text-blue-500">Équipe</Link>
            <Link to="/projects" className="block hover:text-blue-500">Projets</Link>
            <Link to="/contact" className="block hover:text-blue-500">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;