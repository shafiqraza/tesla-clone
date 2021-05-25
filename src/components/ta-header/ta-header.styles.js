import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const BasisLinkStyles = css`
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 25px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #222;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 100px;
  height: 28px;
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
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex: 1;
  margin-right: 100px;
  & a {
    ${BasisLinkStyles}
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & a {
    ${BasisLinkStyles}
  }
`;

export const HeaderMenu = styled.div`
  cursor: pointer;
  position: relative;
  & .toggleMenu {
    fill: #fff;
  }
`;
