import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu/menu-slice";

import MenuItem from "../menu-item/menu-item.component";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import {
  Container,
  MenuContainer,
  Backface,
  CloseMenuIcon,
  ItemsBigScreen,
  ItemsSmallScreen,
  MoreItems,
  ToggleMore,
} from "./menu.styles";

const Menu = () => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const toggleIsMenuOpen = () => {
    dispatch(toggleMenu());
  };
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Container>
      <Backface onClick={toggleIsMenuOpen} />
      <MenuContainer>
        <CloseMenuIcon onClick={toggleIsMenuOpen}>
          <CloseIcon className="toggleMenu" />
        </CloseMenuIcon>
        <ItemsBigScreen>
          <MenuItem text="Existing inventory" />
          <MenuItem text="used inventory" />
          <MenuItem text="trade-in" />
          <MenuItem text="cybertuck" />
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
        </ItemsBigScreen>
        <ItemsSmallScreen>
          {!showMore ? (
            <>
              <MenuItem text="model s" />
              <MenuItem text="model 3" />
              <MenuItem text="model x" />
              <MenuItem text="model y" />
              <MenuItem text="solar roof" />
              <MenuItem text="solar panel" />{" "}
            </>
          ) : null}
          <ToggleMore onClick={toggleShowMore}>
            more{" "}
            <span>
              <ArrowForwardIosIcon />
            </span>
          </ToggleMore>
          {showMore ? (
            <MoreItems>
              <MenuItem text="Existing inventory" />
              <MenuItem text="used inventory" />
              <MenuItem text="trade-in" />
              <MenuItem text="cybertuck" />
              <MenuItem text="roadster" />
              <MenuItem text="semi" />
              <MenuItem text="charging" />
              <MenuItem text="powerwall" />
              <MenuItem text="commercial energy" />
              <MenuItem text="utilities" />
              <MenuItem text="test drive" />
              <MenuItem text="find us" />
              <MenuItem text="support" />
              <MenuItem text="tesla account" to="/teslaaccount" />
              <MenuItem text="united states" />
            </MoreItems>
          ) : null}
        </ItemsSmallScreen>

        {/* {isArray ? (
          <ItemsBigScreen>
            {data.map(({ id, text }) => (
              <MenuItem key={id} text={text} />
            ))}
          </ItemsBigScreen>
        ) : null}
        <ItemsSmallScreen>
          {isObject
            ? data.navItems.map(({ id, text }) => (
                <MenuItem key={id} text={text} />
              ))
            : null}
          <ToggleMore>
            more{" "}
            <span>
              <ArrowForwardIosIcon />
            </span>
          </ToggleMore>
          <MoreItems>
            {isObject
              ? data.menuItems.map(({ id, text }) => (
                  <MenuItem key={id} text={text} />
                ))
              : null}
          </MoreItems>
        </ItemsSmallScreen> */}
      </MenuContainer>
    </Container>
  );
};

export default Menu;
