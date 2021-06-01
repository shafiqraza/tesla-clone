import React, { useState } from "react";

import ButtonPrimary from "../button-primary/button-primary.component";
import Input from "../form-input/form-input.component";
import ErrorNotification from "../error-notification/error-notification.component";

import {
  Form,
  HelpText,
  HelpTextLink,
  HelpTextDivider,
} from "./login-form.styles";

import { useDispatch } from "react-redux";
import { signInStart } from "../../redux/user/user-slice";

import { useSelector } from "react-redux";
import { selectError } from "../../redux/user/user-selectors";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { payload } = useSelector(selectError);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    dispatch(signInStart({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {payload ? (
        payload.type === "signIn" ? (
          <ErrorNotification message={payload.message} />
        ) : null
      ) : null}

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
      <ButtonPrimary type="submit" formSubmitBtn>
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
