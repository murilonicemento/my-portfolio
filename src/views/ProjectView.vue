<script setup lang="ts">
import { ref } from "vue";
import { getCard } from "@/services/cardService";
import type { ICardsProps } from "@/interfaces/interfaces";

const card = ref<ICardsProps>(getCard());
</script>

<template>
  <main>
    <h1>{{ card.title }}</h1>
    <img :src="card.img" alt="Project Image" />
    <aside>
      <div class="aside-group">
        <h2>Nome</h2>
        <p>{{ card.heading }}</p>
      </div>
      <div class="aside-group">
        <h2>Tecnologias</h2>
        <div class="aside-tech">
          <span v-for="(tech, index) in card.technologies" :key="index">{{ tech }}</span>
        </div>
      </div>
      <div class="aside-group">
        <h2>Links</h2>
        <a :href="card.github" target="_blank" class="menu__link">GitHub</a>
        <a :href="card.deploy" target="_blank" class="menu__link" v-if="card.deploy">Deploy</a>
      </div>
    </aside>
    <section id="description">
      <h2>Descrição do projeto</h2>
      <p>{{ card.description }}</p>
      <h2>Funcionalidades do projeto</h2>
      <p v-for="(feat, index) in card.features" :key="index">{{ feat }}</p>
    </section>
  </main>
  <footer></footer>
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
  gap: 20px;

  margin-top: 20px;
}

aside .aside-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

aside .aside-group h2 {
  color: #b0b0b0;
}

aside .aside-tech {
  display: flex;
  gap: 8px;
}

aside .aside-tech span {
  background-color: var(--color-pink);
  padding: 4px 8px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 50em;
}

a {
  text-decoration: none;
}

.menu__link {
  color: #fff;
  line-height: 2;
  position: relative;
  padding-right: 4px;
}

.menu__link:hover {
  text-decoration: underline;
}

.menu__link::before {
  content: "";
  width: 6px;
  height: 6px;
  border-top: solid 2px #fff;
  border-right: solid 2px #fff;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%) rotate(45deg);
  transition: transform 0.4s;
}

.menu__link:hover::before {
  transform: translateX(4px) translateY(-50%) rotate(45deg);
}

#description {
  width: 90%;

  display: grid;
  place-items: center;
  gap: 20px;

  margin-bottom: 20px;
}

#description p {
  width: 90%;
}
</style>
