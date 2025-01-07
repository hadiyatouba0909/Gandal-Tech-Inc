import React from 'react';
import { ArrowRight, Code, Database, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenue chez Gandal Tech Inc
            </h1>
            <p className="text-xl mb-8">
              Une startup numérique innovante dédiée à la création de solutions technologiques modernes et accessibles.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Commencer un projet
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Database className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestion des données</h3>
              <p className="text-gray-600">Simplification et optimisation de la gestion des données.</p>
            </div>
            <div className="text-center p-6">
              <Code className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatisation</h3>
              <p className="text-gray-600">Automatisation intelligente des processus métier.</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Favoriser la collaboration entre individus et organisations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;