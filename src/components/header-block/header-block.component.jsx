import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderBlockContainer,
  HeaderBlockInfo,
  HeaderBlockTitle,
  HeaderBlockSubTitle,
  HeaderBlockButtons,
  HeaderBlockButton,
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
        <HeaderBlockButton>custom order</HeaderBlockButton>
        <HeaderBlockButton invert>existing inventory</HeaderBlockButton>
      </HeaderBlockButtons>
    </HeaderBlockContainer>
  );
};

export default HeaderBlock;
