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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;

  margin-top: 68px;
}

@media (min-width: 1280px) {
  .cards {
    flex-direction: row;
  }
}
</style>
