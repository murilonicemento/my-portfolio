<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

interface ILinkRef {
  id: number;
  name: string;
  path: string;
  hash: string;
}

const links = ref<ILinkRef[]>([
  { id: 1, name: "Início", path: "/", hash: "#home" },
  { id: 2, name: "Sobre", path: "/about", hash: "#about" },
  { id: 3, name: "Skills", path: "/skills", hash: "#skills" },
  { id: 4, name: "Contato", path: "/contact", hash: "#contact" }
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
        <RouterLink :to="{ path: link.path, hash: link.hash }" class="nav-link">{{
          link.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.hamburger {
  display: inline-block;
  cursor: pointer;
  margin: 0;
}

.bar {
  width: 28px;
  height: 4px;
  background-color: var(--color-black-hover);
  margin: 5px 0;
  transition: 0.4s;
}

.menu {
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  background-color: var(--color-black-hover);
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

.nav-link {
  width: fit-content;
  text-decoration: none;
  color: var(--color-white);
  display: block;
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
