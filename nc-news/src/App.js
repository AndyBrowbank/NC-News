import React from "react";
import NavBar from "./components/NavBar.jsx";
import Title from "./components/Title.jsx";
import MainDisplay from "./components/MainDisplay.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />

      <MainDisplay />
    </div>
  );
}

export default App;
