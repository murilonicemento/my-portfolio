import styled from "styled-components";

export const Experience = styled.section`
  padding-bottom: 15px;

  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;

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

  @media (max-width: 800px) {
    > div:first-of-type {
      p:first-child {
        font-size: 18px;
        width: 230px;
        text-align: left;
      }

      p:nth-child(2) {
        font-size: 10px;
      }
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
