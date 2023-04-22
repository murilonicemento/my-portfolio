import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  margin: 240px auto 0 auto;
  text-align: justify;
  font-weight: 700;

  p:nth-child(2) {
    text-align: center;
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

  @media (min-width: 800px) {
    p {
      font-size: 37px;
    }
  }
`;
