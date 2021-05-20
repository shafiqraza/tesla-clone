import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div``;

// body styles
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  margin: 0 auto;
`;
export const LoginFormTitle = styled.h1`
  padding: 32px 0 8px 0;
  width: 90%;
  font-size: 36px;
  align-self: center;
`;
export const LoginFormWrapper = styled.div`
  padding: 16px 0;
  width: 332px;
  align-self: center;
`;
export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin: 10px 0;
  width: 100%;

  & button {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #777;
  display: block;
  cursor: pointer;
  margin-left: 20px;
  letter-spacing: 0.5px;
`;
export const FormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #5c5e62;
  margin-top: 10px;
  border-radius: 50px;
  border: 1px solid transparent;
  outline: none;
  background-color: #f4f4f4;
  transition: 0.2s all;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #eee;
  }

  &:focus {
    border-color: #d0d1d2;
  }
`;

export const HelpText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 13px;
`;

export const HelpTextDivider = styled.span`
  padding: 0 5px;
`;

export const HelpTextLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid;
  color: #393c41;
  transition: 0.2s border-width;

  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`;

export const LineBreak = styled.div`
  position: relative;
  text-align: center;
  margin: 40px auto;
  color: #393c41;
  font-size: 14px;
  font-weight: 600;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #5c5e62;
    width: 40%;
    top: 50%;
    opacity: 0.2;
  }

  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;
