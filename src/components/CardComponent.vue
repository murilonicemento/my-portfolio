<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { ICardsProps } from "@/interfaces/interfaces";

const cards = ref<ICardsProps[]>([
  {
    type: "Front end",
    heading: "Napped",
    img: "",
    description:
      "O Napped é uma fonte de informações sobre o mundo nerd, abrangendo séries, filmes, animes e jogos.",
    features: "",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "",
    deploy: "",
    route: "napped"
  },
  {
    type: "Full Stack",
    heading: "Twitter Clone",
    img: "",
    description:
      " Este é um clone simples do Twitter desenvolvido em PHP, utilizando a arquitetura MVC e um miniframework criado para facilitar o desenvolvimento da aplicação. ",
    features: "",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "",
    deploy: "",
    route: "twitter-clone"
  },
  {
    type: "Front end",
    heading: "Multi Step Form",
    img: "",
    description:
      "Este projeto é um exemplo de um Multi-Step Form criado utilizando as tecnologias React, Typescript, Styled Components, Context API e Hook Form. O objetivo deste formulário é capturar informações dos usuários em várias etapas, tornando o processo mais fácil e intuitivo. ",
    features: "",
    technologies: ["React", "TypeScript", "CSS in JS"],
    github: "",
    deploy: "",
    route: "multi-step-form"
  }
]);
const router = useRouter();
const emit = defineEmits<{
  (e: "redirect", card: ICardsProps): void;
}>();

const redirect = (card: ICardsProps): void => {
  router.push({ name: "project", params: { projectName: card.route } });
  emit("redirect", card);
};
</script>

<template>
  <div v-for="(card, index) in cards" :key="index" class="card" @click="redirect(card)">
    <div class="main-content">
      <div class="header">
        <span>{{ card.type }}</span>
      </div>
      <p class="heading">{{ card.heading }}</p>
      <p class="description">{{ card.description }}</p>
      <div class="categories">
        <span v-for="(technology, index) in card.technologies" :key="index">{{ technology }}</span>
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
