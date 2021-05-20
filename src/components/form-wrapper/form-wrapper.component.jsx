import React from "react";

import LineBreak from "../line-break/line-break.component";
import ButtonPrimary from "../button-primary/button-primary.component";

import { FormWrapperContainer } from "./form-wrapper.styles";

const FormWrapper = ({ children }) => (
  <FormWrapperContainer>
    {children} {/* form comes from childred  */}
    <LineBreak />
    <ButtonPrimary gotoSignUp>Create Account</ButtonPrimary>
  </FormWrapperContainer>
);

export default FormWrapper;
