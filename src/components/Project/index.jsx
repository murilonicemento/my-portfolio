import attendanceList from "../../assets/images/attendance-list.png";
import github from "../../assets/images/github.svg";
import multiStepForm from "../../assets/images/multi-step-form.jpeg";
import notionClone from "../../assets/images/notion-clone.jpeg";
import preview from "../../assets/images/preview.svg";
import strangerThings from "../../assets/images/stranger-things.jpg";
import taskList from "../../assets/images/task-list.jpeg";
import urlShortening from "../../assets/images/url-shortening.png";
import { Image, Links, Project, ProjectsCards } from "./styled";

export function MyProject() {
  return (
    <ProjectsCards>
      <Project>
        <Image src={attendanceList} />
        <h3>Lista de Presença</h3>
        <p>
          A aplicação permite registar os nomes dos alunos, juntamente com o
          horário que foi realizado o registro.
        </p>
        <p>Tech Stacks: React.js, TypeScript e CSS</p>
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
        <Image src={urlShortening} />
        <h3>Encurtador de URL</h3>
        <p>
          Este projeto permite que o usuário insira uma URL longa e obtenha uma
          URL encurtada como resultado.
        </p>
        <p>Tech Stacks: React.js e Styled-components</p>
        <Links>
          <a href="https://url-shortening-ruddy.vercel.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/url-shortening"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={multiStepForm} />
        <h3>Formulário Multi-Etapa</h3>
        <p>
          Este projeto foi criado com o objetivo de capturar informações dos
          usuários em várias etapas, tornando o processo mais fácil e intuitivo.
        </p>
        <p>Tech Stacks: React.js, TypeScript, Context API</p>
        <Links>
          <a
            href="https://multi-step-form-xi-snowy.vercel.app/"
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
        <Image src={notionClone} />
        <h3>Notion Clone</h3>
        <p>
          Este é um clone simples do Notion. O clone incorpora algumas
          funcionalidades básicas do Notion, permitindo a criação de headings,
          blocos de códigos e bulleted lists.
        </p>
        <p>Tech Stacks: React.js e TailwindCSS</p>
        <Links>
          <a href="https://notion-clone-gilt.vercel.app/" target="_blank">
            <img src={preview} alt="Preview Icon" />
            Deploy
          </a>
          <a
            href="https://github.com/murilonicemento/notion-clone"
            target="_blank"
          >
            <img src={github} alt="GitHub Icon" />
            Repositório
          </a>
        </Links>
      </Project>
      <Project>
        <Image src={taskList} />
        <h3>App Lista Tarefa</h3>
        <p>
          Esta aplicação permite que os usuários criem, visualizem, atualizem e
          excluam tarefas em uma interface amigável.
        </p>
        <p>Tech Stacks: PHP, MySQL, JavaScript e Bootstrap</p>
        <Links>
          <a
            href="https://github.com/murilonicemento/app-lista-tarefa"
            target="_blank"
          >
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
    </ProjectsCards>
  );
}
