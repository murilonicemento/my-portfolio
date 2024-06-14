<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabComponent from "@/components/TabComponent.vue";

const tabs = ref<string[]>(["Bio", "Educação", "Experiência", "Prêmios", "Certificações"]);
</script>

<template>
  <HeaderComponent />
  <main>
    <section>
      <h3>Olá, meu nome é Murilo Nascimento</h3>
      <h3>Sou um desenvolvedor fullsterco</h3>
      <p>
        Desenvolvedora de software, apaixonada pela arte do Web Design, dedicada a criar interfaces
        visualmente cativantes. Meu foco no Front End traz vida aos designs, enquanto minha
        expertise em UI/UX garante que cada interação seja não apenas bonita, mas também intuitiva.
      </p>
      <div><a href=""></a><a href=""></a><a href=""></a></div>

      <img src="" alt="" />
    </section>
    <section>
      <h3>Sobre mim</h3>
      <img src="" alt="" />
      <TabComponent :tabs="tabs" />
    </section>
    <section>
      <h3>Tecnologias</h3>
    </section>
    <section>
      <h3>Projetos</h3>
    </section>
    <section>
      <h3>Contato</h3>
    </section>
  </main>
</template>

<style scoped lang="css">
section {
  height: 100vh;
}
</style>
