import React from "react";

import ButtonPrimary from "../button-primary/button-primary.component";
import Input from "../form-input/form-input.component";

import {
  Form,
  HelpText,
  HelpTextLink,
  HelpTextDivider,
} from "./login-form.styles";

const LoginForm = () => {
  return (
    <Form>
      <Input name="email" id="email" required={true} label="Email Address" />
      <Input name="password" id="password" required={true} label="Password" />
      <ButtonPrimary type="submit" signIn>
        Sign in
      </ButtonPrimary>
      <HelpText>
        <HelpTextLink to="#">Forgot email?</HelpTextLink>
        <HelpTextDivider> | </HelpTextDivider>
        <HelpTextLink to="#">Forgot password?</HelpTextLink>
      </HelpText>
    </Form>
  );
};

export default LoginForm;
