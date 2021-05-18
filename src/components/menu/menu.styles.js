import styled from "styled-components/macro";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #eee;
  padding: 70px 20px 20px 20px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow-y: scroll;
  z-index: -1;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;
