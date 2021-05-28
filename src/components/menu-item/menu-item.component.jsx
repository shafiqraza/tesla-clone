import React from "react";
import { Link } from "react-router-dom";
import { MenuItemContainer, LogoutButton } from "./menu-item.styles";

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
    <MenuItemContainer>
      {history.location.pathname === "/teslaaccount" &&
      text === "tesla account" ? (
        <>
          <Link to={to}>
            {text} <LogoutButton onClick={clickHandler}>Log out</LogoutButton>
          </Link>
        </>
      ) : (
        <Link to={to}>{text}</Link>
      )}
    </MenuItemContainer>
  );
};
export default MenuItem;
