import styled, { css } from "styled-components";

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

export const MenuItemContainer = styled.div`
  & a {
    ${LinkStyles}
  }
`;

export const LogoutButton = styled.button`
  display: block;
  border: none;
  outline: none;
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
