import styled from "styled-components";

export const MyEducation = styled.section`
  > div:first-of-type {
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

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 500;
    div {
      display: flex;
      align-items: center;
      gap: 5px;

      img {
        width: 10px;
        height: 10px;
      }
    }
  }
`;
