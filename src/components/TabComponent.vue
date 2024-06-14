<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps<{ tabs: string[] }>();

const selectedTab = ref(0);

const selectTab = (index: number) => {
  selectedTab.value = index;
};
</script>

<template>
  <div>
    <div role="group" class="tab-buttons">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: selectedTab === index }]"
        @click="() => selectTab(index)"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content">
      <div v-if="selectedTab === 0">Conteúdo da Bio</div>
      <div v-else-if="selectedTab === 1">Conteúdo da Educação</div>
      <div v-else-if="selectedTab === 2">Conteúdo da Experiência</div>
      <div v-else-if="selectedTab === 3">Conteúdo dos Prêmios</div>
      <div v-else-if="selectedTab === 4">Conteúdo das Certificações</div>
    </div>
  </div>
</template>

<style scoped lang="css">
.tab-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.tab-button {
  background: none;
  border: 1px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
}
.tab-button.active {
  background-color: #42b983;
  color: white;
}
.tab-content {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
