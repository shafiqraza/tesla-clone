import React from "react";

import { Container, Title } from "./form-container.styles";

const FormContainer = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default FormContainer;
