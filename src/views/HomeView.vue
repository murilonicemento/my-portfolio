<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabComponent from "@/components/TabComponent.vue";
import github from "@/assets/images/github.svg";
import linkedin from "@/assets/images/linkedin.svg";
import home from "@/assets/images/home-profile-image.png";
import about from "@/assets/images/about-profile-image.png";
import html from "@/assets/images/html.svg";
import css from "@/assets/images/css.svg";
import sass from "@/assets/images/sass.svg";
import javascript from "@/assets/images/javascript.svg";
import vuejs from "@/assets/images/vuejs.svg";
import tailwindcss from "@/assets/images/tailwindcss.svg";
import php from "@/assets/images/php.svg";
import linux from "@/assets/images/linux.svg";
import vscode from "@/assets/images/visual-studio-code.svg";
import git from "@/assets/images/git.svg";

const tabs = ref<string[]>(["Bio", "Educação", "Experiência"]);
const technologies = ref<string[]>([
  html,
  css,
  sass,
  javascript,
  vuejs,
  tailwindcss,
  php,
  linux,
  vscode,
  git
]);
</script>

<template>
  <HeaderComponent />
  <main>
    <section id="home">
      <h1>Olá! Me chamo Murilo sou um</h1>
      <h2>Desenvolvedor FullStack</h2>
      <p>
        Seja bem-vindo(a) ao meu portfólio! Explore meus trabalhos, conheça minhas habilidades e
        ideias.
      </p>
      <div id="social-media">
        <a href="https://www.linkedin.com/in/murilonicemento/" target="_blank">
          <img :src="linkedin" alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/murilonicemento" target="_blank">
          <img :src="github" alt="GitHub Logo" />
        </a>
      </div>

      <img :src="home" alt="Image of a person with black jacket" id="home-profile-image" />
    </section>
    <section id="about">
      <h1>Sobre mim</h1>
      <img
        :src="about"
        alt="Profile Image of a person with branch cyber lines in the head"
        id="about-profile-image"
      />
      <TabComponent :tabs="tabs" />
    </section>
    <section id="skills">
      <h1>Skills</h1>
      <div id="technologies">
        <img
          :src="technology"
          alt=""
          v-for="(technology, index) in technologies"
          :key="index"
          class="tech-img"
        />
      </div>
    </section>
    <section id="contact">
      <h1>Contato</h1>
      <form>
        <label for="name">Nome Completo</label>
        <input type="text" name="name" id="name" placeholder="Nome Completo" />
        <label for="e-mail">E-mail</label>
        <input type="email" name="e-mail" id="e-mail" placeholder="E-mail" />
        <label for="subject">Assunto</label>
        <input type="text" name="subject" id="subject" placeholder="Assunto" />
        <label for="message">Mensagem</label>
        <textarea name="message" id="message" placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
</template>

<style scoped lang="css">
section {
  width: 90%;
  height: 100vh;

  margin: auto;
}

#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 68px;
}

#home h2 {
  color: var(--color-green);
}

#home h1,
h2,
p {
  width: 100%;
}

#home-profile-image {
  width: 268px;
  height: 268px;
}

#social-media {
  width: 100%;
  height: auto;

  margin-top: 8px;

  display: flex;
  gap: 14px;
}

#social-media a {
  width: 32px;
  height: 32px;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-green);
  border-radius: 50%;

  cursor: pointer;
}

#social-media a img {
  width: 20px;
  height: 20px;
}

#about {
  margin-top: 68px;
}

#about h1 {
  text-align: center;
  color: var(--color-white);

  margin-bottom: 28px;
}

#about-profile-image {
  width: 268px;
  height: 268px;

  border-radius: 50%;
}

#skills {
  margin-top: 140px;
}

#skills h1 {
  text-align: center;
}

#technologies {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  margin-top: 20px;
}

.tech-img {
  width: 58px;

  filter: grayscale(100%);
  transition: filter 0.4s ease-in-out;

  cursor: pointer;
}

.tech-img:hover {
  filter: none;
}

#contact {
  display: flex;
  flex-direction: column;
}

#contact h1 {
  text-align: center;
}

#contact form {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

#contact form label {
  font-size: 14px;
}

#contact form input {
  background-color: var(--color-black-hover);

  height: 38px;

  padding: 4px;
}

#contact form input::placeholder,
#contact form textarea::placeholder {
  color: var(--color-white);
}

#contact form textarea {
  background-color: var(--color-black-hover);

  height: 78px;

  padding: 4px;

  font-size: 14px;
}

#contact form button {
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
</style>
