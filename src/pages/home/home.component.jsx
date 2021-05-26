import React from "react";

import { selectMenuIsOpen } from "../../redux/menu/menu-selectors";
import { useSelector } from "react-redux";

import Header from "../../components/header/header.component";
import Menu from "../../components/menu/menu.component";
import HeaderBlock from "../../components/header-block/header-block.component";

import { Container } from "./home.styles";

const Home = () => {
  const menuIsOpen = useSelector(selectMenuIsOpen);

  return (
    <Container>
      <Header />
      {menuIsOpen && <Menu />}
      <HeaderBlock />
    </Container>
  );
};

export default Home;
