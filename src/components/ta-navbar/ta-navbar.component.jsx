import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAuth } from "../../redux/user/user-selectors";
import { signOutStart } from "../../redux/user/user-slice";

import {
  NavContainer,
  NavTitle,
  Navbar,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from "./ta-navbar.styles";

const TeslaNavbar = () => {
  const dispatch = useDispatch();
  const {
    payload: { displayName },
  } = useSelector(selectUserAuth);
  const logout = () => {
    dispatch(signOutStart());
  };
  return (
    <NavContainer>
      <NavTitle>{`${displayName}'s`} Tesla</NavTitle>
      <Navbar>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="#">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="#">Charging</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="#">Setting</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink onClick={logout} to="#">
              Sign Out
            </NavbarLink>
          </NavbarItem>
        </NavbarList>
      </Navbar>
    </NavContainer>
  );
};
export default TeslaNavbar;
