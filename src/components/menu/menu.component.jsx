import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { MenuContainer } from "./menu.styles";

const Menu = () => (
  <MenuContainer>
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
);

export default Menu;
