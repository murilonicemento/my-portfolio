<script setup lang="ts">
import github from "@/assets/images/github.svg";
import linkedin from "@/assets/images/linkedin.svg";
import home from "@/assets/images/home-profile-image.png";
</script>

<template>
  <div id="presentation">
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
</style>
