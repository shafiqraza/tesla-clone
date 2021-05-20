import React from "react";

import SignInAndSignUpHeader from "../../components/signIn-and-signUp-header/signIn-and-signUp-header.component";
import FormContainer from "../../components/form-container/form-container.component";
import FormWrapper from "../../components/form-wrapper/form-wrapper.component";
import LoginForm from "../../components/login-form/login-form.component";

import { LoginContainer } from "./login.styles";

const Login = () => (
  <LoginContainer>
    <SignInAndSignUpHeader />
    <FormContainer title="Sign In">
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </FormContainer>
  </LoginContainer>
);

export default Login;
