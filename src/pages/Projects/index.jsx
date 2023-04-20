import { MyHeader } from "../../components/Header";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";
import { Projects } from "./styled";

export function MyProjects() {
  return (
    <>
      <MyHeader />
      <Main>
        <h1>Projetos</h1>
        <p>Projetos que venho construindo</p>

        <Projects></Projects>
      </Main>
      <MyFooter />
    </>
  );
}
