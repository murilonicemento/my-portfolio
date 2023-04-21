import styled from "styled-components";
import * as colors from "../../config/colors";

export const Page404 = styled.section`
  display: grid;
  place-items: center;
  margin-top: 55px;

  p {
    margin-top: 8px;
  }

  img {
    width: 90%;
  }

  img:nth-child(4) {
    width: 40%;
    position: absolute;
    top: 245px;
    left: 30px;
  }

  a {
    background-color: ${colors.backgroundColor};
    font-family: "Poppins", sans-serif;
    color: ${colors.fontColor};
    border: none;
    outline: none;
    margin-top: 64px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid ${colors.fontColor};
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;
