import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  margin: 150px auto 0 auto;

  h1 {
    margin-bottom: 38px;
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

  h1:nth-child(3),
  h1:nth-child(5) {
    margin-top: 38px;
  }

  #workExperience > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:first-child {
      font-size: 20px;
      font-weight: 200;
    }

    p:nth-child(2) {
      width: 84px;
      height: 24px;
      background-color: #d7ffe0;
      border: none;
      outline: none;
      border-radius: 12px;
      color: #018c0f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 12px;
    }
  }

  #workExperience div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 500;
  }

  .divider {
    border: 1px solid #141414;
    margin-top: 24px;
  }

  #education > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:first-child {
      font-size: 20px;
      font-weight: 200;
    }

    p:nth-child(2) {
      width: 84px;
      height: 24px;
      background-color: #d7ffe0;
      border: none;
      outline: none;
      border-radius: 12px;
      color: #018c0f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 12px;
    }
  }

  #education div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 500;
  }
`;
