import React from "react";

import {
  Header,
  Logo,
  LogoImage,
  Languages,
  LanguagesText,
} from "./signIn-and-signUp-header.styles";

import logo from "../../images/logo.svg";
import global from "../../images/global.svg";

const SignInAndSignUpHeader = () => (
  <Header>
    <Logo to="/">
      <LogoImage src={logo}></LogoImage>
    </Logo>
    <Languages>
      <img src={global} alt="language" />
      <LanguagesText>en-US</LanguagesText>
    </Languages>
  </Header>
);

export default SignInAndSignUpHeader;
