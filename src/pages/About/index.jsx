import { MyHeader } from "../../components/Header";
import { MyFooter } from "../../components/Footer";
import { Main } from "./styled";

export function About() {
  return (
    <>
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
        <section id="workExperience">
          <div>
            <p>Estagiário em TI</p>
            <p>Estágio</p>
          </div>
          <div>
            <p>iLean Gestão de Resultados</p>
            <p>Belo Horizonte</p>
            <p>Fev 2023 - Mar 2023</p>
          </div>
          <div className="divider"></div>
        </section>
        <h1>Educação</h1>
        <section id="education">
          <div>
            <p>Engenharia de Software</p>
            <p>EAD</p>
          </div>
          <div>
            <div>
              <p>Universidade Estácio de Sá</p>
            </div>
            Fev 2022 - Dez 2025
          </div>
          <div className="divider"></div>
        </section>
      </Main>
      <MyFooter />
    </>
  );
}
