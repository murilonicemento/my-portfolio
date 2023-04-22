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

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: ${colors.backgroundColor};
            border-radius: 30px;
        }

        ::-webkit-scrollbar-thumb {
            background: ${colors.fontColor};
            border-radius: 7px;
        }
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
  animation: fadeIn 2.5s;

  h1 {
    margin-bottom: 31px;
    background-image: linear-gradient(to right, #ee5d43, #c74ded);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export default GlobalStyles;
