<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setCard } from "@/services/cardService";
import type { ICardsProps } from "@/interfaces/interfaces";
import napped from "@/assets/images/napped.png";
import defaultProject from "@/assets/images/default-project.jpg";

const cards = ref<ICardsProps[]>([
  {
    type: "Front end",
    heading: "Napped",
    img: napped,
    title: "Site de notícias geek",
    description:
      "Napped é uma plataforma dedicada a fornecer informações detalhadas e atualizadas sobre o universo nerd, abrangendo uma ampla gama de tópicos como séries, filmes, animes e jogos. O objetivo principal é oferecer um ponto central para entusiastas e fãs do mundo nerd, permitindo acesso a notícias, novidades e conteúdos relacionados.",
    features: [
      "Registro e Login: O Napped permite que os usuários se registrem criando uma conta com informações básicas como nome, email e senha. Após o registro, é possível fazer login para acessar a conta e todas as funcionalidades da plataforma.",
      "Gerenciamento de Perfil: Uma vez logado, o usuário pode atualizar suas informações pessoais, como nome, email e preferências, através de uma interface amigável. Isso facilita a personalização da experiência de uso.",
      "Acesso a Notícias: A plataforma oferece um feed de notícias atualizado sobre séries, filmes, animes e jogos. Os usuários podem filtrar as notícias por categorias específicas para encontrar facilmente informações que lhes interessam."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/murilonicemento/napped",
    deploy: null,
    route: "napped"
  },
  {
    type: "Back end",
    heading: "Sanki",
    img: defaultProject,
    title: "Gerenciador de resumos e flashcards automatizados com IA",
    description:
      "Esta API tem como objetivo gerenciar resumos e flashcards para auxiliar no aprendizado e revisão de conteúdo. Com ela, é possível criar, listar, atualizar e deletar resumos e flashcards, além de possibilitar a revisão baseada em espaçamento (Spaced Repetition). Os flashcards são gerados automaticamente por inteligência artificial com base nos resumos fornecidos pelo usuário, garantindo uma experiência de estudo otimizada e personalizada.",
    features: [
      "Criação de Resumos: Registre novos resumos de estudo.",
      "Gerenciamento de Flashcards: Geração automática de flashcards baseados nos resumos.",
      "Listagem e Filtros: Consulte resumos e flashcards cadastrados com suporte a filtros.",
      "Revisão Baseada em Espaçamento: Controle inteligente das revisões para um aprendizado eficiente.",
      "Autenticação JWT: Controle de acesso seguro com autenticação via JSON Web Token."
    ],
    technologies: ["ASP.NET Core Web API", "EF Core", "PostgreSQL", "Docker", "xUnit"],
    github: "https://github.com/murilonicemento/sanki",
    deploy: null,
    route: "sanki"
  },
  {
    type: "Back end",
    heading: "Log Analyser",
    img: defaultProject,
    title: "Sistema de análise de logs",
    description:
      "Este projeto consiste em uma API para armazenamento e análise de logs com base em agregações utilizando C#/.NET e MongoDB. O objetivo é centralizar os logs de diferentes serviços, permitindo consultas para análise de desempenho, erros e comportamentos suspeitos.",
    features: [
      "Armazenamento de Logs: Centralize os logs de diferentes serviços em um único repositório.",
      "Consultas e Agregações: Realize consultas com base em agregações para identificar padrões e anomalias.",
      "Análise de Desempenho: Avalie o desempenho dos serviços e identifique possíveis gargalos.",
      "Detecção de Erros: Identifique e monitore erros que ocorrem nos serviços.",
      "Monitoramento de Comportamentos Suspeitos: Realize a detecção de comportamentos anormais ou inseguros a partir dos logs."
    ],
    technologies: ["ASP.NET Core Minimal API", "MongoDB"],
    github: "https://github.com/murilonicemento/log-analyser",
    deploy: null,
    route: "log-analyser"
  }
]);
const router = useRouter();

const redirect = (card: ICardsProps): void => {
  setCard(card);

  router.push({
    name: "project",
    params: { projectName: card.route }
  });
};
</script>

<template>
  <div v-for="(card, index) in cards" :key="index" class="card" @click="redirect(card)">
    <div class="main-content">
      <div class="header">
        <span>{{ card.type }}</span>
      </div>
      <p class="heading">{{ card.heading }}</p>
      <p class="title">{{ card.title }}</p>
      <div class="tech">
        <span v-for="(technology, index) in card.technologies" :key="index">{{ technology }}</span>
      </div>
    </div>
    <div class="footer">Murilo Nascimento</div>
  </div>
</template>

<style scoped lang="css">
.card {
  width: 320px;
  height: 350px;

  padding: 20px;

  color: var(--color-white);
  background-color: var(--color-black-hover);

  border-radius: 8px;

  box-shadow: 30px -16px 3px var(--color-green);

  display: flex;
  flex-direction: column;

  cursor: pointer;

  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card .main-content {
  flex: 1;
}

.card .header span:first-child {
  font-weight: 600;
  color: var(--color-green);
  margin-right: 4px;
}

.card .heading {
  font-size: 24px;
  margin: 24px 0 16px;
  font-weight: 600;
}

.card .title {
  height: 100px;
  margin-bottom: 20px;
}

.card .tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card .tech span {
  background-color: var(--color-pink);
  padding: 4px 8px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 50em;
}

.card .footer {
  font-weight: 600;
  color: var(--color-green);
  margin-right: 4px;
}

.card:hover {
  rotate: 8deg;
}
</style>
