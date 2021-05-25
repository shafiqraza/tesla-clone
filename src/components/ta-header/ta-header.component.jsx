import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  HeaderLinks,
  HeaderRight,
  LogoContainer,
  HeaderMenu,
} from "./ta-header.styles";

import { ReactComponent as Logo } from "../../images/logo-white.svg";
import MenuIcon from "@material-ui/icons/Menu";

import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase-utils";
import { signOut } from "../../redux/user/user-slice";

const TeslaAccountHeader = ({ isMenuOpen, toggleIsMenuOpen }) => {
  const dispatch = useDispatch();
  const logout = () => {
    auth
      .signOut()
      .then(() => dispatch(signOut))
      .catch((err) => console.log(`ERROR WHILE LOGGIN OUT ${err.message}`));
  };
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <HeaderLinks>
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Panels</Link>
      </HeaderLinks>
      <HeaderRight isMenuOpen={isMenuOpen}>
        <Link to="/">Shop</Link>
        <Link to="/login">Tesla Account</Link>
        <Link to="#" onClick={logout}>
          Log out
        </Link>
        <HeaderMenu onClick={toggleIsMenuOpen}>
          <MenuIcon className="toggleMenu" />
        </HeaderMenu>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default TeslaAccountHeader;
