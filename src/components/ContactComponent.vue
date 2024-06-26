<script setup lang="ts">
import { ref } from "vue";
import ok from "@/assets/images/ok.svg";
import error from "@/assets/images/error.svg";
import emailjs from "@emailjs/browser";
import type { IForm, ISendForm } from "@/interfaces/interfaces";

const form = ref<IForm>({ name: "", email: "", subject: "", message: "" });
const sendForm = ref<ISendForm>({
  isLoading: false,
  isSend: false,
  error: false
});

const onSubmit = async () => {
  sendForm.value.isLoading = true;
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.value,
      { publicKey: "aqwD4KLRowJA467Ef" }
    );
    console.log("SUCCESS!", response.status, response.text);
    sendForm.value.isSend = true;
    sendForm.value.isLoading = false;
  } catch (error) {
    sendForm.value.error = true;
    sendForm.value.isLoading = false;
  }
};
</script>

<template>
  <h1>Contato</h1>
  <form
    v-if="!sendForm.isSend && !sendForm.error && !sendForm.isLoading"
    @submit.prevent="onSubmit"
  >
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
  <div id="loader-container" v-if="sendForm.isLoading">
    <div id="loader"></div>
  </div>
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

#loader-container {
  display: grid;
  place-items: center;
}

#loader {
  width: 268px;

  margin-top: 8px;
  padding: 8px;

  aspect-ratio: 1;

  border-radius: 50%;

  background: #13fba7;

  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;

  animation: l3 1s infinite linear;
}

@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
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

  #error-send p {
    width: 600px;
    font-size: var(--font-size-md);
  }
}
</style>
