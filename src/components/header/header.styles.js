import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const BasisLinkStyles = css`
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  // word-spacing: 2px;
  display: inline-block;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  padding-top: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled(Link)`
  & a {
    height: 100%;
    width: 100%;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 24px;
  fill: #000;
  flex: 1;
  object-fit: contain;
  margin-right: 100px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  & a {
    ${BasisLinkStyles}
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  & a {
    ${BasisLinkStyles}
  }
`;

export const HeaderMenu = styled.div`
  cursor: pointer;
  position: relative;
  & .toggleMenu {
  }
`;
