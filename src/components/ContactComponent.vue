<script setup lang="ts">
import { ref } from "vue";
import ok from "@/assets/images/ok.svg";
import error from "@/assets/images/error.svg";
import emailjs from "@emailjs/browser";

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = ref<IForm>({ name: "", email: "", subject: "", message: "" });
const sendForm = ref<{ isSend: boolean; error: boolean }>({ isSend: false, error: false });

const onSubmit = async () => {
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.value,
      { publicKey: "aqwD4KLRowJA467Ef" }
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      sendForm.value.isSend = true;
    })
    .catch((error) => {
      console.error(error);
      sendForm.value.isSend = false;
      sendForm.value.error = true;
    });
};
</script>

<template>
  <h1>Contato</h1>
  <form v-if="!sendForm.isSend" @submit.prevent="onSubmit">
    <label for="name">Nome Completo</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Nome Completo"
      v-model="form.name"
      required
    />
    <label for="e-mail">E-mail</label>
    <input
      type="email"
      name="e-mail"
      id="e-mail"
      placeholder="E-mail"
      v-model="form.email"
      required
    />
    <label for="subject">Assunto</label>
    <input
      type="text"
      name="subject"
      id="subject"
      placeholder="Assunto"
      v-model="form.subject"
      required
    />
    <label for="message">Mensagem</label>
    <textarea
      name="message"
      id="message"
      placeholder="Mensagem"
      v-model="form.message"
      required
    ></textarea>
    <button type="submit">Enviar</button>
  </form>
  <div v-if="sendForm.isSend" id="confirm-send">
    <img :src="ok" alt="Success Icon" />
    <p>Obrigado por entrar em contato! Sua mensagem foi enviada e entrarei em contato em breve.</p>
  </div>
  <div v-if="sendForm.error" id="error-send">
    <img :src="error" alt="Error Icon" />
    <p>
      Ops! Parece que houve um problema ao enviar sua mensagem. Por favor, tente novamente mais
      tarde ou entre em contato diretamente através dos nossos outros canais de comunicação.
    </p>
  </div>
</template>

<style scoped lang="css">
h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 28px;
}

form label {
  font-size: 14px;
}

form input {
  height: 38px;

  background-color: var(--color-black-hover);

  padding: 8px;

  color: var(--color-white);
}

form input::placeholder,
form textarea::placeholder {
  color: var(--color-white);
  font-size: 14px;
}

form textarea {
  background-color: var(--color-black-hover);

  height: 78px;

  padding: 8px;

  font-size: 14px;
  color: var(--color-white);
}

form button {
  width: 80px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-pink);

  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);

  margin-top: 8px;
  padding: 18px;

  cursor: pointer;
}

#confirm-send {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: justify;
}

#confirm-send p {
  width: 400px;
  text-align: center;
}

#confirm-send img {
  width: 268px;
}

#error-send {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: justify;
}

#error-send img {
  width: 268px;
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--font-size-2xl);
  }
}

@media (min-width: 1280px) {
  h1 {
    font-size: var(--font-size-3xl);
  }

  form label {
    font-size: var(--font-size-md);
  }

  form input {
    height: 42px;
  }

  form input::placeholder,
  form textarea::placeholder {
    font-size: var(--font-size-md);
  }

  form textarea {
    height: 200px;

    font-size: var(--font-size-md);
  }

  #confirm-send p {
    font-size: var(--font-size-md);
  }
}
</style>
