import { Link } from "react-router-dom";
import { Page404 } from "./styled";
import notFound from "../../assets/images/notfound.svg";
import arrow from "../../assets/images/arrow.svg";

export function NotFound() {
  return (
    <Page404>
      <h1>Oops!</h1>
      <p>Você está perdido</p>
      <img src={notFound} alt="404 Status Code" />
      <Link to="/">
        <img src={arrow} alt="Arrow" />
        Voltar para Home
      </Link>
    </Page404>
  );
}
