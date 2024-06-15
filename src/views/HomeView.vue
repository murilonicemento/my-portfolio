<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabComponent from "@/components/TabComponent.vue";
import github from "@/assets/images/github.svg";
import linkedin from "@/assets/images/linkedin.svg";
import home from "@/assets/images/home-profile-image.png";

const tabs = ref<string[]>(["Bio", "Educação", "Experiência", "Prêmios", "Certificações"]);
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

      <img :src="home" alt="Image of a person with black jacket" id="home-image" />
    </section>
    <section>
      <h3>Sobre mim</h3>
      <img src="" alt="" />
      <TabComponent :tabs="tabs" />
    </section>
    <section>
      <h3>Tecnologias</h3>
    </section>
    <section>
      <h3>Projetos</h3>
    </section>
    <section>
      <h3>Contato</h3>
    </section>
  </main>
</template>

<style scoped lang="css">
section {
  width: 90%;
  margin: auto;
  height: 100vh;
}

#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 34px;
}

#home h2 {
  color: var(--color-green);
}

#home h1,
h2,
p {
  width: 100%;
}

#home-image {
  width: 270px;
  height: 270px;
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
</style>
