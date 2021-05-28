import React from "react";
import { Link } from "react-router-dom";
import { MenuItemContainer } from "./menu-item.styles";

const MenuItem = ({ text, to = "#" }) => (
  <MenuItemContainer>
    <Link to={to}>{text}</Link>
  </MenuItemContainer>
);

export default MenuItem;
