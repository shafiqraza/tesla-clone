import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0;
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 12px 20px;

  & svg {
    fill: #f21121;
  }
`;

export const Text = styled.p`
  color: #5c5e62;
  font-size: 16px;
  margin-left: 10px;
  //   text-align: left;
`;
