import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  margin: 150px auto 0 auto;
  text-align: justify;
  font-weight: 700;

  p:nth-child(2) {
    text-align: center;
    background-image: linear-gradient(to right, #ee5d43, #f39c12);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  @media (min-width: 800px) {
    p {
      font-size: 37px;
    }
  }
`;
