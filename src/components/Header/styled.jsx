import styled from "styled-components";
import * as colors from "../../config/colors";

export const Header = styled.header`
  width: 90%;
  margin: 41px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    background-image: linear-gradient(to right, #ee5d43, #f39c12);
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
    li {
      border-bottom: 2px solid ${colors.backgroundColor};
      padding: 4px;
      transition: linear 0.3s;
      &:hover {
        border-bottom: 2px solid #ee5d43;
      }
    }
  }

  @media (min-width: 800px) {
    display: inline;
  }
`;
