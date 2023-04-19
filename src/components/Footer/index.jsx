import { Link } from "react-router-dom";
import { Footer } from "./styled";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

export function MyFooter() {
  return (
    <Footer>
      <section>
        <p className="logo">&lt;/MN&gt;</p>
        <ul>
          <li>
            <a href="">+55 (31) 98114 - 1827</a>
          </li>
          <li>
            <a href="">murilo_nascimento22@outlook.com</a>
          </li>
        </ul>
        <div className="socialMedia">
          <img src={github} alt="GitHub Profile" />
          <img src={linkedin} alt="LinkedIn Profile" />
          <img src={whatsapp} alt="WhatsApp Profile" />
        </div>
      </section>
      <div className="divider"></div>
      <section id="navigationBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/techstack">Tech Stack</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
        <p>Made with (heart) by Murilo Nascimento</p>
      </section>
    </Footer>
  );
}
