import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

const buttonOrLinkStyles = css`
  width: 100%;
  min-width: 250px;
  border-radius: 50px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 13px 0;
  text-align: center;
  display: inline-block;
  background-color: rgba(23, 26, 32, 0.8);
  color: rgba(255, 255, 255);
  text-decoration: none;
  transition: 0.2s all;

  ${({ medium }) =>
    medium
      ? `
        min-width: 200px;
        width: auto;
        padding: 8px 20px;
        font-size: 12px; 
        @media only screen and (max-width: 955px) {
          min-width: 150px;
          padding: 8px 10px;
          font-size: 10px; 
        }
        @media only screen and (max-width: 670px) {
          min-width: 120px;
          padding: 5px 10px;
          font-size: 8px; 
        }
        @media only screen and (max-width: 612px) {
          font-size: 12px;
          padding: 7px 20px;
        }
        `
      : ``}

  ${(props) =>
    props.invert
      ? `
    background-color:  rgba(255, 255, 255, .8);
    color: rgba(23, 26, 32);
    font-weight: 400;
    font-size:12px; 
  `
      : ``}

  ${({ formSubmitBtn }) =>
    formSubmitBtn
      ? `
      background-color: #3e6ae1 ;
      color: #fff;

      &:hover {
        background-color: #3457b1 ;
      }
      `
      : ``}

  ${({ btnBordered }) =>
    btnBordered
      ? `
    border: 3px solid #000;
    background-color: transparent;
    color: #5c5e62;
    &:hover {
      background-color: #000;
      color: #fff;

    }

    @media only screen and (max-width: 955px) {
      border: 2px solid #000;
    }
  `
      : ``};
`;

export const Button = styled.button`
  ${buttonOrLinkStyles}
`;

export const ButtonLink = styled(Link)`
  ${buttonOrLinkStyles}

  ${({ btnBordered }) =>
    btnBordered
      ? `
    border: 3px solid #000;
    background-color: transparent;
    color: #5c5e62;
    &:hover {
      background-color: #000;
      color: #fff;

    }
  `
      : ``};
`;
