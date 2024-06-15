<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps<{ tabs: string[] }>();

const selectedTab = ref<number>(0);

const selectTab = (index: number) => {
  selectedTab.value = index;
};
</script>

<template>
  <div id="tab">
    <div class="tab-buttons">
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
      <div v-if="selectedTab === 0">
        <p>
          Meu nome é Murilo Nascimento e sou estudante de Engenharia de Software. Atualmente, estou
          focando meus estudos na área de desenvolvimento de aplicações web, utilizando tecnologias
          como VueJS e PHP. Além disso, tenho conhecimento em metodologias ágeis, como SCRUM.
        </p>
        <div id="bio-information">
          <p><span>Nacionalidade: </span> Brasileiro</p>
          <p><span>Localização: </span> Belo Horizonte, MG</p>
        </div>
      </div>
      <div v-else-if="selectedTab === 1">
        <h3>Engenharia de Software</h3>
        <h4>Estácio de Sá</h4>
        <p class="education-date">2021 - 2026</p>
        <p>
          No curso de Engenharia de Software, adquiri habilidades em Lógica da Programação,
          Algoritmos, Estruturas de Dados e Desenvolvimento Web, utilizando tecnologias como Vue.js,
          TypeScript e PHP. Aprendi a definir e analisar requisitos de um sistemas e explorar os
          paradigmas das linguagens de programação, além de compreender a importância dos sistemas
          operacionais no desenvolvimento de software.
        </p>
        <hr />
        <h3>CS50</h3>
        <h4>Harvard</h4>
        <p class="education-date">2023</p>
        <p>
          No curso CS50 da Harvard, obtive uma compreensão profunda de conceitos fundamentais da
          ciência da computação, incluindo pensamento algorítmico, estruturas de dados, manipulação
          de dados, desenvolvimento web e segurança cibernética. Aprendi a resolver problemas de
          forma eficiente, desenvolver programas complexos e explorar diversas tecnologias,
          preparando-me para desafios na área de tecnologia.
        </p>
      </div>
      <div v-else-if="selectedTab === 2">
        <h3>Desenvolvedor FullStack Júnior</h3>
        <h4>Teknisa</h4>
        <p class="education-date">abr 2024 - momento</p>
        <ul>
          <li>Criação de novas telas do sistema;</li>
          <li>Criação de relatórios BIRT;</li>
          <li>Implementar novas funcionalidades ao sistema;</li>
          <li>Auxiliar time na resolução de bugs;</li>
          <li>
            Participar de treinamentos e reuniões voltadas para melhoria de produtos e das técnicas
            de trabalho;
          </li>
          <li>
            Executar teste padrão, resultado e funcionalidade dos sistemas desenvolvidos pela
            equipe;
          </li>
          <li>Auxiliar na documentação dos sistemas;</li>
          <li>
            Adaptar conhecimentos de lógica de programação aos padrões de desenvolvimento da Teknisa
            e aplicá-los na manutenção e melhoria contínua de produtos de software;
          </li>
        </ul>
        <hr />
        <h3>Estagiário em Desenvolvimento FullStack</h3>
        <h4>Teknisa</h4>
        <p class="education-date">jul 2023 - abr 2024</p>
        <ul>
          <li>Auxiliar time na resolução de bugs;</li>
          <li>
            Participar de treinamentos e reuniões voltadas para melhoria de produtos e das técnicas
            de trabalho;
          </li>
          <li>
            Executar teste padrão, resultado e funcionalidade dos sistemas desenvolvidos pela
            equipe;
          </li>
          <li>Auxiliar na documentação dos sistemas;</li>
          <li>
            Adaptar conhecimentos de lógica de programação aos padrões de desenvolvimento da Teknisa
            e aplicá-los na manutenção e melhoria contínua de produtos de software;
          </li>
        </ul>
        <hr />
        <h3>Estagiário em Business Intelligence</h3>
        <h4>iLean Gestão de Resultados</h4>
        <p class="education-date">fev 2023 - mar 2023</p>
        <ul>
          <li>Desenvolvimento de painéis de visualização de dados em Excel e Power Bi;</li>
          <li>
            Desenvolvimento das competências técnicas e comportamentais para as atividades que serão
            desenvolvidas;
          </li>
          <li>Extração, Tratamento e Limpeza de fontes de dados de diversas origens;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
#tab {
  margin-top: 28px;
}

#bio-information span {
  color: var(--color-green);
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 8px;

  margin-bottom: 20px;
}

.tab-button {
  background: none;

  padding: 8px 20px;

  cursor: pointer;

  border: none;
  border-radius: 6px;

  color: var(--color-white);
  font-weight: 600;
}

.tab-button:hover {
  background-color: var(--color-black-hover);
  transition: 0.4s ease-in;
}

.tab-button.active {
  background-color: var(--color-green);
}

.tab-content {
  text-align: justify;
}

.tab-content div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tab-content h3 {
  font-size: var(--font-size-lg);
  font-weight: 800;
}

.tab-content h4 {
  font-size: var(--font-size-md);
  font-weight: 600;
}

.tab-content p,
.tab-content ul li {
  font-size: 14px;
}

.education-date {
  font-size: 0.8rem;
  color: var(--color-green);
}

.tab-content ul {
  list-style-position: inside;
}

hr {
  color: var(--color-pink);
}
</style>
