import styled from "styled-components";
import * as colors from "../../config/colors";

export const Nav = styled.nav`
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

  ul {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul li a:hover {
    color: ${colors.dividerColor};
    transition: 0.3s ease-in-out;
  }

  .socialMedia {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
