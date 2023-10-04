import css from "../../assets/images/css.svg";
import git from "../../assets/images/git.svg";
import html from "../../assets/images/html.svg";
import javascript from "../../assets/images/javascript.svg";
import php from "../../assets/images/php.svg";
import react from "../../assets/images/react.svg";
import sass from "../../assets/images/sass.svg";
import sqlite from "../../assets/images/sqlite.svg";
import typescript from "../../assets/images/typescript.svg";
import { Stacks } from "./styled";

export function MyStacks() {
  return (
    <Stacks>
      <img src={html} alt="HTML Icon" />
      <img src={css} alt="CSS Icon" />
      <img src={sass} alt="SASS Icon" />
      <img src={javascript} alt="JavaScript Icon" />
      <img src={react} alt="React Icon" />
      <img src={typescript} alt="React Icon" />
      <img src={php} alt="React Icon" />
      <img src={sqlite} alt="SQLite Icon" />
      <img src={git} alt="Git Icon" />
    </Stacks>
  );
}
