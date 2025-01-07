import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80"
              alt="Plateforme éducative"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Plateforme de gestion éducative</h3>
              <p className="text-gray-600 mb-4">
                Un outil intuitif pour les écoles, facilitant la gestion des données étudiantes et la communication.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 inline-flex items-center">
                Voir le projet <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Application de collaboration"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Application de collaboration</h3>
              <p className="text-gray-600 mb-4">
                Solution permettant aux équipes de travailler efficacement à distance avec des outils collaboratifs intégrés.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 inline-flex items-center">
                Voir le projet <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Système d'automatisation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Système d'automatisation PME</h3>
              <p className="text-gray-600 mb-4">
                Optimisation des opérations et gain de temps pour les petites et moyennes entreprises.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 inline-flex items-center">
                Voir le projet <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;