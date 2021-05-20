import React from "react";
import { Button, ButtonLink } from "./button-primary";

const ButtonPrimary = ({ children, type, isLink, ...otherProps }) => {
  return !isLink ? (
    <Button type={type ? type : "button"} {...otherProps}>
      {children}
    </Button>
  ) : (
    <ButtonLink {...otherProps}>{children}</ButtonLink>
  );
};

export default ButtonPrimary;
