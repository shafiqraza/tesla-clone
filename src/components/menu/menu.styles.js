import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  padding: 70px 20px 20px 20px;
  min-width: 310px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

export const Backface = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 310px;
  background: #000;
  opacity: 0.4;
`;

export const CloseMenuIcon = styled.div`
  position: fixed;
  right: 25px;
  top: 15px;
  cursor: pointer;
`;

export const ItemsBigScreen = styled.div`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
export const ItemsSmallScreen = styled.div`
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
export const MoreItems = styled.div`
  // @media only screen and (max-width: 1100px) {
  //   height: 50px;
  //   overflow: hidden;
  // }
`;

export const ToggleMore = styled.button`
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  color: #000;
  text-transform: capitalize;
  border-bottom: 1px solid #d0d1d2;
  width: 100%;
  display: block;
  padding: 16px 10px;
  text-align: left;
  cursor: pointer;
  & span {
    & > svg {
      width: 8px;
      height: 8px;
    }
  }
`;
