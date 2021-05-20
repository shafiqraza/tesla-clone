import React, { useState } from "react";
import "./App.css";
import HeaderBlock from "./components/header-block/header-block.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import Login from "./pages/login/login.component";
import { Switch, Route } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header
            isMenuOpen={isMenuOpen}
            toggleIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && <Menu />}
          <HeaderBlock></HeaderBlock>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
