import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLinks,
  HeaderRight,
  LogoContainer,
  LogoImg,
  HeaderMenu,
} from "./header.styles";

import logo from "../../images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ isMenuOpen, toggleIsMenuOpen }) => {
  console.log(toggleIsMenuOpen);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImg src={logo} alt="tesla logo" />
      </LogoContainer>
      <HeaderLinks>
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panel</Link>
      </HeaderLinks>
      <HeaderRight isMenuOpen={isMenuOpen}>
        <Link to="/">Shop</Link>
        <Link to="/teslaaccount">Tesla Account</Link>
        <HeaderMenu onClick={toggleIsMenuOpen}>
          <MenuIcon className="toggleMenu" />
        </HeaderMenu>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
