import { Link } from "react-router-dom";
import { Nav } from "./styled";
import { Header } from "./styled";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

export function MyHeader() {
  return (
    <Header>
      <p>&lt;/MN&gt;</p>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/techstack">Tech Stack</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
      <div className="socialMedia">
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
          <img src={whatsapp} alt="LinkedIn Profile" />
        </a>
      </div>
    </Header>
  );
}
