import styled from "styled-components/macro";
export const LineBreakContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 40px auto;
  color: #393c41;
  font-size: 14px;
  font-weight: 600;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #5c5e62;
    width: 40%;
    top: 50%;
    opacity: 0.2;
  }

  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;
