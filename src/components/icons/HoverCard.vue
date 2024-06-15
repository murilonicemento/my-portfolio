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
// import axios from "axios";

const hoverState = ref(false);
// const spotifyApiBaseUrl = "https://api.spotify.com/v1";
// const axiosInstance = axios.create({
//   headers: {
//     Authorization: `Bearer ${import.meta.env.VITE_CLIENT_ID_SPOTIFY}`
//   }
// });

// try {
//   const response = await axiosInstance.get(`${spotifyApiBaseUrl}/me/player/currently-playing`);
//   console.log(response.data); // Process the response data
// } catch (error) {
//   console.error("Error fetching currently playing track:", error);
// }
</script>

<template>
  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger>
      <SoundWave />
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent class="HoverCardContent" :side-offset="5">
        <div :style="{ display: 'flex', gap: 7 }">
          <!-- <img
            class="Image large"
            src="https://i.pinimg.com/1200x/b4/06/b1/b406b1696f69fd6852aaddb0255c479a.jpg"
            alt="Cat"
          />
          <div :style="{ display: 'flex', flexDirection: 'column', gap: 15 }">
            <div>
              <div class="Text bold">Nome da música</div>
              <div class="Text faded">Artista</div>
            </div>
          </div> -->
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
