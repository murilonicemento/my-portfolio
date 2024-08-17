<script lang="ts" setup>
import CardComponent from "./CardComponent.vue";
</script>

<template>
  <div class="cards">
    <CardComponent />
  </div>
</template>

<style scoped lang="css">
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 55px;

  margin-top: 68px;
}
</style>
