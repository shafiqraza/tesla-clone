import React from "react";
import { Link } from "react-router-dom";

import ButtonPrimary from "../button-primary/button-primary.component";
import {
  HeaderBlockContainer,
  HeaderBlockInfo,
  HeaderBlockTitle,
  HeaderBlockSubTitle,
  HeaderBlockButtons,
} from "./header-block.styles";

const HeaderBlock = () => {
  return (
    <HeaderBlockContainer>
      <HeaderBlockInfo>
        <HeaderBlockTitle>Model S</HeaderBlockTitle>
        <HeaderBlockSubTitle>
          Order Online for <Link to="#">Touchless Delivery</Link>
        </HeaderBlockSubTitle>
      </HeaderBlockInfo>
      <HeaderBlockButtons>
        <ButtonPrimary isLink to="#">
          custom order
        </ButtonPrimary>
        <ButtonPrimary invert isLink to="#">
          existing inventory
        </ButtonPrimary>
      </HeaderBlockButtons>
    </HeaderBlockContainer>
  );
};

export default HeaderBlock;
