import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  margin: 150px auto 0 auto;

  p {
    width: 50%;
    margin-bottom: 20px;
  }

  span {
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

  a {
    text-transform: uppercase;
    font-weight: 500;
    padding: 8px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(
          to right,
          rgb(149 114 252),
          rgb(67 231 173),
          rgb(226 212 92)
        )
        border-box;
    border-width: 0.125rem;
    border-style: solid;
    border-color: transparent;
    border-radius: 0.438rem;
  }

  img {
    width: 150px;
    position: absolute;
    top: 240px;
    right: 20px;
    border-radius: 50%;
  }
`;
