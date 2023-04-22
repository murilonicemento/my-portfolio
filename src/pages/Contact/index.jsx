import { MyHeader } from "../../components/Header";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";
import { Form } from "./styled";

export function Contact() {
  return (
    <>
      <MyHeader />
      <Main>
        <Form>
          <p>
            Formulário em desenvolvimento. Porém, se quiser entre em contato
            comigo pelas minhas redes sociais ou por esse e-mail:
          </p>
          <p>murilo_nascimento22@outlook.com</p>
        </Form>
      </Main>
      {/* <MyFooter /> */}
    </>
  );
}
