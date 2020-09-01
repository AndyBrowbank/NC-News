import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "../utils/api";
import DisplayArticleList from "../components/DisplayArticleList";

class Articles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.gettingArticleList();
  }

  render() {
    const { articles } = this.state;
    console.log("expected articles = ", articles);
    return (
      <div>
        <h3>list of articles below</h3>
        <DisplayArticleList
          articles={articles}
          gettingArticleList={this.articles}
        />
      </div>
    );
  }
  gettingArticleList = () => {
    api.getAllArticles().then((articles) => {
      this.setState({ articles });
    });
  };
}

export default Articles;
