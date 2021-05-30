import React from "react";

import { Container, Text } from "./error-notification.styles";
import ErrorIcon from "@material-ui/icons/Error";

const ErrorNotification = ({ message }) => (
  <Container>
    <ErrorIcon />
    <Text>{message}</Text>
  </Container>
);

export default ErrorNotification;
