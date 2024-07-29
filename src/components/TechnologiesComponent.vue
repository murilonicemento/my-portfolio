<script setup lang="ts">
import { ref } from "vue";
import html from "@/assets/images/html.svg";
import css from "@/assets/images/css.svg";
import sass from "@/assets/images/sass.svg";
import javascript from "@/assets/images/javascript.svg";
import vuejs from "@/assets/images/vuejs.svg";
import tailwindcss from "@/assets/images/tailwindcss.svg";
import php from "@/assets/images/php.svg";
import linux from "@/assets/images/linux.svg";
import vscode from "@/assets/images/visual-studio-code.svg";
import git from "@/assets/images/git.svg";

const technologies = ref<string[]>([
  html,
  css,
  sass,
  javascript,
  vuejs,
  tailwindcss,
  php,
  linux,
  vscode,
  git
]);
</script>

<template>
  <div id="technologies">
    <img
      :src="technology"
      alt=""
      v-for="(technology, index) in technologies"
      :key="index"
      class="tech-img"
    />
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
