import React from "react";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Articles from "./components/Articles.jsx";
import Article from "./components/Article.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

import "./App.css";

class App extends React.Component {
  state = {
    user: "jessjelly",
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar user={this.state.user} />
        <Router>
          <Articles path="/articles" user={this.state.user} />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Articles path="/topics/:topic" />
          <ErrorMessage default />
        </Router>
      </div>
    );
  }
}
export default App;
