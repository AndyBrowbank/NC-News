import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "../utils/api";
import DisplayArticleList from "../components/DisplayArticleList";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    change: function (event) {
      this.setState({ value: event.target.value });
    },
  };

  componentDidMount() {
    this.gettingArticleList();
  }

  render() {
    const { articles, isLoading } = this.state;
    console.log("Articles.jsx state =", this.state);
    if (isLoading) return <h3>...Loading page please wait...</h3>;

    return (
      <div>
        <h3>List of articles below</h3>
        <select
          id="topicChoice"
          onChange={this.change}
          value={this.state.value}
        >
          <option value="Select">Select</option>
          <option value="coding">Coding</option>
          <option value="football">football</option>
          <option value="cooking">cooking</option>
        </select>

        <DisplayArticleList
          articles={articles}
          gettingArticleList={this.articles}
        />
      </div>
    );
  }
  gettingArticleList = (topic) => {
    return api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
