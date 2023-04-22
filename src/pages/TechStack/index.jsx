import { MyHeader } from "../../components/Header";
import { MyStacks } from "../../components/Stacks";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";
import { Container } from "./styled";

export function TechStack() {
  return (
    <Container>
      <MyHeader />
      <Main>
        <h1>Tecnologias</h1>
        <p>Tecnologias que venho trabalhando recentemente</p>
        <MyStacks />
      </Main>
      {/* <MyFooter /> */}
    </Container>
  );
}
