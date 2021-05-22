import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import CloseIcon from "@material-ui/icons/Close";

import {
  Container,
  MenuContainer,
  Backface,
  CloseMenuIcon,
} from "./menu.styles";

const Menu = ({ toggleIsMenuOpen }) => {
  return (
    <Container>
      <Backface onClick={toggleIsMenuOpen} />
      <MenuContainer>
        <CloseMenuIcon onClick={toggleIsMenuOpen}>
          <CloseIcon className="toggleMenu" />
        </CloseMenuIcon>

        <MenuItem text="existing inventory" />
        <MenuItem text="used inventory" />
        <MenuItem text="trade-in" />
        <MenuItem text="cybertruck" />
        <MenuItem text="roadster" />
        <MenuItem text="semi" />
        <MenuItem text="charging" />
        <MenuItem text="powerwall" />
        <MenuItem text="commercial energy" />
        <MenuItem text="utilities" />
        <MenuItem text="test drive" />
        <MenuItem text="find us" />
        <MenuItem text="support" />
        <MenuItem text="united states" />
      </MenuContainer>
    </Container>
  );
};

export default Menu;
