import React, { useState } from "react";

import ButtonPrimary from "../button-primary/button-primary.component";
import Input from "../form-input/form-input.component";

import {
  Form,
  HelpText,
  HelpTextLink,
  HelpTextDivider,
} from "./login-form.styles";

import { auth } from "../../firebase/firebase-utils";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/user/user-slice";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userAuth) => {
    //     const { user } = userAuth;
    //     dispatch(
    //       signIn({ email: user.email, name: user.displayName, uid: user.uid })
    //     );
    //     history.push(".teslaaccount");
    //   })
    //   .catch((err) => console.log(`ERROR WHILE SIGIN - ${err.message}`));
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
