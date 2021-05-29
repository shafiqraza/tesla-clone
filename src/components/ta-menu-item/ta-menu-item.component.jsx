import React from "react";

import {
  MenuItem,
  ItemLeft,
  ItemTitle,
  ItemSubTitle,
  ImageWrapperSmall,
  ImageSmall,
  ItemButtons,
  ItemRight,
  ItemImage,
} from "./ta-menu-item.styles";

import ButtonPrimary from "../button-primary/button-primary.component";

const TeslaMenuItem = ({ id, title, subTitle, image, buttons }) => {
  return (
    <MenuItem id={id}>
      <ItemLeft>
        {title && <ItemTitle>{title}</ItemTitle>}
        {subTitle && <ItemSubTitle>{subTitle}</ItemSubTitle>}
        <ImageWrapperSmall id={id}>
          <ImageSmall src={image} alt={id} />
        </ImageWrapperSmall>
        <ItemButtons>
          {buttons.map(({ id, text }) => (
            <ButtonPrimary medium btnBordered key={id}>
              {text}
            </ButtonPrimary>
          ))}
        </ItemButtons>
      </ItemLeft>
      <ItemRight id={id}>
        <ItemImage src={image} alt="Solar Panel" id={id} />
      </ItemRight>
    </MenuItem>
  );
};

export default TeslaMenuItem;
