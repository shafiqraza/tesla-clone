import React from "react";

import SignInAndSignUpHeader from "../../components/signin-and-signup-header/signIn-and-signUp-header.component";
import FormContainer from "../../components/form-container/form-container.component";
import FormWrapper from "../../components/form-wrapper/form-wrapper.component";
import LoginForm from "../../components/login-form/login-form.component";
import SignInAndSignUpFooter from "../../components/signin-and-signup-footer/signin-and-signup-footer.component";

import { LoginContainer } from "./login.styles";

const Login = () => (
  <LoginContainer>
    <SignInAndSignUpHeader />
    <FormContainer title="Sign In">
      <FormWrapper usingIn="signIn">
        <LoginForm />
      </FormWrapper>
    </FormContainer>
    <SignInAndSignUpFooter />
  </LoginContainer>
);

export default Login;
