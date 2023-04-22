import { MyHeader } from "../../components/Header";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";
import { Container } from "./styled";
import profilePicture from "../../assets/images/profilePicture.jpg";
import download from "../../assets/images/download.svg";

export function Home() {
  return (
    <Container>
      <MyHeader />
      <Main>
        <p id="presentation">
          Olá 👋,
          <br />
          meu nome é <span>Murilo Nascimento</span> e sou Desenvolvedor
          Front-end
        </p>
        <a href="/curriculum.pdf" download id="curriculum">
          <img src={download} alt="Download Icon" />
          Download CV
        </a>
        <img src={profilePicture} alt="Profile Picture" id="profilePicture" />
      </Main>
      {/* <MyFooter /> */}
    </Container>
  );
}
