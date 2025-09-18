import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "murilo_nascimento22@outlook.com",
      href: "mailto:murilo_nascimento22@outlook.com",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/murilonicemento",
      href: "https://github.com/murilonicemento",
      color: "from-gray-500 to-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/murilonicemento",
      href: "https://linkedin.com/in/murilonicemento",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos nos <span className="text-purple-400">Conectar</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para discutir seu próximo projeto ou explorar oportunidades
            de colaboração? Adoraria ouvir de você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Entre em contato
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Se você está procurando um desenvolvedor para integrar sua
                  equipe, precisa de consultoria em um projeto ou deseja
                  discutir possíveis colaborações, estou sempre aberto a
                  conversas interessantes e oportunidades.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Tenho particular interesse em projetos que envolvam
                  desenvolvimento web moderno, arquitetura de sistemas e
                  soluções inovadoras que ampliem os limites do que é possível.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin size={20} className="text-purple-400" />
                <span>
                  Disponível para trabalho remoto em qualquer lugar do mundo
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className={`bg-gradient-to-r ${contact.color} p-0.5 rounded-xl`}
                  >
                    <div className="bg-gray-800 rounded-xl p-6 group-hover:bg-gray-700 transition-colors duration-300">
                      <div className="flex items-center">
                        <div
                          className={`bg-gradient-to-r ${contact.color} p-3 rounded-lg mr-4`}
                        >
                          <contact.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {contact.label}
                          </h4>
                          <p className="text-gray-300">{contact.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}

              <div className="mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Tempo de Resposta
                </h4>
                <p className="text-gray-300">
                  Normalmente respondo e-mails dentro de 24 horas. Para assuntos
                  urgentes, mensagens pelo LinkedIn costumam receber a resposta
                  mais rapidamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
