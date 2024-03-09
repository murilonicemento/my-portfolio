import { useRef, useState } from "react";
import { isEmail } from "validator";
import { Form } from "./styled";
import { Main } from "../../styles/globalStyles";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

    const toastId = toast.loading("Carregando...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("Mensagem enviada com sucesso");
      })
      .catch((error) => {
        toast.error("Erro ao enviar a mensagem");
      })
      .finally(() => {
        toast.dismiss(toastId);
      });

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
          placeholder="Stephen Clark"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
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
    </Main>
  );
}
