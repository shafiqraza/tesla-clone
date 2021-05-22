import React from "react";

import LineBreak from "../line-break/line-break.component";
import ButtonPrimary from "../button-primary/button-primary.component";

import { FormWrapperContainer } from "./form-wrapper.styles";

const FormWrapper = ({ children, usingIn }) => (
  <FormWrapperContainer>
    {children} {/* form comes here as childred  */}
    <LineBreak />
    {usingIn === "signin" || usingIn === "signIn" ? (
      <ButtonPrimary isLink to="signup" btnBordered>
        Create Account
      </ButtonPrimary>
    ) : (
      <ButtonPrimary isLink to="login" btnBordered>
        Sign in
      </ButtonPrimary>
    )}
  </FormWrapperContainer>
);

export default FormWrapper;
