import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gandal Tech Inc</h3>
            <p className="text-gray-400">La technologie au service de la connaissance et de l'innovation.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail size={18} />
                www.gandal-tech-inc@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +221 78 016 04 74
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +221 78 561 04 74
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Gandal Tech Inc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
