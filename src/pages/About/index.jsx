import { Education } from "../../components/Education";
import { MyHeader } from "../../components/Header";
import { WorkExperience } from "../../components/WorkExperience";
import { Main } from "../../styles/globalStyles";
import { Container } from "./styled";

export function About() {
  const assignments = {
    iLean: [
      "Desenvolvimento de painéis de visualização de dados em Excel e Power Bi",
      "Desenvolvimento das competências técnicas e comportamentais para as atividades que serão desenvolvidas",
      "Extração, Tratamento e Limpeza de fontes de dados de diversas origens",
    ],
    teknisa: [
      "Atuar com desenvolvimento de software",
      "Auxiliar time na resolução de bugs",
      "Participar de treinamentos e reuniões voltadas para melhoria de produtos e das técnicas de trabalho",
      "Executar teste padrão, resultado e funcionalidade dos sistemas desenvolvidos pela equipe",
      "Auxiliar na documentação dos sistemas",
      "Adaptar conhecimentos de lógica de programação aos padrões de desenvolvimento da Teknisa e aplicá-los na manutenção e melhoria contínua de produtos de software",
    ],
  };

  const skills = {
    university: [
      "Pensamento Computacional",
      "Lógica da Programação",
      "Programação",
      "Algoritmos",
      "Estruturas de Dados",
      "Desenvolvimento Web",
      "Modelagem de Dados",
      "Requisitos de Sistemas",
    ],
    rocketseat: [
      "Desenvolvimento Front-end",
      "Desenvolvimento Back-end",
      "HTML",
      "CSS",
      "JavaScript",
      "Estruturas de Dados",
      "Programação Orientada a Objetos (POO)",
      "Node.js",
      "JavaScript Assíncrono",
      "Interface de Programação de Aplicativos (API)",
      "React.js",
      "TypeScript",
      "GitHub",
      "SQL",
    ],
    harvard: [
      "Programação",
      "Linguagem C",
      "Algoritmos",
      "Memória",
      "Estrutura de Dados",
      "HTML, CSS e JavaScript",
      "SQL",
      "Python",
      "Flask",
    ],
  };

  return (
    <Container>
      <MyHeader />
      <Main>
        <h1>Sobre Mim</h1>
        <p>
          Meu nome é Murilo, tenho 19 anos e sou um jovem apaixonado por
          tecnologia, inovação e tudo que envolve o mundo da programação. Logo
          após concluir o ensino médio em 2021, mergulhei de cabeça no
          fascinante universo da programação web. Hoje, posso dizer que tenho
          conhecimentos sólidos em HTML, CSS, SASS, JavaScript, Git, React.js e
          SQL. Também, gostaria de acrescentar que estou mergulhando meus
          estudos em TypeScript, um superset do JavaScript que amplia ainda mais
          minhas habilidades como desenvolvedor web. Com dedicação e empenho,
          estou me familiarizando com os recursos e benefícios que o TypeScript
          oferece, permitindo-me criar código mais robusto, seguro e escalável.
          Além disso, estou atualmente cursando Engenharia de Software, buscando
          aprimorar minhas habilidades e me tornar um desenvolvedor web
          completo. Sou motivado e estou sempre em busca de desafios que me
          permitam expandir minhas competências e aprimorar meu conhecimento.
          Sou uma pessoa organizada, que valoriza a busca constante por
          aprendizado e crescimento pessoal. Cada linha de código que escrevo é
          uma oportunidade de criar algo único e surpreendente. Imerso nesse
          emocionante campo, estou determinado a deixar minha marca no mundo da
          programação.
        </p>
        <h1>Experiência</h1>
        <WorkExperience
          title="Estagiário em Programação Full Stack"
          jobType="Estágio"
          company="Teknisa"
          city="Belo Horizonte"
          startDate="Julh"
          startYear="2023"
          endDate="atual"
          assignments={assignments.teknisa}
        />
        <WorkExperience
          title="Estagiário em TI"
          jobType="Estágio"
          company="iLean Gestão de Resultados"
          city="Belo Horizonte"
          startDate="Fev"
          startYear="2023"
          endDate="Mar"
          endYear="2023"
          assignments={assignments.iLean}
        />
        <h1>Educação</h1>
        <Education
          course="Engenharia de Software"
          modality="EAD"
          university="Universidade Estácio de Sá"
          startDate="Fev"
          startYear="2022"
          endDate="Dez"
          endYear="2025"
          skills={skills.university}
        />
        <Education
          course="CS50"
          modality="Curso EAD"
          university="Harvard"
          startDate="Jan"
          startYear="2023"
          endDate="Mar"
          endYear="2023"
          skills={skills.harvard}
        />
        <Education
          course="Curso Discover"
          modality="Curso EAD"
          university="Rocketseat"
          startDate="Jun"
          startYear="2022"
          endDate="Jun"
          endYear="2023"
          skills={skills.rocketseat}
        />
      </Main>
    </Container>
  );
}
