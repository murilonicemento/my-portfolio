import { Main } from "./styled";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <p>
          Olá 👋,
          <br />
          meu nome é <span>Murilo Nascimento</span>
          <br />
          Sou estudante de Engenharia de Software e Desenvolvimento Web
        </p>
        <img src="" alt="" />
        <a href="" download>
          Download CV
        </a>
      </Main>
    </>
  );
}
