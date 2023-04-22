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
          Sou um estudante de Engenharia de Software e Desenvolvimento Web, com
          foco em Front-end. Sou extremamente motivado, detalhista e preocupado
          em produzir trabalhos de qualidade. Meu objetivo é atuar como
          Desenvolvedor Front-end em uma empresa inovadora, contribuindo com
          minhas habilidades para o desenvolvimento de soluções web de qualidade
          e alta performance.
        </p>
        <h1>Experiência</h1>
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
