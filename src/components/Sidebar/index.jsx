import { FaTimes } from "react-icons/fa";
import { Container, Content } from "./styled";
import SidebarItem from "../SidebarItem";

export function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem />
      </Content>
    </Container>
  );
}
