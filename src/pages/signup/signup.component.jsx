import React from "react";
import { SignUpContainer } from "./signup.styles";
import SignInAndSignUpHeader from "../../components/signin-and-signup-header/signIn-and-signUp-header.component";
import FormContainer from "../../components/form-container/form-container.component";
import FormWrapper from "../../components/form-wrapper/form-wrapper.component";
import SignUpForm from "../../components/signup-form/signup-form.component";
import SignInAndSignUpFooter from "../../components/signin-and-signup-footer/signin-and-signup-footer.component";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignInAndSignUpHeader />
      <FormContainer title="Sign Up">
        <FormWrapper usingIn="signup">
          <SignUpForm />
        </FormWrapper>
      </FormContainer>
      <SignInAndSignUpFooter />
    </SignUpContainer>
  );
};

export default SignUp;
