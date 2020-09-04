import React from "react";
import { Router, Link } from "@reach/router";
import NavBar from "./components/NavBar.jsx";

import HomePage from "./components/HomePage.jsx";
import Articles from "./components/Articles.jsx";
import Article from "./components/Article.jsx";
import Topics from "./components/Topics.jsx";

import "./App.css";

class App extends React.Component {
  state = {
    user: "jessjelly",
  };
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} />
        <Router>
          <HomePage path="/" />
          <Articles path="/articles" />
          <Article path="/articles/:article_id" />
          <Articles path="/topics/:topic" />
          <Topics path="/topics/" />
        </Router>
      </div>
    );
  }
}
export default App;
