import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 15px;
`;
export const ListItem = styled.li``;
export const ItemLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid #666;
  color: #666;
  font-size: 14px;

  &:hover {
    border-width: 2px;
    color: #000;
  }
`;
