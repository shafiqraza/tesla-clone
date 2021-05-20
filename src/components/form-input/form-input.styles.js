import styled from "styled-components/macro";

export const Group = styled.div`
  margin: 10px 0;
  width: 100%;

  & button {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #777;
  display: block;
  cursor: pointer;
  margin-left: 20px;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
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
