<script setup lang="ts">
import home from "@/assets/images/home-profile-image.png";
import SocialMedia from "./icons/SocialMedia.vue";
</script>

<template>
  <div id="presentation">
    <h1>Olá! Me chamo Murilo sou um</h1>
    <h2>Desenvolvedor Full Stack</h2>
    <p>
      Seja bem-vindo(a) ao meu portfólio! Explore meus trabalhos, conheça minhas habilidades e
      ideias.
    </p>
    <div id="social-media">
      <SocialMedia />
    </div>
  </div>
  <img :src="home" alt="Image of a person with black jacket" id="home-profile-image" />
</template>

<style scoped lang="css">
h2 {
  color: var(--color-green);
}

p {
  font-size: 14px;
}

#home-profile-image {
  width: 260px;
  height: 260px;
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

@media (min-width: 768px) {
  #presentation {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h1 {
    font-size: var(--font-size-2xl);
  }

  h2 {
    font-size: var(--font-size-xl);
  }
}

@media (min-width: 1280px) {
  h1 {
    width: 80%;
    font-size: var(--font-size-3xl);
  }

  h2 {
    font-size: var(--font-size-2xl);
  }

  p {
    font-size: var(--font-size-md);
  }

  #home-profile-image {
    width: 300px;
    height: 300px;
  }
}
</style>
