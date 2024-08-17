<script setup lang="ts">
import { ref } from "vue";
import html from "@/assets/images/html.svg";
import css from "@/assets/images/css.svg";
import sass from "@/assets/images/sass.svg";
import javascript from "@/assets/images/javascript.svg";
import vuejs from "@/assets/images/vuejs.svg";
import tailwindcss from "@/assets/images/tailwindcss.svg";
import php from "@/assets/images/php.svg";
import SkillImage from "./icons/SkillImage.vue";

const technologies = ref([
  { name: "HTML", description: "Linguagem de Marcação de Hipertexto", img: html },
  { name: "CSS", description: "Linguagem de Marcação de Hipertexto", img: css },
  { name: "SASS", description: "Linguagem de Marcação de Hipertexto", img: sass },
  { name: "JavaScript", description: "Linguagem de Marcação de Hipertexto", img: javascript },
  { name: "TypeScript", description: "Linguagem de Marcação de Hipertexto", img: "" },
  { name: "Vue", description: "Linguagem de Marcação de Hipertexto", img: vuejs },
  { name: "Tailwind CSS", description: "Linguagem de Marcação de Hipertexto", img: tailwindcss },
  { name: "PHP", description: "Linguagem de Marcação de Hipertexto", img: php }
]);
</script>
<template>
  <div id="technologies">
    <SkillImage :tech="technologies" />
    <!-- <img
      :src="technology"
      alt=""
      v-for="(technology, index) in technologies"
      :key="index"
      class="tech-img"
    /> -->
  </div>
</template>

<style scoped lang="css">
#technologies {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  margin-top: 28px;
}

.tech-img {
  width: 58px;

  filter: grayscale(100%);
  transition: filter 0.4s ease-in-out;

  cursor: pointer;
}

.tech-img:hover {
  filter: none;
}

@media (min-width: 1280px) {
  .tech-img {
    width: 100px;
  }
}
</style>
