<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const links = ref([
  { id: 1, name: "Início", path: "/" },
  { id: 2, name: "Sobre", path: "/about" },
  { id: 3, name: "Projetos", path: "/projects" },
  { id: 4, name: "Contato", path: "/contact" }
]);
</script>

<template>
  <header>
    MuriloDev
    <nav>
      <RouterLink :to="link.path" v-for="link in links" :key="link.id">{{ link.name }}</RouterLink>
    </nav>
  </header>
</template>

<style lang="css">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
#menu {
  width: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid blue;
  cursor: pointer;
}

#menu div {
  border: 1px solid red;
}
</style>
