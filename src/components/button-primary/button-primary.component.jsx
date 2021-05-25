import React from "react";
import { Button, ButtonLink } from "./button-primary";
import { useHistory } from "react-router-dom";
const ButtonPrimary = ({
  children,
  type,
  isLink,
  to,
  formSubmitBtn,
  btnBordered,
  invert,
  medium,
}) => {
  const history = useHistory();
  const handleClick = () => {
    if (isLink) history.push(to);
  };

  return (
    <Button
      type={type ? type : "button"}
      invert={invert}
      formSubmitBtn={formSubmitBtn}
      btnBordered={btnBordered}
      medium={medium}
      isLink={isLink}
      to={to}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
