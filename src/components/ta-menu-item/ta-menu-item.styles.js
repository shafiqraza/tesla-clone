import styled from "styled-components/macro";

export const MenuItem = styled.div`
  display: flex;
  margin-top: 10px;

  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 15px;

  @media only screen and (max-width: 612px) {
    ${({ id }) => (id === 1 ? `flex-direction: column;` : ``)}
  }
`;

export const ItemLeft = styled.div`
  width: 53%;
  padding: 20px;
  @media only screen and (max-width: 955px) {
    padding: 8px 12px;
  }

  @media only screen and (max-width: 670px) {
    padding: 8px 10px;
  }

  @media only screen and (max-width: 612px) {
    width: 100%;
  }
`;
export const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;

  @media only screen and (max-width: 955px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 670px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 612px) {
    font-size: 16px;
  }
`;
export const ItemSubTitle = styled.p`
  padding-right: 45px;
  margin: 10px 0 20px 0;
  color: #666;

  @media only screen and (max-width: 955px) {
    font-size: 12px;
    padding-right: 0;
  }

  @media only screen and (max-width: 670px) {
    font-size: 10px;
    margin: 5px 0 8px 0;
  }

  @media only screen and (max-width: 612px) {
    font-size: 16px;
  }
`;

export const ImageWrapperSmall = styled.div`
  ${({ id }) => (id !== 1 ? `display: none;` : ``)}
  @media only screen and (min-width: 612px) {
    display: none;
  }

  height: 137px;
  width: 100%;
  margin: 20px 0;
`;

export const ImageSmall = styled.img`
  @media only screen and (min-width: 612px) {
    display: none;
  }
  height: 100%;
  width: 100%;
`;

export const ItemButtons = styled.div`
  display: flex;
  //   justify-content: space-between;
  padding-right: 50px;
  gap: 20px;

  @media only screen and (max-width: 955px) {
    gap: 8px;
    padding-right: 0;
  }

  @media only screen and (max-width: 612px) {
    flex-direction: column;
  }
`;

export const ItemRight = styled.div`
  width: 47%;
  height: 174px;

  @media only screen and (max-width: 955px) {
    height: 134px;
  }

  @media only screen and (max-width: 670px) {
    height: 100px;
  }

  @media only screen and (max-width: 612px) {
    ${({ id }) => (id === 1 ? `display: none;` : ``)}
    height: 174px;
  }

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
