<template>
  <div class="boxContainer">
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box4"></div>
    <div class="box box5"></div>
  </div>
</template>

<style scoped lang="css">
@keyframes quiet {
  25% {
    transform: scaleY(0.6);
  }
  50% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(0.8);
  }
}

@keyframes normal {
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(0.6);
  }
}
@keyframes loud {
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(1.2);
  }
}

.boxContainer {
  display: flex;
  justify-content: space-between;
  height: 36px;
  width: calc((var(--boxSize) + var(--gutter)) * 5);
  cursor: pointer;
}

.box {
  transform: scaleY(0.4);
  height: 100%;
  width: var(--boxSize);
  background: var(--color-pink);
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  border-radius: 8px;
}

.box1 {
  animation-name: quiet;
}

.box2 {
  animation-name: normal;
}

.box3 {
  animation-name: quiet;
}

.box4 {
  animation-name: loud;
}

.box5 {
  animation-name: quiet;
}
</style>
