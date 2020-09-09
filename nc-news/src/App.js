import React from "react";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar.jsx";

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
          <Articles path="/articles" />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Article
            path="/articles/:article_id/comments"
            user={this.state.user}
          />
          <Articles path="/topics/:topic" />
          <Topics path="/topics/" />
        </Router>
      </div>
    );
  }
}
export default App;
