import React from "react";
import { ArrowRight, Brain, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-32">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transformons Vos Idées en Réalité
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Gandal Tech Inc - L'excellence technologique au service de votre succès
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 text-lg font-medium"
              >
                Démarrer un projet
                <ArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 text-lg font-medium"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Gandal, signifiant "savoir" en Peulh, représente notre engagement 
                à fusionner expertise traditionnelle et innovation moderne.
              </p>
              <p className="text-lg text-gray-600">
                Notre mission est de rendre la technologie accessible à tous, 
                en créant des solutions qui simplifient la transformation digitale 
                tout en préservant une approche humaine.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <img src="/logo12.png" alt="Gandal Tech Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg">
              <Brain className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Création de sites web
              </h3>
              <p className="text-gray-600 mb-4">
                Des sites web modernes et responsives adaptés à vos besoins. 
                Une expérience utilisateur optimale garantie.
              </p>
              <Link
                to="/services"
                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg">
              <Zap className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Applications web
              </h3>
              <p className="text-gray-600 mb-4">
                Des applications web performantes et sur mesure pour répondre 
                à vos besoins spécifiques.
              </p>
              <Link
                to="/services"
                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg">
              <Shield className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Applications mobiles
              </h3>
              <p className="text-gray-600 mb-4">
                Des applications mobiles intuitives et performantes pour 
                Android et iOS.
              </p>
              <Link
                to="/services"
                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Prêt à Transformer Votre Entreprise?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Rejoignez les entreprises qui font confiance à Gandal Tech Inc
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 text-lg font-medium"
          >
            Contactez-nous
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;