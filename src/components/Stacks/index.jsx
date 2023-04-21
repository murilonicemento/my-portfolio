import { Stacks } from "./styled";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import sass from "../../assets/images/sass.svg";
import javascript from "../../assets/images/javascript.svg";
import git from "../../assets/images/git.svg";
import react from "../../assets/images/react.svg";
import sqlite from "../../assets/images/sqlite.svg";
import vscode from "../../assets/images/vscode.svg";

export function MyStacks() {
  return (
    <Stacks>
      <div>
        <p>HTML</p>
        <img src={html} alt="HTML Icon" />
      </div>
      <div>
        <p>CSS</p>
        <img src={css} alt="CSS Icon" />
      </div>
      <div>
        <p>SASS</p>
        <img src={sass} alt="SASS Icon" />
      </div>
      <div>
        <p>JavaScript</p>
        <img src={javascript} alt="JavaScript Icon" />
      </div>
      <div>
        <p>Git</p>
        <img src={git} alt="Git Icon" />
      </div>
      <div>
        <p>React</p>
        <img src={react} alt="React Icon" />
      </div>
      <div>
        <p>SQLite</p>
        <img src={sqlite} alt="SQLite Icon" />
      </div>
      <div>
        <p>Visual Studio Code</p>
        <img src={vscode} alt="Visual Studio Code Icon" />
      </div>
    </Stacks>
  );
}
