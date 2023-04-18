import { Nav } from "./styled";
import { Link } from "react-router-dom";
import gitHub from "../../assets/images/github.svg";
import linkedIn from "../../assets/images/linkedin.svg";

export function Header() {
  return (
    <Nav>
      <p>&lt;/MN&gt;</p>
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
      <div className="socialMedia">
        <a href="https://github.com/murilonicemento" target="_blank">
          <img src={gitHub} alt="GitHub Profile" />
        </a>
        <a href="https://www.linkedin.com/in/murilonicemento/" target="_blank">
          <img src={linkedIn} alt="LinkedIn Profile" />
        </a>
      </div>
    </Nav>
  );
}
