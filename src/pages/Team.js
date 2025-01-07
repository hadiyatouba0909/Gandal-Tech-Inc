import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { Mail } from 'lucide-react';

const Team = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Notre Équipe</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              alt="Hadiyatou Ba"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hadiyatou Ba</h3>
              <p className="text-blue-600 mb-3">Co-fondatrice & Experte en développement</p>
              <p className="text-gray-600 mb-4">
                Passionnée par l'innovation et le partage des connaissances, elle dirige avec une vision axée sur la créativité et l'excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <SiLinkedin size={20} />
                </a>
                <a href="mailto:hadiyatou@gandaltech.com" className="text-blue-500 hover:text-blue-700">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
              alt="Ibrahima Sory Diallo"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ibrahima Sory Diallo</h3>
              <p className="text-blue-600 mb-3">Co-fondateur & Spécialiste en transformation digitale</p>
              <p className="text-gray-600 mb-4">
                Expert en automatisation et gestion de données, dédié à offrir des solutions à forte valeur ajoutée.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <SiLinkedin size={20} />
                </a>
                <a href="mailto:ibrahima@gandaltech.com" className="text-blue-500 hover:text-blue-700">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
