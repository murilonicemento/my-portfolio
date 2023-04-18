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

export default GlobalStyles;
