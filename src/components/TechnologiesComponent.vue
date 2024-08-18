<script setup lang="ts">
import { ref } from "vue";
import html from "@/assets/images/html.svg";
import css from "@/assets/images/css.svg";
import sass from "@/assets/images/sass.svg";
import javascript from "@/assets/images/javascript.svg";
import typescript from "@/assets/images/typescript.svg";
import vuejs from "@/assets/images/vuejs.svg";
import tailwindcss from "@/assets/images/tailwindcss.svg";
import php from "@/assets/images/php.svg";
import tag from "@/assets/images/tag.svg";
import brackets from "@/assets/images/brackets.svg";
import s from "@/assets/images/s.svg";
import js from "@/assets/images/js.svg";
import ts from "@/assets/images/ts.svg";
import elephant from "@/assets/images/elephant.svg";
import SkillImage from "./icons/SkillImage.vue";

const techs = ref([
  { name: "HTML", description: "Linguagem de Marcação de Hipertexto", codeImg: tag, img: html },
  { name: "CSS", description: "Linguagem de Marcação de Hipertexto", codeImg: brackets, img: css },
  { name: "SASS", description: "Linguagem de Marcação de Hipertexto", codeImg: s, img: sass },
  {
    name: "JavaScript",
    description: "Linguagem de Marcação de Hipertexto",
    codeImg: js,
    img: javascript
  },
  {
    name: "TypeScript",
    description: "Linguagem de Marcação de Hipertexto",
    codeImg: ts,
    img: typescript
  },
  { name: "Vue", description: "Linguagem de Marcação de Hipertexto", codeImg: vuejs, img: vuejs },
  {
    name: "Tailwind CSS",
    description: "Linguagem de Marcação de Hipertexto",
    codeImg: tailwindcss,
    img: tailwindcss
  },
  { name: "PHP", description: "Linguagem de Marcação de Hipertexto", codeImg: elephant, img: php }
]);
</script>
<template>
  <div id="technologies">
    <SkillImage :techs="techs" />
  </div>
</template>

<style scoped lang="css">
#technologies {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 55px;
  flex-wrap: wrap;

  margin-top: 28px;
}
</style>
