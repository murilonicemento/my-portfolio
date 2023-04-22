import styled from "styled-components";
import * as colors from "../../config/colors";

export const Container = styled.div`
  padding-bottom: 40px;

  h1:nth-child(3),
  h1:nth-child(5) {
    margin-top: 38px;
  }

  .divider {
    border: 1px solid ${colors.dividerColor};
    margin-top: 24px;
  }
`;

export const WorkExperience = styled.section`
  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:first-child {
      font-size: 20px;
      font-weight: 200;
    }

    p:nth-child(2) {
      min-width: 84px;
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
`;

export const WorkData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 10px;
  font-weight: 500;

  span {
    display: flex;
    align-items: center;
    gap: 15px;

    p {
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        width: 10px;
        height: 10px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 10px;
      height: 10px;
    }
  }
`;

export const AssignmentsWork = styled.div`
  font-size: 15px;
  ul {
    margin-top: 5px;
    li {
      list-style: circle;
      list-style-position: inside;
    }
  }
`;

export const Education = styled.section`
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
