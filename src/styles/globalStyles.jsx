import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        background-color: ${colors.backgroundColor};
        font-family: "Poppins", sans-serif;
        color: ${colors.fontColor};
    }

    a {
        text-decoration: none;
        color: ${colors.fontColor};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    li {
        cursor: pointer;
    }
`;

export const Main = styled.main`
  width: 90%;
  margin: 80px auto 0 auto;

  h1 {
    margin-bottom: 31px;
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
`;
export default GlobalStyles;
