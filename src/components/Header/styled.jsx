import styled from "styled-components";
import * as colors from "../../config/colors";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 41px;

  p {
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
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg)
      brightness(104%) contrast(104%);
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
