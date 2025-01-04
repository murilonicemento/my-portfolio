<script setup lang="ts">
import { ref } from "vue";
import javascript from "@/assets/images/javascript.svg";
import typescript from "@/assets/images/typescript.svg";
import vuejs from "@/assets/images/vuejs.svg";
import php from "@/assets/images/php.svg";
import js from "@/assets/images/js.svg";
import ts from "@/assets/images/ts.svg";
import csharp from "@/assets/images/csharp.svg";
import dotnet from "@/assets/images/dotnet.svg";
import elephant from "@/assets/images/elephant.svg";
import SkillImage from "./icons/SkillImage.vue";

const techs = ref([
  { name: "Vue", codeImg: vuejs, img: vuejs },
  {
    name: "JavaScript",
    codeImg: js,
    img: javascript
  },
  {
    name: "TypeScript",
    codeImg: ts,
    img: typescript
  },
  { name: "PHP", codeImg: elephant, img: php },
  {
    name: "C#",
    codeImg: csharp,
    img: csharp
  },
  {
    name: ".NET",
    codeImg: dotnet,
    img: dotnet
  }
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
