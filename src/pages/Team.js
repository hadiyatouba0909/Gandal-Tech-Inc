import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Hadiyatou Ba",
      role: "Co-fondatrice & Développeuse Full-Stack et Lead Designer & UI/UX",
      image: "https://st3.depositphotos.com/1441511/18503/i/450/depositphotos_185033748-stock-photo-young-woman-working-and-programming.jpg",
      bio: "Experte en développement web et mobile, passionnée par la création d'applications innovantes. Maîtrisant les fondamentaux du développement moderne et des frameworks (HTML/CSS, JavaScript, ReactetJs Angular, NodeJs, Laravel, Flutter(Dart)), je consolide quotidiennement mes compétences à travers des projets pratiques. Créative passionné par l'expérience utilisateur et le design d'interfaces modernes.",
      linkedin: "https://linkedin.com/in/hadiyatou-ba",
      github: "https://github.com/hadiyatou",
      email: "hadiyatou@gmail.com"
    },
    {
      name: "Ibrahima Sory Diallo",
      role: "Co-fondateur & Développeur Full-Stack",
      image: "https://activesmag.fr/wp-content/uploads/2022/03/metiers-de-linformatique.jpg",
      bio: "Expert en développement web et mobile, passionné par la création d'applications innovantes. Maîtrisant les fondamentaux du développement moderne et des frameworks (HTML/CSS, JavaScript, ReactetJs Angular, NodeJs, Laravel, Flutter(Dart)), je consolide quotidiennement mes compétences à travers des projets pratiques. Créative passionné par l'expérience utilisateur et le design d'interfaces modernes.",
      linkedin: "https://linkedin.com/in/sarah-diallo",
      github: "https://github.com/sarahdiallo",
      email: "sorydiallo371@gmail.com"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des experts passionnés au service de votre réussite digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-emerald-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;