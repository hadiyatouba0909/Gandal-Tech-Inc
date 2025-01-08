import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Gandal Tech Logo" className="h-12 w-12" />
            <span className="text-xl font-semibold text-gray-900">
              Gandal Tech Inc
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            {[
              ['Accueil', '/'],
              ['Services', '/services'],
              ['Équipe', '/Team'],
              ['Projets', '/Projects'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <Link
                key={url}
                to={url}
                className="text-gray-600 hover:text-emerald-600 font-medium transition-colors"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;