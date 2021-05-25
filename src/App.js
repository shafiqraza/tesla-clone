import React, { useState } from "react";
import "./App.css";
import HeaderBlock from "./components/header-block/header-block.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/signup/signup.component";
import TeslaAccount from "./pages/tesla-account/tesla-account.component";
import { Switch, Route } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header isMenuOpen={isMenuOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
          {isMenuOpen && <Menu toggleIsMenuOpen={toggleIsMenuOpen} />}
          <HeaderBlock></HeaderBlock>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/teslaaccount">
          <TeslaAccount
            isMenuOpen={isMenuOpen}
            toggleIsMenuOpen={toggleIsMenuOpen}
          />
          {isMenuOpen && <Menu toggleIsMenuOpen={toggleIsMenuOpen} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
