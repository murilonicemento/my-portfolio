import { Main } from "./styled";
import { MyHeader } from "../../components/Header";

export function Home() {
  return (
    <>
      <MyHeader />
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
