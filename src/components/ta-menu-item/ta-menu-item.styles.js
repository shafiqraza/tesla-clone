import styled from "styled-components/macro";

export const MenuItem = styled.div`
  display: flex;
  margin-top: 10px;

  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 15px;
`;

export const ItemLeft = styled.div`
  width: 53%;
  padding: 20px;
`;
export const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
export const ItemSubTitle = styled.p`
  padding-right: 45px;
  margin: 10px 0 20px 0;
`;

export const ItemButtons = styled.div`
  display: flex;
  //   justify-content: space-between;
  padding-right: 50px;
  gap: 20px;
`;

export const ItemRight = styled.div`
  width: 47%;
  height: 174px;

  ${({ id }) =>
    id !== 1
      ? `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;`
      : ``}
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;

  ${({ id }) =>
    id !== 1
      ? `
      width: auto;`
      : ``}
`;
