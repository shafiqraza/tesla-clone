import React from "react";

import {
  NavContainer,
  NavTitle,
  Navbar,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from "./ta-navbar.styles";

const TeslaNavbar = () => (
  <NavContainer>
    <NavTitle>Dummy's Tesla</NavTitle>
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
          <NavbarLink to="#">Sign Out</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </Navbar>
  </NavContainer>
);

export default TeslaNavbar;
