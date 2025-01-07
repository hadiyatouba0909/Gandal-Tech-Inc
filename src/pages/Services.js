import React from 'react';
import { Code, Database, Users, Brain, Cloud, Laptop } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Code className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Développement sur mesure</h3>
            <p className="text-gray-600">Création d'applications web et mobiles adaptées aux besoins spécifiques de chaque client.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Cloud className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Solutions Cloud</h3>
            <p className="text-gray-600">Déploiement et gestion d'infrastructures cloud sécurisées et évolutives.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Database className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Gestion de données</h3>
            <p className="text-gray-600">Optimisation et sécurisation de vos données d'entreprise.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Intelligence Artificielle</h3>
            <p className="text-gray-600">Intégration de solutions IA pour automatiser et optimiser vos processus.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Laptop className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Formation</h3>
            <p className="text-gray-600">Sessions de formation personnalisées pour maîtriser les outils numériques.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Conseil Digital</h3>
            <p className="text-gray-600">Accompagnement stratégique dans votre transformation numérique.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;