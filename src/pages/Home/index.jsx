import { Main } from "./styled";
import { MyHeader } from "../../components/Header";
import profilePicture from "../../assets/images/profilePicture.jpg";

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
        <a href="/curriculum.pdf" download>
          Download CV
        </a>
        <img src={profilePicture} alt="Profile Picture" />
      </Main>
    </>
  );
}
