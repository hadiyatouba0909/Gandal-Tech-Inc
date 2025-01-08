import React from "react";
import { Code, Database, Brain, Cloud, Laptop, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Applications Web",
      description: "Applications web sur mesure, performantes et intuitives adaptées à vos besoins spécifiques."
    },
    {
      icon: <Cloud className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Applications Mobiles",
      description: "Applications mobiles natives et cross-platform pour iOS et Android avec une expérience utilisateur optimale."
    },
    {
      icon: <Code className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Sites Web",
      description: "Sites web modernes, responsives et optimisés pour tous les appareils."
    },
    {
      icon: <Database className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Formation Tech",
      description: "Formations professionnelles en développement web, mobile et design. Cours gratuits et premium disponibles."
    },
    {
      icon: <Brain className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Conseil Tech",
      description: "Accompagnement stratégique pour votre transformation digitale et vos projets technologiques."
    },
    {
      icon: <Palette className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Design Graphique",
      description: "Création d'identités visuelles, logos, et supports marketing qui démarquent votre marque."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions technologiques innovantes pour propulser votre entreprise vers le succès
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;