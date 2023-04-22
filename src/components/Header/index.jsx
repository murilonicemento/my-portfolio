import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Nav } from "./styled";
import { FaBars } from "react-icons/fa";
import { Sidebar } from "../Sidebar";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

export function MyHeader() {
  const [sidebar, setSidebar] = useState(false);

  function showSiderbar() {
    setSidebar(!sidebar);
  }
  return (
    <Header>
      <p className="logo">&lt;/MN&gt;</p>
      <Nav>
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
      </Nav>
      <section className="socialMedia">
        <a href="https://github.com/murilonicemento" target="_blank">
          <img src={github} alt="GitHub Profile" />
        </a>
        <a href="https://www.linkedin.com/in/murilonicemento/" target="_blank">
          <img src={linkedin} alt="LinkedIn Profile" />
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=5531981141827"
          target="_blank"
        >
          <img src={whatsapp} alt="WhatsApp Profile" />
        </a>
        <FaBars onClick={showSiderbar} cursor="pointer" size={25} />
        {sidebar && <Sidebar active={setSidebar} />}
      </section>
    </Header>
  );
}
