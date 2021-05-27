import React, { useEffect } from "react";

import { selectMenuIsOpen } from "../../redux/menu/menu-selectors";
import { useSelector } from "react-redux";

import HomePageItems from "./carInfo";

import Header from "../../components/header/header.component";
import Menu from "../../components/menu/menu.component";
import HeaderBlock from "../../components/header-block/header-block.component";

import { Container } from "./home.styles";

const Home = () => {
  const menuIsOpen = useSelector(selectMenuIsOpen);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (e) => {
    console.log(window.scrollY);
  };

  return (
    <Container>
      <Header />
      {menuIsOpen ? <Menu /> : null}
      {HomePageItems.map(({ id, title, description, image, buttons }) => (
        <HeaderBlock
          key={id}
          title={title}
          description={description}
          image={image}
          buttons={buttons}
        />
      ))}
    </Container>
  );
};

export default Home;
