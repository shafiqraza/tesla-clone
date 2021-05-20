import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

const buttonOrLinkStyles = css`
  min-width: 250px;
  width: 100%;
  border-radius: 50px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  padding: 13px 0;
  text-align: center;
  display: inline-block;
  background-color: rgba(23, 26, 32, 0.8);
  color: rgba(255, 255, 255);
  text-decoration: none;
  transition: 0.2s all;

  ${(props) =>
    props.invert
      ? `
    background-color:  rgba(255, 255, 255, .8);
    color: rgba(23, 26, 32);
    font-weight: 400;
    font-size:12px; 
  `
      : ``}

  ${({ signIn, signUp }) =>
    signIn || signUp
      ? `
      background-color: #3e6ae1 ;
      color: #fff;

      &:hover {
        background-color: #3457b1 ;
      }
      `
      : ``}

  ${({ gotoSignUp, gotoSignIn }) =>
    gotoSignUp || gotoSignIn
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

export const Button = styled.button`
  ${buttonOrLinkStyles}
`;

export const ButtonLink = styled(Link)`
  ${buttonOrLinkStyles}
`;
