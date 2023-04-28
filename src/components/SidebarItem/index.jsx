import { Link } from "react-router-dom";
import { Container } from "./styled";
import home from "../../assets/images/home.svg";
import about from "../../assets/images/about.svg";
import website from "../../assets/images/website.svg";
import job from "../../assets/images/job.svg";
import contact from "../../assets/images/contact.svg";

export default function sidebarItem() {
  return (
    <Container>
      <ul>
        <li>
          <img src={home} alt="Home Icon" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <img src={about} alt="About Icon" />
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <img src={website} alt="Website Icon" />
          <Link to="/techstack">Tech Stack</Link>
        </li>
        <li>
          <img src={job} alt="Job Icon" />
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <img src={contact} alt="Contact Icon" />
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </Container>
  );
}
