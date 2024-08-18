<script setup lang="ts">
defineProps<{ techs: any }>();
</script>

<template>
  <div v-for="(tech, index) in techs" :key="index" class="tooltip-container">
    <div class="tooltip">
      <div class="profile">
        <div class="user">
          <div class="img">
            <img :src="tech.codeImg" alt="Tech Icon" />
          </div>
          <div class="details">
            <div class="name">{{ tech.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <a class="icon" href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="imageSVG">
            <img :src="tech.img" alt="" class="img" />
          </span>
        </div>
        <div class="text">{{ tech.name }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="css">
.tooltip-container {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 20px;
  border-radius: 10px;
}

.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: 15px;
}

.profile {
  background: var(--color-black);
  border-radius: 15px 20px;
  padding: 15px;
  border: 1px solid var(--color-black-hover);
}

.tooltip-container:hover .tooltip {
  top: -150px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.icon {
  text-decoration: none;
  color: var(--color-white);
  display: block;
  position: relative;
}

.layer {
  width: 75px;
  height: 75px;
  transition: transform 0.3s;
}

.icon:hover .layer {
  transform: rotate(-35deg) skew(20deg);
}

.layer span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-black-hover);
  border-radius: 20px;
  transition: all 0.3s;
}

.layer span,
.text {
  color: var(--color-white);
}

.icon:hover.layer span {
  box-shadow: -1px 1px 3px var(--color-black);
}

.icon .text {
  position: absolute;
  left: 50%;
  bottom: -10px;
  opacity: 0;
  font-weight: 600;
  transform: translateX(-50%);
  transition:
    bottom 0.3s ease,
    opacity 0.3s ease;
}

.icon:hover .text {
  bottom: -40px;
  opacity: 1;
}

.icon:hover .layer span:nth-child(1) {
  opacity: 0.2;
}

.icon:hover .layer span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.icon:hover .layer span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}

.icon:hover .layer span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}

.icon:hover .layer span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.imageSVG {
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.img {
  width: 80px;
  height: 80px;
  font-size: 35px;
  font-weight: 700;
  border: 1px solid var(--color-black);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
}

.img img {
  width: 60px;
  height: 60px;
}

.name {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-white);
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0;
  color: var(--color-white);
}

.about {
  color: var(--color-white);
  padding-top: 5px;
}
</style>
