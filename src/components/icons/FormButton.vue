<script setup lang="ts">
import paperPlane from "@/assets/images/paper-plane.svg";

defineProps<{ type: "button" | "submit" | "reset" | undefined }>();
</script>

<template>
  <button :type="type">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <img :src="paperPlane" alt="Paper Plane Icon" />
      </div>
    </div>
    <span>Enviar</span>
  </button>
</template>

<style scoped lang="css">
button {
  width: 80px;

  background: var(--color-black-hover);
  color: white;

  margin-top: 10px;
  padding: 0.7em 1em;
  padding-left: 0.9em;

  display: flex;
  align-items: center;

  border: none;
  border-radius: 16px;

  overflow: hidden;
  transition: all 0.2s;

  cursor: pointer;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button img {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover img {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(5em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

@media (min-width: 1280px) {
  button {
    width: 120px;

    font-size: var(--font-size-lg);
  }

  button img {
    width: 24px;
    height: 24px;
  }
}
</style>
