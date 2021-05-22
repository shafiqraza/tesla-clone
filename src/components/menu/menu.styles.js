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
