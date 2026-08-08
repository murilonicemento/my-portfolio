import React from "react";
import {
  Building,
  Calendar,
  ArrowRight,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Alumisoft",
      period: "2025",
      type: "current",
      icon: Building,
      description:
        "Atuo na modernização e reescrita de sistemas legados utilizando C#/.NET, Clean Architecture, DDD e uma abordagem de monólito modular. Participo desde a definição de requisitos e modelagem de domínio até a implementação das soluções, trabalhando com integrações entre sistemas, mensageria assíncrona, caching e processamento distribuído. Também contribuo para a qualidade e evolução contínua dos sistemas por meio de testes automatizados, CI/CD, Docker e decisões de arquitetura.",
      responsibilities: [
        "Reescrever sistemas legados, estruturando aplicações modernas, modulares e sustentáveis",
        "Participar da definição de requisitos, modelagem de domínio e decisões de arquitetura",
        "Desenvolver e evoluir aplicações utilizando C#/.NET, ASP.NET Core e Entity Framework Core",
        "Implementar integrações com sistemas externos por meio de APIs, arquivos e serviços SOAP",
        "Desenvolver comunicação assíncrona utilizando RabbitMQ e processamento serverless com Azure Functions",
        "Otimizar acesso a dados utilizando tuning de consultas e caching com Redis",
        "Implementar testes automatizados e práticas de CI/CD utilizando xUnit e Azure Pipelines",
        "Utilizar Docker para padronização e isolamento dos ambientes de desenvolvimento",
      ],
      technologies: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "ASP.NET MVC",
        ".NET Framework",
        "Entity Framework Core",
        "xUnit",
        "SQL",
        "SQL Server",
        "Redis",
        "RabbitMQ",
        "Azure Functions",
        "Azure DevOps",
        "Azure Pipelines",
        "Docker",
        "TypeScript",
        "React",
        "Git",
        "Clean Architecture",
        "DDD",
        "SOLID",
        "Design Patterns",
      ],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Teknisa",
      period: "2024 - 2025",
      type: "past",
      icon: Building,
      description:
        "Contribuo para a modernização de sistemas de gestão de serviços de alimentação, desenvolvendo soluções que otimizam operações, aumentam a eficiência e apoiam processos de tomada de decisão.",
      responsibilities: [
        "Migrar sistemas legados para versões modernas e mais eficientes",
        "Aprimorar processos de gestão de compras e cadeia de suprimentos",
        "Participar ativamente de cerimônias ágeis e iniciativas de melhoria contínua",
        "Colaborar no desenvolvimento do módulo de suprimentos do TecFood",
        "Garantir isolamento e padronização em ambientes de desenvolvimento",
        "Produzir relatórios que auxiliam gestores em decisões estratégicas",
      ],
      technologies: [
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "PHP",
        "SQL",
        "Oracle",
        "BIRT",
        "Git",
        "GitLab",
        "Docker",
        "SOLID",
        "Scrum",
      ],
      gradient: "from-red-500 to-yellow-500",
    },
    {
      title: "Estagiário - Desenvolvedor Full Stack",
      company: "Teknisa",
      period: "2023 - 2024",
      type: "past",
      icon: GraduationCap,
      description:
        "Adquiri experiência prática em desenvolvimento web full-stack por meio de projetos que fortaleceram minhas habilidades em criação de soluções modernas e eficazes.",
      responsibilities: [
        "Contribuir no desenvolvimento de módulos de sistemas corporativos",
        "Elaborar relatórios para apoiar gestores em tomadas de decisão",
        "Participar ativamente de cerimônias ágeis e iniciativas de melhoria contínua",
      ],
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "SQL",
        "Oracle",
        "BIRT",
        "Git",
        "GitLab",
        "Scrum",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Estagiário - Business Intelligence",
      company: "iLean Gestão de Resultados",
      period: "2023",
      type: "past",
      icon: BarChart3,
      description:
        "Focado em análise de dados e business intelligence, transformando informações em insights acionáveis que apoiam decisões estratégicas e melhoria de processos.",
      responsibilities: [
        "Desenvolver painéis de dados para acompanhamento e tomada de decisão",
        "Extrair, tratar e organizar dados provenientes de múltiplas fontes",
        "Contribuir para o aprimoramento de processos e capacitação em BI",
        "Participar ativamente de cerimônias ágeis e iniciativas de melhoria contínua",
      ],
      technologies: [
        "Excel",
        "Power BI",
        "SQL",
        "Análise de Dados",
        "Design de Dashboards",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experiência <span className="text-purple-400">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <exp.icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-purple-400 text-lg font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center text-gray-400 mb-4">
                            <Calendar size={16} className="mr-2" />
                            <span>{exp.period}</span>
                            {exp.type === "current" && (
                              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                Atual
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white flex items-center">
                            <ArrowRight
                              size={16}
                              className="text-purple-400 mr-2"
                            />
                            Responsabilidades chaves
                          </h4>
                          <ul className="space-y-2 text-gray-300">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white flex items-center">
                            <ArrowRight
                              size={16}
                              className="text-blue-400 mr-2"
                            />
                            Tecnologias chaves
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
