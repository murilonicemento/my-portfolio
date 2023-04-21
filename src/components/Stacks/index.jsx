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
      <img src={html} alt="HTML Icon" />
      <img src={css} alt="CSS Icon" />
      <img src={sass} alt="SASS Icon" />
      <img src={javascript} alt="JavaScript Icon" />
      <img src={git} alt="Git Icon" />
      <img src={react} alt="React Icon" />
      <img src={sqlite} alt="SQLite Icon" />
      <img src={vscode} alt="Visual Studio Code Icon" />
    </Stacks>
  );
}
