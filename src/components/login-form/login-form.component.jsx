import React, { useState } from "react";

import ButtonPrimary from "../button-primary/button-primary.component";
import Input from "../form-input/form-input.component";

import {
  Form,
  HelpText,
  HelpTextLink,
  HelpTextDivider,
} from "./login-form.styles";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        id="email"
        required={true}
        label="Email Address"
        value={user.email}
        handleChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        id="password"
        required={true}
        label="Password"
        value={user.password}
        handleChange={handleChange}
      />
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
