import styled, { css } from "styled-components/macro";
import bgImage from "../../images/model-s.jpg";

const buttonStyles = css`
  width: 250px;
  border-radius: 50px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 0;
  text-align: center;
  display: inline-block;
  background-color: rgba(23, 26, 32, 0.8);
  color: rgba(255, 255, 255);
`;

export const HeaderBlockContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${bgImage}) no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -2;
  display: grid;
  place-items: center;
`;

export const HeaderBlockInfo = styled.div`
  text-align: center;
  height: 300px;
  margin-top: 30px;
`;

export const HeaderBlockTitle = styled.h1`
  font-size: 42px;
  color: #393c41;
  padding: 4px 0;
`;

export const HeaderBlockSubTitle = styled.p`
  color: #5c5e62;
  padding-bottom: 20px;
  font-size: 14px;

  & a {
    border-bottom: 1px solid #5c5e62;
    color: inherit;
    text-decoration: none;
    transition: 0.2s color;

    &:hover {
      color: #000;
      border-bottom-width: 2px;
    }
  }
`;

export const HeaderBlockButtons = styled.div`
  display: flex;
  gap: 30px;
  // height: 30%;
  align-items: flex-end;
`;

export const HeaderBlockButton = styled.button`
  ${buttonStyles}

  ${(props) =>
    props.invert &&
    `
    background-color:  rgba(255, 255, 255, .8);
    color: rgba(23, 26, 32);
    font-weight: 400;
    font-size:12px;
  `}
`;
