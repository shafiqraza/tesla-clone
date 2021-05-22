import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    margin: 10px 0;
  }
`;

export const HelpText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 13px;
`;

export const HelpTextDivider = styled.span`
  padding: 0 5px;
`;

export const HelpTextLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid;
  color: #393c41;
  transition: 0.2s border-width;

  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`;
