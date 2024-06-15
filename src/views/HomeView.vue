<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import TabComponent from "@/components/TabComponent.vue";
import TechnologiesComponent from "@/components/TechnologiesComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import about from "@/assets/images/about-profile-image.png";

const tabs = ref<string[]>(["Bio", "Educação", "Experiência"]);
</script>

<template>
  <HeaderComponent />
  <main>
    <section id="home">
      <HomeComponent />
    </section>
    <section id="about">
      <h1>Sobre mim</h1>
      <div id="about-content">
        <img
          :src="about"
          alt="Profile Image of a person with branch cyber lines in the head"
          id="about-profile-image"
        />
        <TabComponent :tabs="tabs" />
      </div>
    </section>
    <section id="skills">
      <h1>Skills</h1>
      <TechnologiesComponent />
    </section>
    <section id="contact">
      <ContactComponent />
    </section>
  </main>
</template>

<style scoped lang="css">
section:not(#about) {
  width: 90%;

  margin: auto;
  margin-top: 68px;
}

#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 68px;
}

#about {
  width: 90%;

  margin: auto;
  margin-top: 68px;
}

#about h1 {
  text-align: center;
  color: var(--color-white);

  margin-bottom: 28px;
}

#about-profile-image {
  width: 268px;
  height: 268px;

  border-radius: 50%;
}

#skills h1 {
  text-align: center;
}

#contact {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  #home {
    flex-direction: row;
    align-items: start;
  }

  #about-content {
    display: flex;
    align-items: start;
  }

  #about h1,
  #skills h1 {
    font-size: var(--font-size-2xl);
  }

  #about-profile-image {
    width: 260px;
    height: 260px;
  }
}
</style>
