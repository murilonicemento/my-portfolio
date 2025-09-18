import React from "react";
import { Code, Coffee, Lightbulb } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre <span className="text-purple-400">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou um Desenvolvedor Full Stack apaixonado que prospera em
              transformar desafios de negócios complexos em soluções elegantes e
              escaláveis. Com expertise que vai desde a arquitetura de backend
              com .NET até frameworks modernos de frontend, trago uma abordagem
              holística para o desenvolvimento web.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha jornada no desenvolvimento de software é guiada pela
              curiosidade e pelo compromisso com a excelência. Acredito em
              escrever código limpo e de fácil manutenção, além de me manter
              atualizado com as tecnologias emergentes para oferecer
              experiências excepcionais aos usuários.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Quando não estou programando, você me encontrará explorando novas
              tecnologias, contribuindo para projetos de código aberto ou me
              aprofundando em padrões de arquitetura de sistemas que tornam as
              aplicações mais robustas e eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Arquitetura
                </h3>
              </div>
              <p className="text-gray-300">
                Apaixonado por escrever código sustentável e testável, que
                resista ao teste do tempo.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Foco em inovação
                </h3>
              </div>
              <p className="text-gray-300">
                Sempre explorando novas tecnologias e padrões para resolver
                problemas de forma mais eficaz.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Coffee className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Aprendizado contínuo
                </h3>
              </div>
              <p className="text-gray-300">
                Comprometido em me manter atualizado com as tendências do setor
                e as melhores práticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
