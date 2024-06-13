<script setup lang="ts">
import HamburguerMenu from "@/components/HamburguerMenu.vue";
import HoverCard from "./icons/HoverCard.vue";
</script>

<template>
  <header>
    <HoverCard />
    <HamburguerMenu />
  </header>
</template>

<style scoped lang="css">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}
</style>
