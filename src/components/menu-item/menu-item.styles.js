import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkStyles = css`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 2px;
  border-bottom: 1px solid #d0d1d2;
  width: 100%;
  display: block;
  padding: 16px 10px;
`;

export const CustomLink = styled(Link)`
  ${LinkStyles}
`;

export const ButtonAndLinkContainer = styled.div`
  ${LinkStyles}
`;

export const ContainersLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;

export const LogoutButton = styled.button`
  display: block;
  border: none;
  outline: none;
  margin: 0;
  margin-top: 25px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #666;
  background-color: transparent;
  padding: 0;
  text-transform: uppercase;

  &:hover {
    color: #000;
  }
`;
