import { Form } from "./styled";
import { Main } from "../../styles/globalStyles";

export function MyForm() {
  return (
    <Main>
      <h1>Entre em contato Comigo</h1>
      <Form action="">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" placeholder="Nome" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          cols="30"
          rows="10"
        ></textarea>
        <button>Enviar</button>
      </Form>
    </Main>
  );
}
