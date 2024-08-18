<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <h1>Contato</h1>
  <ContactForm />
</template>

<style scoped lang="css">
h1 {
  text-align: center;
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--font-size-2xl);
  }
}

@media (min-width: 1280px) {
  h1 {
    font-size: var(--font-size-3xl);
  }
}
</style>
