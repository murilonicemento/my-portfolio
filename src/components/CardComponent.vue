<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setCard } from "@/services/cardService";
import type { ICardsProps } from "@/interfaces/interfaces";
import napped from "@/assets/images/napped.png";
import twitter from "@/assets/images/twitter.png";
import pomodoro from "@/assets/images/pomodoro.jpeg";

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
    type: "Full Stack",
    heading: "Twitter Clone",
    img: twitter,
    title: "Clone da rede social Twitter",
    description:
      "Este projeto é um clone básico do Twitter, desenvolvido em PHP, com o objetivo de criar uma aplicação que simula algumas das funcionalidades principais da plataforma de redes sociais. Utiliza a arquitetura MVC (Model-View-Controller) para organizar e estruturar o código de maneira eficiente, promovendo uma separação clara entre a lógica de aplicação, a interface do usuário e a manipulação de dados.",
    features: [
      "Criação de Conta e Login: O projeto permite que os usuários criem uma conta fornecendo informações básicas, como nome e email, e uma senha. Após o registro, os usuários podem fazer login para acessar suas contas e interagir com a aplicação.",
      "Postagem de Mensagens: Os usuários podem criar e publicar mensagens, semelhantes aos tweets do Twitter. Essas postagens são exibidas no feed principal e podem ser visualizadas por outros usuários.",
      "Visualização de Postagens: O feed principal da aplicação exibe as postagens de todos os usuários, permitindo que eles acompanhem as atualizações e interações dentro da plataforma.",
      "Gerenciamento de Perfil: Cada usuário pode gerenciar seu perfil, incluindo a atualização de informações pessoais e a visualização de suas próprias postagens."
    ],
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/murilonicemento/twitter-clone",
    deploy: null,
    route: "twitter-clone"
  },
  {
    type: "Front end",
    heading: "Pomodoro",
    img: pomodoro,
    title: "App de Temporizador Pomodoro",
    description:
      "Este projeto é uma aplicação de temporizador baseada na técnica Pomodoro, desenvolvida para ajudar na gestão de tempo e produtividade. O sistema permite que os usuários configurem ciclos de trabalho e descanso, acompanhem suas sessões e façam ajustes conforme necessário para otimizar sua rotina.",
    features: [
      "Temporizador com Alerta: O temporizador exibe o tempo restante de cada sessão e emite um alerta sonoro quando o ciclo de trabalho ou descanso termina."
    ],
    technologies: ["React", "TypeScript", "Husky"],
    github: "https://github.com/murilonicemento/pomodoro",
    deploy: "https://pomodoro-lac-one.vercel.app/",
    route: "pomodoro"
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
  background:
    linear-gradient(var(--color-black), var(--color-black-hover)) padding-box,
    linear-gradient(145deg, transparent 35%, var(--color-pink), var(--color-blue)) border-box;
  border: 2px solid transparent;
  border-radius: 8px;
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
