import React, { useState } from "react";

import { Form } from "./signup-form.styles";
import Input from "../form-input/form-input.component";
import ButtonPrimary from "../button-primary/button-primary.component";

import { auth } from "../../firebase/firebase-utils";

import { signIn } from "../../redux/user/user-slice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, lastName } = user;
    const displayName = lastName;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName,
          })
          .then(() => {
            const { email, uid } = userAuth.user;
            dispatch(
              signIn({
                uid,
                displayName,
                email,
              })
            );

            history.push("teslaaccount");
          });
      })
      .catch((err) => {
        console.log(`ERROR WHILE SIGN UP - ${err.message}`);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="firstName"
        id="firstName"
        required={true}
        label="First Name"
        value={user.firstName}
        handleChange={handleChange}
      />
      <Input
        type="text"
        name="lastName"
        id="lastName"
        required={true}
        label="Last Name"
        value={user.lastName}
        handleChange={handleChange}
      />
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
        Sign Up
      </ButtonPrimary>
    </Form>
  );
};

export default SignUpForm;
