import styled from "styled-components";

export const Footer = styled.footer`
  width: 90%;
  margin: 150px auto 0 auto;

  .logo {
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

  section:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section:nth-child(1) ul {
    display: none;
  }

  .socialMedia {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg)
      brightness(104%) contrast(104%);
  }

  .divider {
    border: 1px solid #141414;
    margin: 20px 0 20px 0;
  }

  #navigationBar ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section:nth-child(3) p {
    display: none;
  }
`;
