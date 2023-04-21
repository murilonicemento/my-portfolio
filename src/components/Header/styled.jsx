import styled from "styled-components";

export const Header = styled.header`
  width: 90%;
  margin: 41px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    background-image: linear-gradient(
      to right,
      rgb(149 114 252),
      rgb(67 231 173),
      rgb(226 212 92)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  .socialMedia {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-around;

  ul {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
