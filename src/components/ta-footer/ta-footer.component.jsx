import React from "react";

import { useDispatch } from "react-redux";
import { signOut } from "../../redux/user/user-slice";
import {
  Footer,
  FooterBig,
  FooterSmall,
  FooterList,
  ListItem,
  ItemLink,
} from "./ta-footer.styles";

const TeslaFooter = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  const currentYear = () => new Date().getFullYear();
  return (
    <Footer>
      <FooterBig>
        <FooterList>
          <ListItem>
            <ItemLink to="#">Tesla © {currentYear()}</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#">Privacy and legal</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#">Contact</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#">Careers</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#">Get Newsletter</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#">Forums</ItemLink>
          </ListItem>

          <ListItem>
            <ItemLink to="#">Location</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#" onClick={logout}>
              Sign Out
            </ItemLink>
          </ListItem>
        </FooterList>
      </FooterBig>
      <FooterSmall>
        <FooterList>
          <ListItem>
            <ItemLink to="#">Tesla © {currentYear()}</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#">Privacy and legal</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink to="#" onClick={logout}>
              Sign Out
            </ItemLink>
          </ListItem>
        </FooterList>
      </FooterSmall>
    </Footer>
  );
};

export default TeslaFooter;
