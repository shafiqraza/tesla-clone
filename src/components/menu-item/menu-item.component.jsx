import React from "react";
import { Link } from "react-router-dom";
import { MenuItemContainer } from "./menu-item.styles";

const MenuItem = ({ text }) => (
  <MenuItemContainer>
    <Link to="#">{text}</Link>
  </MenuItemContainer>
);

export default MenuItem;
