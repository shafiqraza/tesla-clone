import React from "react";

import { Footer, FooterList, ListItem, ItemLink } from "./ta-footer.styles";

const TeslaFooter = () => {
  const currentYear = () => new Date().getFullYear();
  return (
    <Footer>
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
          <ItemLink to="#">Sign Out</ItemLink>
        </ListItem>
      </FooterList>
    </Footer>
  );
};

export default TeslaFooter;