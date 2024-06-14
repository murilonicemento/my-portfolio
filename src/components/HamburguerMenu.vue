<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

interface ILinkRef {
  id: number;
  name: string;
  path: string;
}

const links = ref<ILinkRef[]>([
  { id: 1, name: "Início", path: "/" },
  { id: 2, name: "Sobre", path: "/about" },
  { id: 3, name: "Projetos", path: "/projects" },
  { id: 4, name: "Contato", path: "/contact" }
]);

const isOpen = ref<boolean>(false);

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <div class="hamburger" @click="toggleMenu">
      <div :class="{ bar: true, bar1: true, change: isOpen }"></div>
      <div :class="{ bar: true, bar2: true, change: isOpen }"></div>
      <div :class="{ bar: true, bar3: true, change: isOpen }"></div>
    </div>
    <ul v-if="isOpen" class="menu">
      <li v-for="link in links" :key="link.id">
        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.hamburger {
  display: inline-block;
  cursor: pointer;
  margin: 0px;
}

.bar {
  width: 28px;
  height: 4px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
}

/* .change.bar1 {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.change.bar2 {
  opacity: 0;
}

.change.bar3 {
  transform: rotate(45deg) translate(-6px, -6px);
} */

.menu {
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  background-color: #333;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.menu li {
  padding: 12px 16px;
}

.menu li a {
  text-decoration: none;
  color: var(--color-white);
  display: block;
}
</style>
