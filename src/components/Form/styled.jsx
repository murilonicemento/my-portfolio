import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 4px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding-top: 5px;
    padding-left: 10px;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 4px;
  }

  button {
    width: 100px;
    height: 40px;
    background-color: #ee5d43;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
