import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header
        isMenuOpen={isMenuOpen}
        toggleIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}

export default App;
