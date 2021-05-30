import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAuth } from "../../redux/user/user-selectors";
import { auth } from "../../firebase/firebase-utils";
import { signOut } from "../../redux/user/user-slice";

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
    auth
      .signOut()
      .then(() => dispatch(signOut()))
      .catch((err) => console.log(`ERROR WHILE LOGGIN OUT ${err.message}`));
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
