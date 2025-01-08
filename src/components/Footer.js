import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Première colonne - À propos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Gandal Tech Inc</h3>
            <p className="text-gray-400">
              La technologie au service de la connaissance et de l'innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/gandal-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/gandaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com/gandaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/gandaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Deuxième colonne - Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Troisième colonne - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Applications Web
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Design Graphique
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Formation Tech
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Conseil Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Quatrième colonne - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                www.gandal-tech-inc@gmail.com
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +221 78 016 04 74
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +221 78 561 91 15
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                Dakar, Sénégal
              </p>
            </div>
          </div>
        </div>

        {/* Barre de droits d'auteur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gandal Tech Inc. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;