import React from "react";
import { Router, Link } from "@reach/router";
import NavBar from "./components/NavBar.jsx";
import Title from "./components/Title.jsx";
import HomePage from "./components/HomePage.jsx";
import Articles from "./components/Articles.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router>
        <HomePage path="/" />
        <Articles path="/articles" />
      </Router>
    </div>
  );
}

export default App;
