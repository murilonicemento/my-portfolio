import { MyHeader } from "../../components/Header";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";
import {
  Container,
  WorkExperience,
  Education,
  WorkData,
  AssignmentsWork,
} from "./styled";
import building from "../../assets/images/building.svg";
import location from "../../assets/images/location.svg";
import calendar from "../../assets/images/calendar.svg";

export function About() {
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
        <WorkExperience>
          <div>
            <p>Estagiário em Programação Full Stack</p>
            <p>Estágio</p>
          </div>
          <WorkData>
            <span>
              <p>
                <img src={building} alt="Building Icon" />
                Teknisa
              </p>
              <p>
                <img src={location} alt="Location Icon" />
                Belo Horizonte
              </p>
            </span>
            <div>
              <img src={calendar} alt="Calendar Icon" />
              <p>Julh 2023 - atual</p>
            </div>
          </WorkData>
          <AssignmentsWork>
            <ul>
              <li>Atuar com desenvolvimento de software</li>
              <li>Auxiliar time na resolução de bugs</li>
              <li>
                Participar de treinamentos e reuniões voltadas para melhoria de
                produtos e das técnicas de trabalho
              </li>
              <li>
                Executar teste padrão, resultado e funcionalidade dos sistemas
                desenvolvidos pela equipe
              </li>
              <li>Auxiliar na documentação dos sistemas</li>
              <li>
                Adaptar conhecimentos de lógica de programação aos padrões de
                desenvolvimento da Teknisa e aplicá-los na manutenção e melhoria
                contínua de produtos de software
              </li>
            </ul>
          </AssignmentsWork>
          <div className="divider"></div>
        </WorkExperience>
        <WorkExperience>
          <div>
            <p>Estagiário em TI</p>
            <p>Estágio</p>
          </div>
          <WorkData>
            <span>
              <p>
                <img src={building} alt="Building Icon" />
                iLean Gestão de Resultados
              </p>
              <p>
                <img src={location} alt="Location Icon" />
                Belo Horizonte
              </p>
            </span>
            <div>
              <img src={calendar} alt="Calendar Icon" />
              <p>Fev 2023 - Mar 2023</p>
            </div>
          </WorkData>
          <AssignmentsWork>
            <ul>
              <li>
                Desenvolvimento de painéis de visualização de dados em Excel e
                Power Bi
              </li>
              <li>
                Desenvolvimento das competências técnicas e comportamentais para
                as atividades que serão desenvolvidas
              </li>
              <li>
                Extração, Tratamento e Limpeza de fontes de dados de diversas
                origens
              </li>
            </ul>
          </AssignmentsWork>
          <div className="divider"></div>
        </WorkExperience>
        <h1>Educação</h1>
        <Education>
          <div>
            <p>Engenharia de Software</p>
            <p>EAD</p>
          </div>
          <div>
            <div>
              <img src={building} alt="Building Icon" />
              <p>Universidade Estácio de Sá</p>
            </div>
            <div>
              <img src={calendar} alt="Calendar Icon" />
              Fev 2022 - Dez 2025
            </div>
          </div>
          <div className="divider"></div>
        </Education>
      </Main>
      {/* <MyFooter /> */}
    </Container>
  );
}
