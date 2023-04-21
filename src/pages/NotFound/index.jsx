import { Page404 } from "./styled";
import notFound from "../../assets/images/notfound.svg";
import face404 from "../../assets/images/face404.svg";
import arrow from "../../assets/images/arrow.svg";

export function NotFound() {
  return (
    <Page404>
      <h1>Oops!</h1>
      <p>Você está perdido</p>
      <img src={notFound} alt="" />
      <img src={face404} alt="Face" />
      <button>
        <img src={arrow} alt="Arrow" />
        Voltar para Home
      </button>
    </Page404>
  );
}
