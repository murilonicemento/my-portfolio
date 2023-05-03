import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { isEmail } from "validator";
import { Form } from "./styled";
import { Main } from "../../styles/globalStyles";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export function MyForm() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    let formErros = false;

    if (name.length < 3 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }
    if (!isEmail(email)) {
      formErros = true;
      toast.error("E-mail inválido");
    }

    if (formErros) return;

    emailjs
      .sendForm(
        "gmailMessage",
        "template_cx8ffi7",
        form.current,
        "FNMdjfoTKs8aGX9bS"
      )
      .then(
        (result) => {
          toast.success("Mensagem enviada com sucesso");
        },
        (error) => {
          toast.error(error.message);
        }
      );

    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      event.target.reset();
    }, 1000);
  };

  return (
    <Main>
      <h1>Entre em Contato Comigo</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          autoComplete="off"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="subject">Assunto</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Assunto"
          autoComplete="off"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
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
      <ToastContainer />
    </Main>
  );
}
