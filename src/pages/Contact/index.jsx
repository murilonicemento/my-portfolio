import { MyHeader } from "../../components/Header";
import { MyForm } from "../../components/Form";
import { MyFooter } from "../../components/Footer";
import { Main } from "../../styles/globalStyles";

export function Contact() {
  return (
    <>
      <MyHeader />
      <Main>
        <MyForm />
      </Main>
      {/* <MyFooter /> */}
    </>
  );
}
