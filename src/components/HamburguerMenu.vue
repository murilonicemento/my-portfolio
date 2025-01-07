<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import type { ILinkRef } from "@/interfaces/interfaces";

const links = ref<ILinkRef[]>([
  { id: 1, name: "Início", hash: "#home" },
  { id: 2, name: "Sobre", hash: "#about" },
  { id: 3, name: "Skills", hash: "#skills" },
  { id: 4, name: "Projetos", hash: "#projects" },
  { id: 5, name: "Contato", hash: "#contact" }
]);

const isOpen = ref<boolean>(false);

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav>
    <input type="checkbox" id="checkbox" @click="toggleMenu" />
    <label for="checkbox" class="toggle">
      <div class="bars" id="bar1"></div>
      <div class="bars" id="bar2"></div>
      <div class="bars" id="bar3"></div>
    </label>
    <ul :class="{ menu: true, open: isOpen }">
      <li v-for="link in links" :key="link.id">
        <RouterLink :to="{ path: '/', hash: link.hash }" class="nav-link">{{
          link.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="css">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  transition-duration: 0.5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: var(--color-blue);
  border-radius: 4px;
}

#bar2 {
  transition-duration: 0.8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}

.menu {
  position: absolute;
  top: 50px;
  right: 35px;

  width: 200px;

  background-color: var(--color-black-hover);

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;

  visibility: hidden;

  border-radius: 10px;
}

.menu.open {
  visibility: visible;
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

@media (min-width: 768px) {
  .toggle,
  #checkbox {
    display: none;
  }

  .menu {
    position: static;
    flex-direction: row;
    background: none;
    box-shadow: none;
    width: auto;
    visibility: visible;
  }

  .menu li {
    padding: 0 10px;
  }

  .menu li a {
    color: var(--color-white);
  }

  .nav-link {
    color: var(--color-black-hover);
  }
}
</style>
