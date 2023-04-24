import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 690px;
    height: 40px;
    padding-left: 10px;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 4px;
  }

  textarea {
    width: 690px;
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
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
