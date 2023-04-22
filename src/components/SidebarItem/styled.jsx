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
    padding-left: 18px;
    border-radius: 7px;
    display: flex;
    align-items: center;
  }
`;
