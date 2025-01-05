<script setup lang="ts">
import { ref } from "vue";
import computer from "@/assets/images/computer.svg";
import build from "@/assets/images/build.svg";
import dateRange from "@/assets/images/date-range.svg";
import university from "@/assets/images/university.svg";
import universityBuilding from "@/assets/images/university-building.svg";

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
          Estudante de Engenharia de Software com interesse em resolver problemas e criar soluções
          eficientes para o mercado digital. Tenho experiência em desenvolvimento colaborativo,
          aplicando metodologias ágeis como SCRUM, e busco constantemente aprimorar minhas
          habilidades técnicas e interpessoais. Proativo, organizado e orientado a resultados, estou
          comprometido em contribuir de forma significativa para projetos desafiadores e inovadores.
        </p>
        <div id="bio-information">
          <p><span>Nacionalidade: </span> Brasileiro</p>
          <p><span>Localização: </span> Belo Horizonte, MG</p>
        </div>
      </div>
      <div v-else-if="selectedTab === 1">
        <h3><img :src="university" alt="University Hat Icon" />Engenharia de Software</h3>
        <h4><img :src="universityBuilding" alt="University Building Icon" />Estácio de Sá</h4>
        <p class="education-date"><img :src="dateRange" alt="Date Range Icon" />2021 - 2026</p>
        <p>
          No curso de Engenharia de Software, adquiri habilidades em Lógica da Programação,
          Algoritmos, Estruturas de Dados e Desenvolvimento Web, utilizando tecnologias como
          JavaScript, PHP e SQL. Aprendi a definir e analisar requisitos de um sistemas e explorar
          os paradigmas das linguagens de programação, além de compreender a importância dos
          sistemas operacionais no desenvolvimento de software.
        </p>
        <hr />
        <h3><img :src="university" alt="University Hat Icon" />CS50</h3>
        <h4><img :src="universityBuilding" alt="University Building Icon" />Harvard</h4>
        <p class="education-date"><img :src="dateRange" alt="Date Range Icon" />2023</p>
        <p>
          No curso CS50 da Harvard, obtive uma compreensão profunda de conceitos fundamentais da
          ciência da computação, incluindo pensamento algorítmico, estruturas de dados, manipulação
          de dados, desenvolvimento web e segurança cibernética. Aprendi a resolver problemas de
          forma eficiente e explorar diversas tecnologias, preparando-me para desafios na área de
          tecnologia.
        </p>
      </div>
      <div v-else-if="selectedTab === 2">
        <h3><img :src="computer" alt="Computer Icon" />Desenvolvedor Full Stack Júnior</h3>
        <h4><img :src="build" alt="Build Icon" />Teknisa</h4>
        <p class="education-date">
          <img :src="dateRange" alt="Date Range Icon" />abr 2024 - momento
        </p>
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
        <h3><img :src="computer" alt="Computer Icon" />Estagiário em Desenvolvimento Full Stack</h3>
        <h4><img :src="build" alt="Build Icon" />Teknisa</h4>
        <p class="education-date">
          <img :src="dateRange" alt="Date Range Icon" />jul 2023 - abr 2024
        </p>
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
        <h3><img :src="computer" alt="Computer Icon" />Estagiário em Business Intelligence</h3>
        <h4><img :src="build" alt="Build Icon" />iLean Gestão de Resultados</h4>
        <p class="education-date">
          <img :src="dateRange" alt="Date Range Icon" />fev 2023 - mar 2023
        </p>
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

.tab-content div img {
  width: 20px;
  height: 20px;
}

.tab-content div h3,
.tab-content div h4,
.tab-content div p {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tab-content div h3 {
  font-size: var(--font-size-lg);
  font-weight: 800;
}

.tab-content div h4 {
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

@media (min-width: 1280px) {
  #tab {
    width: 60%;
  }

  .tab-content p,
  .tab-content ul li {
    font-size: var(--font-size-md);
  }

  .tab-button {
    font-size: var(--font-size-md);
  }

  .tab-content div h3 {
    font-size: var(--font-size-xl);
    font-weight: 800;
  }

  .tab-content div h4 {
    font-size: var(--font-size-lg);
    font-weight: 600;
  }
}
</style>
