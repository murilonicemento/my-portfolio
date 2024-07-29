import "@/assets/main.css";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(Particles, {
  init: async (engine) => {
    await loadSlim(engine);
  }
});

app.use(router);

app.mount("#app");
