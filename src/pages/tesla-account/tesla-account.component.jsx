import React from "react";

import { selectMenuIsOpen } from "../../redux/menu/menu-selectors";
import { toggleMenu } from "../../redux/menu/menu-slice";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./tesla-account.styled";

import TeslaHeader from "../../components/ta-header/ta-header.component";
import TeslaNav from "../../components/ta-navbar/ta-navbar.component";
import TeslaMenuItems from "../../components/ta-menu-items/ta-menu-items.component";
import TeslaFooter from "../../components/ta-footer/ta-footer.component";
import Menu from "../../components/menu/menu.component";

const TeslaAccount = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectMenuIsOpen);

  const toggleIsMenuOpen = () => {
    dispatch(toggleMenu());
  };
  return (
    <Container>
      <TeslaHeader
        isMenuOpen={isMenuOpen}
        toggleIsMenuOpen={toggleIsMenuOpen}
      />
      <TeslaNav />
      <TeslaMenuItems />
      <TeslaFooter />
      {isMenuOpen && <Menu toggleIsMenuOpen={toggleIsMenuOpen} />}
    </Container>
  );
};

export default TeslaAccount;
