import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding-bottom: 10px;
  padding-left: 0;
`;

export const ListItem = styled.li``;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 14px;
  font-weight: 500;
`;
