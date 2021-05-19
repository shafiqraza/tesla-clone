import React, { useState } from "react";
import "./App.css";
import HeaderBlock from "./components/header-block/header-block.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header
        isMenuOpen={isMenuOpen}
        toggleIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && <Menu />}
      <HeaderBlock></HeaderBlock>
    </div>
  );
}

export default App;
