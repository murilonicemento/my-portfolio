<script setup lang="ts">
import type { ICardsProps } from "@/interfaces/interfaces";
import { ref } from "vue";

const cards = ref<ICardsProps[]>([
  {
    type: "Front end",
    heading: "Napped",
    description:
      "O Napped é uma fonte de informações sobre o mundo nerd, abrangendo séries, filmes, animes e jogos.",
    categories: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    type: "Full Stack",
    heading: "Twitter Clone",
    description:
      " Este é um clone simples do Twitter desenvolvido em PHP, utilizando a arquitetura MVC e um miniframework criado para facilitar o desenvolvimento da aplicação. ",
    categories: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    type: "Front end",
    heading: "Empresa 360",
    description: "",
    categories: ["Vue", "Bootstrap"]
  }
]);
</script>

<template>
  <div v-for="(card, index) in cards" :key="index" class="card">
    <div class="main-content">
      <div class="header">
        <span>{{ card.type }}</span>
      </div>
      <p class="heading">{{ card.heading }}</p>
      <p class="description">{{ card.description }}</p>
      <div class="categories">
        <span v-for="(category, index) in card.categories" :key="index">{{ category }}</span>
      </div>
    </div>
    <div class="footer">Murilo Nascimento</div>
  </div>
</template>

<style scoped lang="css">
.card {
  width: 320px;
  height: 350px;
  padding: 20px;
  color: var(--color-white);
  background:
    linear-gradient(var(--color-black), var(--color-black-hover)) padding-box,
    linear-gradient(145deg, transparent 35%, var(--color-pink), var(--color-blue)) border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card .main-content {
  flex: 1;
}

.card .header span:first-child {
  font-weight: 600;
  color: var(--color-green);
  margin-right: 4px;
}

.card .heading {
  font-size: 24px;
  margin: 24px 0 16px;
  font-weight: 600;
}

.card .description {
  margin-bottom: 20px;
  height: 100px;
}

.card .categories {
  display: flex;
  gap: 8px;
}

.card .categories span {
  background-color: var(--color-pink);
  padding: 4px 8px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 50em;
}

.card .footer {
  font-weight: 600;
  color: var(--color-green);
  margin-right: 4px;
}

.card:hover {
  rotate: 8deg;
}
</style>
