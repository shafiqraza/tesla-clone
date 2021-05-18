import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const BasisLinkStyles = css`
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  padding-top: 15px;
  position: sticky;
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
  width: 90px;
  flex: 1;
  object-fit: contain;
  margin-right: 100px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  gap: 15px;

  & a {
    ${BasisLinkStyles}
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 15px;

  & a {
    ${BasisLinkStyles}

    visibility: ${(props) => (props.isMenuOpen ? "hidden" : "visible")}
  }
`;

export const HeaderMenu = styled.div`
  cursor: pointer;
  z-index: 2;
  position: relative;
  & .toggleMenu {
  }
`;
