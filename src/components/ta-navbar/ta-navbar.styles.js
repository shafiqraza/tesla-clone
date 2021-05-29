import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 20px;
  margin: 0 150px 30px 150px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;

  @media only screen and (max-width: 1160px) {
    margin: 0 50px 30px 50px;
  }
  @media only screen and (max-width: 955px) {
    margin: 0 20px 30px 20px;
  }

  @media only screen and (max-width: 670px) {
  }

  @media only screen and (max-width: 612px) {
    flex: 1;
    border: 1px solid #eee;
    border-radius: 15px;
    padding: 20px 10px;
    margin-top: 40px;
  }
`;

export const NavTitle = styled.h1`
  font-weight: 500;
  flex: 1;
  @media only screen and (max-width: 955px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 612px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  @media only screen and (max-width: 612px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 100%;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  align-self: flex-end;
  list-style: none;
  gap: 15px;

  @media only screen and (max-width: 612px) {
    flex: 1;
    align-items: center;
    padding: 0;
    gap: 0;
    justify-content: space-around;
  }
`;

export const NavbarItem = styled.li``;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #444;
  font-size: 14px;
  &:hover {
    color: #000;
  }

  @media only screen and (max-width: 612px) {
    text-decoration: underline;
  }
`;
