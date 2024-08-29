<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import SocialMedia from "@/components/icons/SocialMedia.vue";
</script>

<template>
  <HeaderComponent />
  <main>
    <h1>Título</h1>
    <img
      src="https://images.prismic.io/trustedhousesitters/Zk7iYyol0Zci9YD0_typesofbrowncats.png?auto=format%2Ccompress&rect=0%2C0%2C1920%2C800&w=960&h=400"
      alt=""
    />
    <aside>
      <h2>Nome</h2>
      <p>Napped</p>
      <h2>Tecnologias</h2>
      <p>As tecnologias vai aqui</p>
      <h2>Links</h2>
      <a href="">GitHub</a>
      <a href="">Deploy</a>
    </aside>
    <section id="description">
      <h2>Descrição do projeto</h2>
      <p></p>
      <h2>Funcionalidades do projeto</h2>
      <p></p>
    </section>
  </main>
  <footer>
    <SocialMedia />
  </footer>
</template>

<style scoped lang="css">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  margin-top: 20px;
}

img {
  width: 100%;
}

aside {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  margin-top: 20px;
}

#description {
}

footer {
  display: flex;
}
</style>
