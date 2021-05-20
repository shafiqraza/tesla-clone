import React from "react";

import SignInAndSignUpHeader from "../../components/signIn-and-signUp-header/signIn-and-signUp-header.component";
import LoginForm from "../../components/login-form/login-form.component";
import FormWrapper from "../../components/form-wrapper/form-wrapper.component";

import {
  LoginContainer,
  LoginFormContainer,
  LoginFormTitle,
} from "./login.styles";

const Login = () => (
  <LoginContainer>
    <SignInAndSignUpHeader />
    <LoginFormContainer>
      <LoginFormTitle>Sign In</LoginFormTitle>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </LoginFormContainer>
  </LoginContainer>
);

export default Login;
