import React from "react";
import {
  CustomLink,
  ButtonAndLinkContainer,
  ContainersLink,
  LogoutButton,
} from "./menu-item.styles";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/user/user-slice";
const MenuItem = ({ text, to = "#" }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(signOut());
  };

  return (
    <>
      {history.location.pathname === "/teslaaccount" &&
      text === "tesla account" ? (
        <>
          <ButtonAndLinkContainer>
            <ContainersLink to={to}>{text}</ContainersLink>
            <LogoutButton onClick={clickHandler}>Log out</LogoutButton>
          </ButtonAndLinkContainer>
        </>
      ) : (
        <CustomLink to={to}>{text}</CustomLink>
      )}
    </>
  );
};
export default MenuItem;
