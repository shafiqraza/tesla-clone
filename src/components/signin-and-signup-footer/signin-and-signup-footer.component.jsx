import React from "react";

import {
  Footer,
  FooterList,
  ListItem,
  ListLink,
} from "./signin-and-signup-footer.styles";

const SignInAndSignUpFooter = () => (
  <Footer>
    <FooterList>
      <ListItem>
        <ListLink to="#">Tesla © 2021</ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="#">Privacy & legal</ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="#">Contact</ListLink>
      </ListItem>
    </FooterList>
  </Footer>
);

export default SignInAndSignUpFooter;
