import React from "react";

import SignInAndSignUpHeader from "../../components/signIn-and-signUp-header/signIn-and-signUp-header.component";

import {
  LoginContainer,
  LoginFormContainer,
  LoginFormTitle,
  LoginFormWrapper,
  LoginForm,
  FormGroup,
  FormLabel,
  FormInput,
  HelpText,
  HelpTextLink,
  HelpTextDivider,
  LineBreak,
} from "./login.styles";

import ButtonPrimary from "../../components/button-primary/button-primary.component";

const Login = () => (
  <LoginContainer>
    <SignInAndSignUpHeader />
    <LoginFormContainer>
      <LoginFormTitle>Sign In</LoginFormTitle>
      <LoginFormWrapper>
        <LoginForm>
          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" id="password" />
          </FormGroup>
          <FormGroup>
            <ButtonPrimary type="submit" signIn>
              Sign in
            </ButtonPrimary>
          </FormGroup>
          <HelpText>
            <HelpTextLink to="#">Forgot email?</HelpTextLink>
            <HelpTextDivider> | </HelpTextDivider>
            <HelpTextLink to="#">Forgot password?</HelpTextLink>
          </HelpText>
        </LoginForm>
        <LineBreak>OR</LineBreak>
        <ButtonPrimary gotoSignUp>Create Account</ButtonPrimary>
      </LoginFormWrapper>
    </LoginFormContainer>
  </LoginContainer>
);

export default Login;
