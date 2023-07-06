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
