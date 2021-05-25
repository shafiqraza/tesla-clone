import React from "react";

import { Container } from "./tesla-account.styled";

import TeslaHeader from "../../components/ta-header/ta-header.component";
import TeslaNav from "../../components/ta-navbar/ta-navbar.component";
import TeslaMenuItems from "../../components/ta-menu-items/ta-menu-items.component";
import TeslaFooter from "../../components/ta-footer/ta-footer.component";

const TeslaAccount = ({ isMenuOpen, toggleIsMenuOpen }) => {
  return (
    <Container>
      <TeslaHeader
        isMenuOpen={isMenuOpen}
        toggleIsMenuOpen={toggleIsMenuOpen}
      />
      <TeslaNav />
      <TeslaMenuItems />
      <TeslaFooter />
    </Container>
  );
};

export default TeslaAccount;
