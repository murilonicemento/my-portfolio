<script setup lang="ts">
import { ref } from "vue";
import ok from "@/assets/images/ok.svg";
import error from "@/assets/images/error.svg";
import FormLoader from "./icons/FormLoader.vue";
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
  <div class="form-container">
    <form
      v-if="!sendForm.isSend && !sendForm.error && !sendForm.isLoading"
      class="form"
      @submit.prevent="onSubmit"
    >
      <div class="form-group">
        <label for="name">Nome Completo</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome Completo"
          v-model="form.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="e-mail">E-mail</label>
        <input
          type="email"
          name="e-mail"
          id="e-mail"
          placeholder="E-mail"
          v-model="form.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="subject">Assunto</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Assunto"
          v-model="form.subject"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          v-model="form.message"
          required
        ></textarea>
      </div>
      <button type="submit" class="form-submit-btn">Enviar</button>
    </form>
    <div id="loader-container" v-if="sendForm.isLoading">
      <FormLoader />
    </div>
    <div v-if="sendForm.isSend" id="confirm-send">
      <img :src="ok" alt="Success Icon" />
      <p>
        Obrigado por entrar em contato! Sua mensagem foi enviada e entrarei em contato em breve.
      </p>
    </div>
    <div v-if="sendForm.error" id="error-send">
      <img :src="error" alt="Error Icon" />
      <p>
        Ops! Parece que houve um problema ao enviar sua mensagem. Por favor, tente novamente mais
        tarde ou entre em contato diretamente através de outros canais de comunicação.
      </p>
    </div>
  </div>
</template>

<style>
.form-container {
  width: 100%;

  background:
    linear-gradient(var(--color-black-hover), var(--color-black-hover)) padding-box,
    linear-gradient(145deg, transparent 35%, var(--color-green), var(--color-blue)) border-box;

  border: 2px solid transparent;

  margin-top: 28px;
  padding: 32px 24px;

  font-size: 14px;
  font-family: inherit;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;

  border-radius: 16px;
  background-size: 200% 100%;

  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--color-white);
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #b0b0b0;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: var(--color-white);
  height: 96px;
  border: 1px solid #b0b0b0;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group textarea::placeholder {
  color: #717171;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: var(--color-pink);
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: var(--color-pink);
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%;
  background: var(--color-black-hover);
  border: 1px solid #b0b0b0;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;

  transition: all ease 0.4s;
}

.form-container .form-submit-btn:hover {
  background-color: var(--color-white);
  border-color: var(--color-white);
  transition: all ease 0.4s;
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

@media (min-width: 1280px) {
  #confirm-send p {
    font-size: var(--font-size-md);
  }

  #error-send p {
    width: 600px;
    font-size: var(--font-size-md);
  }
}
</style>
