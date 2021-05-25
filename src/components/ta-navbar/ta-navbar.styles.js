import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 20px;
  margin: 0 150px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

export const NavTitle = styled.h1`
  font-weight: 500;
  flex: 1;
`;

export const Navbar = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  align-self: flex-end;
  list-style: none;
  gap: 15px;
`;

export const NavbarItem = styled.li``;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #444;
  font-size: 14px;
  &:hover {
    color: #000;
  }
`;
