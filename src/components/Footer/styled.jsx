import styled from "styled-components";
import * as colors from "../../config/colors";

export const Footer = styled.footer`
  width: 90%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 100% auto 0 auto;

  .logo {
    background-image: linear-gradient(to right, #ee5d43, #f39c12);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  section:nth-child(1) {
    width: 100%;
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
  }

  .divider {
    width: 100%;
    border: 1px solid ${colors.dividerColor};
    margin: 20px 0 20px 0;
  }

  #navigationBar ul {
    width: 89vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section:nth-child(3) p {
    display: none;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
