<script setup lang="ts">
import { ref } from "vue";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger
} from "radix-vue";
import SoundWave from "./SoundWave.vue";

const hoverState = ref(false);
</script>

<template>
  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger
      class="ImageTrigger"
      href="https://twitter.com/radix_ui"
      target="_blank"
      rel="noreferrer noopener"
    >
      <SoundWave />
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent class="HoverCardContent" :side-offset="5">
        <div :style="{ display: 'flex', flexDirection: 'column', gap: 7 }">
          <img
            class="Image large"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
          <div :style="{ display: 'flex', flexDirection: 'column', gap: 15 }">
            <div>
              <div class="Text bold">Radix</div>
              <div class="Text faded">@radix_ui</div>
            </div>
            <div class="Text">
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </div>
            <div :style="{ display: 'flex', gap: 15 }">
              <div :style="{ display: 'flex', gap: 5 }">
                <div class="Text bold">0</div>
                <div class="Text faded">Following</div>
              </div>
              <div :style="{ display: 'flex', gap: 5 }">
                <div class="Text bold">2,900</div>
                <div class="Text faded">Followers</div>
              </div>
            </div>
          </div>
        </div>

        <HoverCardArrow class="HoverCardArrow" :width="8" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>

<style scoped lang="css">
/* reset */
a {
  all: unset;
}

.HoverCardContent {
  border-radius: 6px;
  padding: 20px;
  width: 300px;
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.HoverCardContent[data-side="top"] {
  animation-name: slideDownAndFade;
}
.HoverCardContent[data-side="right"] {
  animation-name: slideLeftAndFade;
}
.HoverCardContent[data-side="bottom"] {
  animation-name: slideUpAndFade;
}
.HoverCardContent[data-side="left"] {
  animation-name: slideRightAndFade;
}

.HoverCardArrow {
  fill: white;
}

.ImageTrigger {
  cursor: pointer;
  border-radius: 100%;
  display: inline-block;
}
.ImageTrigger:focus {
  box-shadow: 0 0 0 2px white;
}

.Image {
  display: block;
  border-radius: 100%;
}
.Image.normal {
  width: 45px;
  height: 45px;
}
.Image.large {
  width: 60px;
  height: 60px;
}

.Text {
  margin: 0;
  color: var(--mauve-12);
  font-size: 15px;
  line-height: 1.5;
}
.Text.faded {
  color: var(--mauve-10);
}
.Text.bold {
  font-weight: 500;
}

@keyframes slideUpAndFade {
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRightAndFade {
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideDownAndFade {
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeftAndFade {
  0% {
    opacity: 0;
    transform: translateX(2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
