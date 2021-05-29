import styled from "styled-components/macro";

export const MenuItems = styled.div`
  margin: 0 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 1160px) {
    margin: 0 40px;
  }

  @media only screen and (max-width: 955px) {
    margin: 0 20px;
  }
`;
