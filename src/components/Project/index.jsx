import { ProjectsCards, Project, Links, Image } from "./styled";
import attendanceList from "../../assets/images/attendance-list.png";
import cardForm from "../../assets/images/card-form.jpg";
import strangerThings from "../../assets/images/stranger-things.jpg";
import habitTracker from "../../assets/images/habit-tracker.png";
import personalBudget from "../../assets/images/personal-budget.png";
import mosquitoKiller from "../../assets/images/mosquito-killer.jpg";
import github from "../../assets/images/github.svg";
import preview from "../../assets/images/preview.svg";

export function MyProject() {
  return (
    <ProjectsCards>
      <Project>
        <Image src={attendanceList} />
        <h3>Lista de Presença</h3>
        <p>
          Projeto Criado na Trilha Discover da Rocketseat - Módulo Fundamentos
          do ReactJS.
        </p>
        <p>Tech Stacks: React.js, CSS e TypeScript</p>
        <Links>
          <a href="https://www.attendace-list.vercel.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/attendace-list"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={cardForm} />
        <h3>Formulário de Cartão</h3>
        <p>
          Este projeto consiste em um formulário de cartão de crédito
          desenvolvido em React, feito pela plataforma Frontend Mentor.
        </p>
        <p>Tech Stacks: React.js e CSS</p>
        <Links>
          <a
            href="https://interactive-card-details-form-mu-nine.vercel.app/"
            target="_blank"
          >
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/interactive-card-details-form"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={strangerThings} />
        <h3>Landing Page Stranger Things</h3>
        <p>
          Projeto criado através da plataforma Digital Innovation One (DIO).
        </p>
        <p>Tech Stacks: HTML, CSS, JavaScript e Firebase</p>
        <Links>
          <a href="https://landpg-strthgs.netlify.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/landing-page-stranger-things"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={habitTracker} />
        <h3>Habit Tracker</h3>
        <p>
          Projeto criado através da plataforma Rocketseat no evento NLW Setup-
          Trilha Explorer.
        </p>
        <p>Tech Stacks: HTML, CSS e JavaScript</p>
        <Links>
          <a href="https://habit-control-beta.vercel.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/habit-control"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={personalBudget} />
        <h3>Orçamento Pessoal</h3>
        <p>
          Projeto criado através da plataforma Udemy no curso Desenvolvimento
          Web Completo na seção JavaScript.
        </p>
        <p>Tech Stacks: HTML, CSS e JavaScript</p>
        <Links>
          <a href="https://persbudgt-app.netlify.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/app-orcamento-pessoal"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={mosquitoKiller} />
        <h3>Mata-mosquito</h3>
        <p>
          Projeto criado através da plataforma Udemy no curso Desenvolvimento
          Web Completo na Seção JavaScript.
        </p>
        <p>Tech Stacks: HTML, CSS e JavaScript</p>
        <Links>
          <a href="https://app-matmosq.netlify.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/app-mata-mosquito"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
    </ProjectsCards>
  );
}
