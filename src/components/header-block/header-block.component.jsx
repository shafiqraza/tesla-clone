import React, { useEffect } from "react";

import ButtonPrimary from "../button-primary/button-primary.component";
import {
  Container,
  Content,
  Info,
  Title,
  SubTitle,
  Buttons,
} from "./header-block.styles";

const HeaderBlock = ({ title, description, image, buttons }) => {
  return (
    <Container image={image}>
      <Content>
        <Info>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Info>
        <Buttons>
          {buttons.map(({ id, text, link }, index) => (
            <ButtonPrimary key={id} invert={index > 0} isLink to={link}>
              {text}
            </ButtonPrimary>
          ))}
        </Buttons>
      </Content>
    </Container>
  );
};

export default HeaderBlock;
