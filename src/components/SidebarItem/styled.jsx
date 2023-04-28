import styled from "styled-components";
import * as colors from "../../config/colors";

export const Container = styled.div`
  margin-top: 90px;
  margin-left: 10px;

  ul li:not(li:nth-child(1)) {
    margin-top: 20px;
  }

  li {
    width: 90%;
    height: 30px;
    background-color: ${colors.backgroundColor};
    padding-left: 10px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 30px;
    }
  }
`;
